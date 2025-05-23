import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>APOD</Text>
      <Image
        source={require("../../assets/images/NASA.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
});
