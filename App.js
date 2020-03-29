import * as React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';

// make home screen page
// add navigation param to each function for navigating between screen
function HomeScreen({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// make details screen page
// add navigation param to each function for navigating between screen
function DetailsScreen({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      {/* push will make a new screen altough we're currently on that screen */}
      <Button 
        title="Go to Details...again"
        onPress={() => navigation.push('Details')}
      />
      {/* normally we use navigate to navigating to existing screen */}
      <Button 
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      {/* use goBack() function to return to previous screen */}
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      {/* use popToPop() function to return to first screen */}
      <Button
        title="Go back to first screen"
        onPress={() => navigation.popToTop()}
      />
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

// CONCLUSSIONS
// - navigation.navigate('RouteName') pushes a new route to the stack navigator if it's not already in the stack, otherwise it jumps to that screen.
// - We can call navigation.push('RouteName') as many times as we like and it will continue pushing routes.
// - The header bar will automatically show a back button, but you can programmatically go back by calling navigation.goBack(). On Android, the hardware back button just works as expected.
// - You can go back to an existing screen in the stack with navigation.navigate('RouteName'), and you can go back to the first screen in the stack with navigation.popToTop().
// - The navigation prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).

export default App;