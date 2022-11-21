import React from 'react';
import { ActivityIndicator } from 'react-native';
import Box from '../Box';

const LoadingScreen = () => {
  return (
    <Box flex={1} align="center" justify="center" background="NEUTRAL_100">
      <ActivityIndicator size={'large'} color="white"></ActivityIndicator>
    </Box>
  );
};

export default LoadingScreen;
