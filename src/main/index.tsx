import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Navigation from './navigation/navigation';
const Main: React.FC = () => {
  return (
    <View style={styles.wrapperScreen}>
      <StatusBar />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperScreen: {
    flex: 1,
  },
});

export default Main;
