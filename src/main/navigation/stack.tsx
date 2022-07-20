import HomeScreenFactory from '@main/factories/screens/home.factory';
import ReadPostScreenFactory from '@main/factories/screens/read-post.factory';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Routes} from './routes';

export type StackParams = {
  [Routes.HOME]: undefined;
  [Routes.READ]: {postId: string};
};

const Stack = createNativeStackNavigator<StackParams>();

const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.HOME} component={HomeScreenFactory} />
      <Stack.Screen name={Routes.READ} initialParams={{postId: '1'}}>
        {props => (
          <ReadPostScreenFactory
            navigation={props.navigation}
            route={props.route}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigation;
