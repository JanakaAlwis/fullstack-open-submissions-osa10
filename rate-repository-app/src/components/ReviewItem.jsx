import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

const ReviewItem = ({ review }) => (
  <View style={styles.container}>
    <Text style={styles.rating}>{review.rating}</Text>
    <View style={styles.textContainer}>
      <Text style={styles.username}>{review.user.username}</Text>
      <Text style={styles.date}>
        {format(new Date(review.createdAt), 'dd.MM.yyyy')}
      </Text>
      <Text>{review.text}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 16, backgroundColor: '#fff', marginBottom: 8 },
  rating: {
    width: 50, height: 50, borderRadius: 25,
    borderColor: '#0366d6', borderWidth: 2,
    textAlign: 'center', lineHeight: 46,
    fontWeight: 'bold'
  },
  textContainer: { flex: 1, paddingLeft: 16 },
  username: { fontWeight: 'bold' },
  date: { color: '#666', marginBottom: 4 },
});

export default ReviewItem;
