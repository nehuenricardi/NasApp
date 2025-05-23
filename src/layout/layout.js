import { View, StyleSheet } from "react-native";

export default function Layout({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00154F",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
});
