import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StoreProvider from './components/Context/StoreProvider';
import GuiaRestScreen from './components/Screens/HomeScreen';
import SearchScreen from './components/Screens/SearchScreen';
import RestaurantScreen from './components/Screens/RestaurantScreen';
import ShowScreen from './components/Screens/ShowScreen';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='GuiaRest' component={GuiaRestScreen} />
            <Stack.Screen name='Search' component={SearchScreen} />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen name='Show' component={ShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  )
}

  // Componenets Style.
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      backgroundColor: '#f3f6f4',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0,
    },
  });

export default App;