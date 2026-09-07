import { View, Text, Image, StyleSheet } from 'react-native';

type UserCardProps = {
  name: string;
  status: string;
  imageUrl: string;
};

export default function UserCard({
  name,
  status,
  imageUrl,
}: UserCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  status: {
    fontSize: 14,
    marginTop: 5,
  },
});