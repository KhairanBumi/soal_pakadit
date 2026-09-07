// Soal 6 - Modal + ActivityIndicator
import React, { useState } from "react";
import { View, Text, Pressable, Modal, ActivityIndicator, StyleSheet } from "react-native";

export default function FetchDataScreen() {
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={fetchData}>
        <Text style={styles.buttonText}>Fetch Data</Text>
      </Pressable>

      <Modal visible={loading} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <ActivityIndicator size="large" />
            <Text style={styles.text}>Memuat data...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: { backgroundColor: "#2563eb", padding: 14, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "700" },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", alignItems: "center" },
  modalBox: { width: 220, padding: 24, borderRadius: 12, backgroundColor: "#fff", alignItems: "center" },
  text: { marginTop: 12 }
});
