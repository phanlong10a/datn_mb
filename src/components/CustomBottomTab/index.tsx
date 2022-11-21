import Box from '@src/components/Box';
import COLORS from '@src/configs/theme/colors';
import {deviceWidth} from '@src/configs/theme/common';
import {ScreensName} from '@src/routes/types';
import i18n from '@src/utils/i18n';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from '../Icon';
import Typography from '../Typography';

const CustomBottomTab = (props: any) => {
  const tabs = [1, 2];
  const MAP_URL = [ScreensName.HomeRoute, ScreensName.AccountRoute];
  const icon = ['home', 'user'];
  const label = ['home', 'account'];

  const _goToPage = (e: any) => {
    props.navigation.navigate(MAP_URL[e]);
  };
  const {state} = props;
  const {index: activeIcon} = state;
  return (
    <Box style={styles.content}>
      <Box style={styles.subContent}>
        {tabs.map((e, i) => {
          return (
            <Box
              key={i}
              onPress={() => _goToPage(e - 1)}
              activePress
              align="center"
              justify="space-between">
              <Icon
                name={icon[e - 1]}
                size={20}
                color={
                  activeIcon === e - 1 ? COLORS.PRIMARY_500 : COLORS.MONO_300
                }
              />
              <Typography
                key={i}
                margin={[5, 0, 0, 0]}
                type="Small - Semibold"
                color={activeIcon === i ? 'PRIMARY_500' : 'MONO_300'}>
                {i18n.t(label[e - 1])}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  content: {
    zIndex: 0,
    width: deviceWidth,
    height: 0,
    justifyContent: 'flex-end',
  },
  subContent: {
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    bottom: 20,
  },
});
