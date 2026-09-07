// Soal 5 - MyButton dengan variant
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function MyButton({ title, onPress, variant = "primary" }) {
  const backgroundColor = {
    primary: "#2563eb",
    success: "#16a34a",
    danger: "#dc2626",
  }[variant] || "#2563eb";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, alignItems: "center", marginVertical: 6 },
  pressed: { opacity: 0.7 },
  text: { color: "#fff", fontWeight: "700" }
});
