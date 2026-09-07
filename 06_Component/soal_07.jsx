// Soal 7 - CustomImage + loading indicator
import React, { useState } from "react";
import { View, Image, ActivityIndicator, StyleSheet } from "react-native";

export default function CustomImage({ source, style }) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={[styles.wrapper, style]}>
      <Image
        source={source}
        style={StyleSheet.absoluteFillObject}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        resizeMode="cover"
      />

      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: 200, height: 140, overflow: "hidden", borderRadius: 10 },
  loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eee" }
});
