import CreatePostScreen from '@presentation/screens/CreatePost';
import HomeScreen from '@presentation/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

type StackParams = {
  Home: undefined;
  Create: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Create" component={CreatePostScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
