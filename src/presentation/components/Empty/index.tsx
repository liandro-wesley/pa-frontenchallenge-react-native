import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';
import Typography from '../Typography';

const Empty: React.FC = () => {
  return (
    <SafeAreaView style={styles.notFoundContainer}>
      <Typography variant="title" color="white800">
        Oops! Não há nada por aqui!
      </Typography>
      <Lottie
        source={require('../../assets/lottie/not-found.json')}
        autoPlay
        loop
        style={styles.lottieContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieContainer: {
    width: 200,
    height: 200,
  },
});

export default Empty;
