import * as React from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';

// make home screen page
function HomeScreen(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

// make details screen page
function DetailsScreen(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

// initiate stack navigator
const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      {/* use initialRouteName as the first page you want to render */}
      <Stack.Navigator initialRouteName="Home">
        {/* Screen need name prop to which refers to the name of the route
        and component prop which specifies the component to render for the route
        these are the 2 required props. */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Overview'}}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Details'}}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;