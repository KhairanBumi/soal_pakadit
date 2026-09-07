// Soal 1 - UserCard
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const UserCard = ({ name, status, imageUrl }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageUrl }} style={styles.avatar} />
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text>Status: {status}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <UserCard
        name="Budi Santoso"
        status="Aktif"
        imageUrl="https://i.pravatar.cc/150?img=12"
      />
      <UserCard
        name="Siti Aisyah"
        status="Alumni"
        imageUrl="https://i.pravatar.cc/150?img=47"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  card: { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, borderWidth: 1, borderRadius: 10, marginBottom: 12 },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  name: { fontSize: 18, fontWeight: "700" }
});
