import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import Visor from "../components/visor";
import Card from "../components/card";
import Layout from "../layout/layout";
import { useEffect, useState } from "react";
import fetchApod from "../api/fetchapod";
import { useNavigation } from "@react-navigation/native";
import BuscarFecha from "../components/BuscarFecha";


export default function Home() {
  const navigation = useNavigation();
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchApod(5);
      setImagenes([...data].reverse());

    };
    getImages();
  }, []);

  const goToDetails = (item) => {
    navigation.navigate("Detalles", { data: item });
  };

  // El primer elemento lo mostramos en el ListHeaderComponent
  const renderHeader = () => {
    if (imagenes.length === 0) return null;
    return (
      <>
        <Header />
        <Visor
          titulo={imagenes[0].title}
          url={imagenes[0].url}
          onPress={() => goToDetails(imagenes[0])}
          fecha={imagenes[0].date}
        />
      </>
    );
  };

  return (
    <Layout>
      <FlatList
        data={imagenes.slice(1)}
        keyExtractor={(item) => item.date}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            date={item.date}
            url={item.url}
            onPress={() => goToDetails(item)}
          />
        )}
      />
      <BuscarFecha />
      <StatusBar style="light" />
    </Layout>
  );
}