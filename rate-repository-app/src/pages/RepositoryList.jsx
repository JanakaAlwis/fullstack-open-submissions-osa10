import React, { useState } from 'react';
import { FlatList, View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from '../components/RepositoryItem';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedKeyword] = useDebounce(searchKeyword, 500);
  const { repositories } = useRepositories({ orderBy, orderDirection, searchKeyword: debouncedKeyword });
  const navigate = useNavigate();

  const repoNodes = repositories ? repositories.edges.map(e => e.node) : [];

  return (
    <View style={styles.container}>
      <Picker selectedValue={`${orderBy}-${orderDirection}`} onValueChange={(val) => {
        const [by, dir] = val.split('-');
        setOrderBy(by);
        setOrderDirection(dir);
      }}>
        <Picker.Item label="Latest repositories" value="CREATED_AT-DESC" />
        <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE-DESC" />
        <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE-ASC" />
      </Picker>
      <TextInput
        style={styles.search}
        placeholder="Search repositories..."
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />

      <FlatList
        data={repoNodes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RepositoryItem repository={item} onPress={() => navigate(`/repository/${item.id}`)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  search: { margin: 8, padding: 8, backgroundColor: '#eee', borderRadius: 4 },
});

export default RepositoryList;

