import { StyleSheet, View, Image, Pressable } from "react-native";
import TextWhite from "./textWhite";

export default function Visor({ titulo, url, fecha, onPress }) {
  return (
    <View style={styles.container}>
      <TextWhite texto={titulo} fontSize={24} />
      <Image source={{ uri: url }} style={styles.img} />
      <TextWhite texto={fecha} fontSize={14} />
      <Pressable onPress={onPress} style={styles.button}>
        <TextWhite texto="Detalles" fontSize={14} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    padding: 16,
    borderColor: "#fc3d21",
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: "#00154F",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
  },
  img: {
    alignSelf: "center",
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginTop: 10,
  },
  button: {
    marginTop: 8,
    backgroundColor: "transparent", 
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignItems: "flex-start",       
  },
});
