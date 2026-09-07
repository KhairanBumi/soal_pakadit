// Soal 10 - Persetujuan Kebijakan Privasi
import React, { useState } from "react";
import { View, Text, Switch, Pressable, StyleSheet } from "react-native";

export default function PrivacyAgreement() {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Switch value={agreed} onValueChange={setAgreed} />
        <Text style={styles.text}>
          Saya menyetujui Syarat & Ketentuan dan Kebijakan Privasi.
        </Text>
      </View>

      <Pressable
        disabled={!agreed}
        style={[styles.submit, !agreed && styles.disabled]}
        onPress={() => console.log("Form dikirim")}
      >
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  text: { flex: 1, marginLeft: 10 },
  submit: { padding: 14, borderRadius: 8, backgroundColor: "#2563eb", alignItems: "center" },
  disabled: { backgroundColor: "#aaa" },
  submitText: { color: "#fff", fontWeight: "700" }
});
