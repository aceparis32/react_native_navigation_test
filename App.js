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
import { TextInput } from 'react-native-gesture-handler';

// make home screen page
// add navigation param to each function for navigating between screen
function HomeScreen({ route, navigation }){
  React.useEffect(() => {
    if(route.params?.post){
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button 
        title="Create Post"
        onPress={() => {
          // 1. Navigate to the details route with params
          navigation.navigate('CreatePost');
        }}
      />
      <Text style={{ margin:10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }){
  const [postText, setPostText ] = React.useState('');

  return(
    <>
      <TextInput 
        multiline
        placeholder="What's on your mind?"
        style={{ height:200, padding:10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button 
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
  );
}

// make details screen page
// add navigation param to each function for navigating between screen
function DetailsScreen({ route, navigation }){
  // 2. Get the param
  const { ItemId } = route.params;
  const { otherParams } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>ItemId: {JSON.stringify(ItemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParams)}</Text>
      {/* push will make a new screen altough we're currently on that screen */}
      <Button 
        title="Go to Details...again"
        onPress={() => navigation.push('Details', {
          ItemId: Math.floor(Math.random() * 100),
        })}
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
          initialParams={{ itemId: 43 }}
        />
        <Stack.Screen 
          name="CreatePost"
          component={CreatePostScreen}
          options={{ title: 'Create Post' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// CONCLUSSIONS
// - navigate and push accept an optional second argument to let you pass parameters to the route you are navigating to. For example: navigation.navigate('RouteName', {paramName: 'value'}).
// - You can read the params through route.params inside a screen
// - You can update the screen's params with navigation.setParams
// - Initial params can be passed via the initialParams prop on Screen

export default App;