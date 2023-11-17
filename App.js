import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeLayout from './components/Layouts/HomeLayout';
import RestaurantLayout from './components/Layouts/RestaurantLayout';
import SearchLayout from './components/Layouts/SearchLayout';
import ShowLayout from './components/Layouts/ShowLayout';
import StoreProvider from './components/Context/StoreProvider';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <StoreProvider>
          <Stack.Screen name='Home' component={<HomeLayout/>} />
          <Stack.Screen name='Search' component={<SearchLayout/>} />
          <Stack.Screen name='Restaurant' component={<RestaurantLayout/>} />
          <Stack.Screen name='Show' component={<ShowLayout/>} />
        </StoreProvider>
      </Stack.Navigator>
    </NavigationContainer>
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