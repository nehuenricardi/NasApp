import { View, Text, Image, StyleSheet } from "react-native";
import Boton from "./boton";

export default function Card({ title, date, url, isMain, onPress }) {
  if (isMain) {
    return (
      <View style={styles.cardMain}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={typeof url === "string" ? { uri: url } : url}
          style={styles.imageMain}
        />
        <Text style={styles.date}>{date}</Text>
        <Boton onPress={onPress} />
      </View>
    );
  }

  return (
    <View style={styles.cardSecondary}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Boton onPress={onPress} />
      </View>
      <Image
        source={typeof url === "string" ? { uri: url } : url}
        style={styles.imageSecondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardMain: {
    backgroundColor: "#00154F",
    borderWidth: 1,
    borderColor: "#FF3C38",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  cardSecondary: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#FF3C38",
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#00154F",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  date: {
    color: "#ccc",
    fontSize: 12,
    marginBottom: 4,
  },
  imageSecondary: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  imageMain: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginVertical: 12,
  },
});
