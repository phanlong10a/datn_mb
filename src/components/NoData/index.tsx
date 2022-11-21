import i18n from '@src/utils/i18n';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Typography from '../Typography';

const NoData: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Image
          source={require('../../../assets/dummy/logo.png')}
          style={styles.image}
        />
        <Typography type="Body1 - Medium" color="WHITE">
          {i18n.t('no_data')}
        </Typography>
      </View>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    zIndex: 100,
    width: 150,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  // backgroundLoading: {
  //   right: 0,
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   position: 'absolute',
  //   backgroundColor: COLORS.BG_100,
  // },
});
