import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import details from "../screens/details";

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    //vamos a devolver el contenedor de vistas
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "blue",
              
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Detalles"
          component={details}
          options={{
            title: "Detalles",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}