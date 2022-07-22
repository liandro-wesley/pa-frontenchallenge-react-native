import CreateScreenFactory from '@main/factories/screens/create-post.factory';
import FavoritePostsScreenFactory from '@main/factories/screens/favorite-posts.factory';
import HomeScreenFactory from '@main/factories/screens/home.factory';
import ReadPostScreenFactory from '@main/factories/screens/read-post.factory';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Routes} from './routes';

export type StackParams = {
  [Routes.HOME]: undefined;
  [Routes.CREATE]: undefined;
  [Routes.FAVORITE]: undefined;
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
      <Stack.Screen name={Routes.HOME}>
        {props => <HomeScreenFactory navigation={props.navigation} />}
      </Stack.Screen>
      <Stack.Screen name={Routes.CREATE}>
        {props => <CreateScreenFactory navigation={props.navigation} />}
      </Stack.Screen>
      <Stack.Screen name={Routes.READ} initialParams={{postId: ''}}>
        {props => (
          <ReadPostScreenFactory
            navigation={props.navigation}
            route={props.route}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name={Routes.FAVORITE}>
        {props => <FavoritePostsScreenFactory navigation={props.navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigation;
