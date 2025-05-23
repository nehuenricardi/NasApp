import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import TextWhite from "./textWhite";
import { useNavigation } from "@react-navigation/native";

export default function BuscarFecha() {
  const [fecha, setFecha] = useState(null); // Guardamos la fecha como objeto Date o null
  const [showPicker, setShowPicker] = useState(false);
  const navigation = useNavigation();

  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === "ios"); // En iOS el picker queda abierto
    if (selectedDate) {
      setFecha(selectedDate);
    }
  };

  const formatFecha = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleBuscar = async () => {
    if (!fecha) {
      alert("Por favor selecciona una fecha.");
      return;
    }

    const fechaFormateada = formatFecha(fecha);

    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=fmhY1XYjBAzrrFKLxIb0ImZNtgQ01YfP8aPJv3vv&date=${fechaFormateada}`
      );
      const data = await response.json();

      if (!data || !data.url) {
        alert("No se encontró una imagen para esa fecha.");
        return;
      }

      setFecha(null);
      navigation.navigate("Detalles", { data });
    } catch (error) {
      console.log("Error al obtener imagen APOD por fecha:", error);
      alert("Ocurrió un error. Intenta con otra fecha.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <View style={styles.container}>
        <Pressable
          onPress={() => setShowPicker(true)}
          style={[styles.input, { justifyContent: "center" }]}
        >
          <TextWhite
            texto={fecha ? fecha.toLocaleDateString() : "Selecciona fecha"}
            fontSize={14}
          />
        </Pressable>

        <Pressable onPress={handleBuscar} style={styles.boton}>
          <TextWhite texto="Buscar" fontSize={14} />
        </Pressable>

        {showPicker && (
          <DateTimePicker
            value={fecha || new Date()}
            mode="date"
            display="default"
            maximumDate={new Date()}
            onChange={onChange}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 30,
    left: 10,
    zIndex: 100,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00154F",
    padding: 8,
    borderRadius: 8,
    borderColor: "#FF3C38",
    borderWidth: 1,
  },
  input: {
    color: "white",
    borderBottomColor: "#FF3C38",
    borderBottomWidth: 1,
    marginRight: 8,
    width: 130,
    height: 36,
    fontSize: 14,
  },
  boton: {
    padding: 6,
    backgroundColor: "transparent",
  },
});
