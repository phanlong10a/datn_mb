import React, {useCallback} from 'react';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from '@src/components/Icon';
import {Linking} from 'react-native';
import COLORS from '@src/configs/theme/colors';

const SelectItem: React.FC<any> = ({
  option,
  onChange,
  icon,
  type,
  setState,
  // imageApi,
  onPress,
  value,
}) => {
  const _openLibrary = async () => {
    try {
      const {assets} = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: false,
        selectionLimit: 1,
        maxWidth: 1024,
        maxHeight: 1024,
      });
      onChange && assets && onChange(assets[0]);
    } catch (e) {}
  };
  const _handlePress = useCallback(() => {
    Linking.openSettings();
  }, []);

  const handlePress = async () => {
    await onChange(option.value);

    setState({visible: false});
  };
  return (
    <Box
      activePress
      onPress={handlePress}
      flexDirection="row"
      align="center"
      justify={icon ? 'flex-start' : 'space-between'}
      padding={[15, 30, 15, 30]}>
      {icon && <Icon name={option.value} size={25} />}
      <Typography margin={[0, 0, 0, 12]} type="Body1 - Regular" color="BLACK">
        {option && option.label}
      </Typography>
      {value === option.value && (
        <Icon name="check_circle" size={18} color={COLORS.GREEN_500} />
      )}
    </Box>
  );
};

export default SelectItem;
