// Soal 8 - SectionList Nilai Siswa
import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

const sections = [
  {
    title: "Mata Pelajaran Kejuruan",
    data: [
      { nama: "Pemrograman", nilai: 90 },
      { nama: "Basis Data", nilai: 88 },
      { nama: "Mobile", nilai: 92 },
    ],
  },
  {
    title: "Mata Pelajaran Umum",
    data: [
      { nama: "Bahasa Indonesia", nilai: 85 },
      { nama: "Matematika", nilai: 87 },
      { nama: "Bahasa Inggris", nilai: 89 },
    ],
  },
];

export default function StudentGrades() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.nama}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nama}</Text>
            <Text>{item.nilai}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 18, fontWeight: "700", paddingVertical: 12 },
  item: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" }
});
