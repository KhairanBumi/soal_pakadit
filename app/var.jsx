 import react from 'react';
 import { Text, View } from 'react-native';

 export default function Var() {
   const suhuUdara = 34;
    return (
        <View>
            <Text>Suhu Udara: {suhuUdara}°C</Text>
            {suhuUdara > 35 && (
                <Text>Peringatan: Cuaca Sangat Panas Hari Ini!</Text>
            )}
        </View>
    );
}
