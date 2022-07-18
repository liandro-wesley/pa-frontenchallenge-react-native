import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

const Loading: React.FC = () => {
  return (
    <SafeAreaView style={styles.loadingContainer}>
      <Lottie
        source={require('../../assets/lottie/loading.json')}
        autoPlay
        loop
        style={styles.lottieContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieContainer: {
    width: 200,
    height: 200,
  },
});

export default Loading;
