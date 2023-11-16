import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import HomeLayout from './components/Layouts/HomeLayout';
import RestaurantLayout from './components/Layouts/RestaurantLayout';
import SearchLayout from './components/Layouts/SearchLayout';
import ShowLayout from './components/Layouts/ShowLayout';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <View style={styles.container}>
          <SafeAreaView style={styles.container}>
            <StoreProvider>
              <Stack.Screen name='Home' component={<HomLayout/>} />
              <Stack.Screen name='Search' component={<SearchLayout/>} />
              <Stack.Screen name='Restaurant' component={<RestaurantLayout/>} />
              <Stack.Screen name='Show' component={<ShowLayout/>} />
            </StoreProvider>
          </SafeAreaView>
          <StatusBar style="auto" />
        </View>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home'
            }
          },
        ]
      },
    }
  });
});

// HomeScreen component.
const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StoreProvider>
          <HomeLayout componentId={props.componentId} />
        </StoreProvider>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
};

// Starting options for the HomeScreen component.
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Guía Rest'
    }
  }
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Search', () => {<SearchLayout />});
Navigation.registerComponent('Restaurant', () => {<RestaurantLayout />});
Navigation.registerComponent('Show', () => {<ShowLayout />});

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
})