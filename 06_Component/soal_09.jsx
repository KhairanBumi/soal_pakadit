// Soal 9 - Pilihan Kategori Kustom
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Light Mode", "Dark Mode", "System Default"];

export default function ModeSelector() {
  const [selected, setSelected] = useState("System Default");

  return (
    <View style={styles.container}>
      {options.map((option) => {
        const active = selected === option;

        return (
          <TouchableOpacity
            key={option}
            style={[styles.item, active && styles.activeItem]}
            onPress={() => setSelected(option)}
          >
            <Text style={[styles.text, active && styles.activeText]}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  item: { padding: 16, borderRadius: 10, backgroundColor: "#eee", marginBottom: 10 },
  activeItem: { backgroundColor: "#2563eb" },
  text: { fontSize: 16 },
  activeText: { color: "#fff", fontWeight: "700" }
});
