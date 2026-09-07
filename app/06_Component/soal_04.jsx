// Soal 4 - ScrollView Horizontal + Vertical
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const categories = ["Pemrograman", "UI/UX", "Database", "Jaringan", "Mobile"];

export default function LearningPage() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryBar}>
        {categories.map((category) => (
          <View key={category} style={styles.category}>
            <Text>{category}</Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView style={styles.article}>
        <Text style={styles.title}>Belajar Pemrograman Perangkat Bergerak</Text>
        <Text>
          Ini adalah contoh konten artikel yang dapat digeser secara vertikal.
          Tambahkan materi pembelajaran di sini sesuai kebutuhan aplikasi.
        </Text>
        <Text style={styles.paragraph}>
          Materi lanjutan: komponen, state, props, navigasi, dan pengelolaan data
          pada aplikasi React Native.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  categoryBar: { flexGrow: 0, paddingHorizontal: 12 },
  category: { padding: 12, marginRight: 8, borderWidth: 1, borderRadius: 20 },
  article: { padding: 16 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
  paragraph: { marginTop: 12, lineHeight: 22 }
});
