// Soal 3 - FlatList 50 Produk
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const products = Array.from({ length: 50 }, (_, index) => ({
  id: String(index + 1),
  name: `Produk ${index + 1}`,
  price: (index + 1) * 5000,
}));

export default function ProductCatalog() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>Rp {item.price.toLocaleString("id-ID")}</Text>
          </View>
        )}
        initialNumToRender={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#ddd", flexDirection: "row", justifyContent: "space-between" }
});
