import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Loja from "./src/pages/loja/index";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/login/script";
import Registro from "./src/pages/registro/scripts";
import Forgot from "./src/pages/forgot/scripts";

export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Loja" component={Loja} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("screen")
  },
});
