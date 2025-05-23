import { Pressable, StyleSheet } from "react-native";
import TextWhite from "./textWhite";
import { useNavigation } from "@react-navigation/native";

export default function Boton({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.boton,
      ]}
    >
      <TextWhite texto="Detalles" fontSize={14} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "transparent", 
    paddingVertical: 0,              
    paddingHorizontal: 0,           
    marginTop: 4,
    alignItems: "flex-start",       
  },
});
