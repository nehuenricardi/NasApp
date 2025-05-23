import { View, Text } from "react-native";

//por que si lo usamos en otro archivo, primero lo exportamos
export default function TextWhite({ texto, fontSize = 20, style = {} }) {
  return (
    <Text style={[{ color: "white", fontSize: fontSize }, style]}>
      {texto}
    </Text>
  );
}
