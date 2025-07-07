import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: '#586069',
    marginBottom: 5,
  },
  language: {
    alignSelf: 'flex-start',
    backgroundColor: '#0366d6',
    color: 'white',
    fontWeight: 'bold',
    padding: 6,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
});

const formatNumber = (num) =>
  num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{formatNumber(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{formatNumber(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
