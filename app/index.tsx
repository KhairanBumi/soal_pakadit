import { View } from "react-native";
import VarScreen from "./var";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VarScreen />
    </View>
  );
}
