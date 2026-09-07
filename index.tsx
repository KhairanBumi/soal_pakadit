import { View, Text, Image } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Direktori Anggota
      </Text>

      <View style={{ marginBottom: 20 }}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=1' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />

        <Text style={{ fontSize: 18 }}>Shirleen Masha</Text>
        <Text>Aktif</Text>
      </View>

      <View>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=2' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />

        <Text style={{ fontSize: 18 }}>Amanda Putri</Text>
        <Text>Alumni</Text>
      </View>
    </View>
  );
}