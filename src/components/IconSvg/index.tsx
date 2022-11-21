import React from 'react';
import { IconSvgType } from './type';
import ap from './asset/ap.svg';
import calendar from './asset/calendar.svg';
import check from './asset/check.svg';
import edit from './asset/edit.svg';
import fb from './asset/fb.svg';
import gg from './asset/gg.svg';
import idk from './asset/idk.svg';
import left_arrow from './asset/left_arrow.svg';
import lock from './asset/lock.svg';
import logo from './asset/logo.svg';
import map from './asset/map.svg';
import phone from './asset/phone.svg';
import refresh from './asset/refresh.svg';
import location_point from './asset/location_point.svg';
import search from './asset/search.svg';
import setting from './asset/setting.svg';
import user_plus from './asset/user_plus.svg';
import tw from './asset/tw.svg';
import kyc from './asset/kyc.svg';
import { SvgXml } from 'react-native-svg';
import { User } from './asset/user';
import { Scan } from './asset/scan';
import { Camera } from './asset/camera';
import { Noti } from './asset/noti';
import Box from '../Box';
import { Shadow } from 'react-native-shadow-2';
import check_white from './asset/check_white.svg';
import card from './asset/card.svg';
import cmnd from './asset/cmnd.svg';
import selfie from './asset/selfie.svg';
import fail from './asset/fail.svg';
import green_check from './asset/green_check.svg';
import check_green from './asset/check_green.svg';
import red_x from './asset/red_x.svg';
import privacy_tip from './asset/privacy_tip.svg';
import item_marker from './asset/item_marker.svg';
import reward from './asset/reward.svg';
import wallet from './asset/wallet.svg';
import preference from './asset/preference.svg';
import copy from './asset/copy.svg';
import right_v from './asset/right_v.svg';

interface IconSvgProps {
  name: IconSvgType;
  color?: any;
  size?: number;
}

const IconSvg: React.FC<IconSvgProps> = ({ name, color, size = 100 }) => {
  const renderIcon = () => {
    switch (name) {
      case 'twitter':
        return (
          <Shadow
            distance={10}
            startColor={'rgba(67, 205, 249, 0.29)'}
            offset={[0, 3]}
            style={{
              borderRadius: 28,
            }}
          >
            <Box circle={28} background="BLUE" align="center" justify="center">
              <SvgXml width={16} height={16} color={color} xml={tw} />
            </Box>
          </Shadow>
        );
      case 'apple':
        return (
          <Shadow
            distance={10}
            startColor={'rgba(0, 0, 0, 0.18)'}
            offset={[0, 3]}
            style={{
              borderRadius: 28,
            }}
          >
            <Box circle={28} background="BLACK" align="center" justify="center">
              <SvgXml width={16} height={16} color={color} xml={ap} />
            </Box>
          </Shadow>
        );
      case 'calendar':
        return (
          <SvgXml width={size} height={size} color={color} xml={calendar} />
        );
      case 'camera':
        return <Camera color={color} />;
      case 'check':
        return <SvgXml width={size} height={size} color={color} xml={check} />;
      case 'edit':
        return <SvgXml width={size} height={size} color={color} xml={edit} />;
      case 'facebook':
        return (
          <Shadow
            distance={10}
            startColor={'rgba(60, 145, 255, 0.25)'}
            offset={[0, 3]}
            style={{
              borderRadius: 28,
            }}
          >
            <Box circle={28} background="FB" align="center" justify="center">
              <SvgXml width={16} height={16} color={color} xml={fb} />
            </Box>
          </Shadow>
        );
      case 'google':
        return (
          <Shadow
            distance={10}
            startColor={'rgba(240, 95, 83, 0.25)'}
            offset={[0, 3]}
            style={{
              borderRadius: 28,
            }}
          >
            <Box circle={28} background="GG" align="center" justify="center">
              <SvgXml width={16} height={16} color={color} xml={gg} />
            </Box>
          </Shadow>
        );
      case 'idk':
        return <SvgXml width={size} height={size} color={color} xml={idk} />;
      case 'left_arrow':
        return (
          <SvgXml
            width={size}
            height={size}
            color={color ? color : 'white'}
            xml={left_arrow}
          />
        );
      case 'lock':
        return <SvgXml width={size} height={size} color={color} xml={lock} />;
      case 'logo':
        return <SvgXml width={size} height={size} color={color} xml={logo} />;
      case 'map':
        return <SvgXml width={size} height={size} color={color} xml={map} />;
      case 'noti':
        return <Noti color={color} />;
      case 'phone':
        return <SvgXml width={size} height={size} color={color} xml={phone} />;
      case 'refresh':
        return (
          <SvgXml width={size} height={size} color={color} xml={refresh} />
        );
      case 'scan':
        return <Scan color={color} />;
      case 'search':
        return <SvgXml width={size} height={size} color={color} xml={search} />;
      case 'setting':
        return (
          <SvgXml width={size} height={size} color={color} xml={setting} />
        );
      case 'user_plus':
        return (
          <SvgXml width={size} height={size} color={color} xml={user_plus} />
        );
      case 'user':
        return <User color={color} />;
      case 'kyc':
        return <SvgXml width={size} height={size} color={color} xml={kyc} />;
      case 'check_white':
        return (
          <SvgXml width={size} height={size} color={color} xml={check_white} />
        );
      case 'card':
        return <SvgXml width={size} height={size} color={color} xml={card} />;
      case 'cmnd':
        return <SvgXml width={size} height={size} color={color} xml={cmnd} />;
      case 'selfie':
        return <SvgXml width={size} height={size} color={color} xml={selfie} />;
      case 'fail':
        return <SvgXml width={size} height={size} color={color} xml={fail} />;
      case 'green_check':
        return (
          <SvgXml width={size} height={size} color={color} xml={green_check} />
        );
      case 'check_green':
        return (
          <SvgXml width={size} height={size} color={color} xml={check_green} />
        );
      case 'red_x':
        return <SvgXml width={size} height={size} color={color} xml={red_x} />;
      case 'privacy_tip':
        return (
          <SvgXml width={size} height={size} color={color} xml={privacy_tip} />
        );
      case 'item_marker':
        return (
          <SvgXml width={size} height={size} color={color} xml={item_marker} />
        );
      case 'reward':
        return <SvgXml width={size} height={size} color={color} xml={reward} />;
      case 'wallet':
        return <SvgXml width={size} height={size} color={color} xml={wallet} />;
      case 'preference':
        return (
          <SvgXml width={size} height={size} color={color} xml={preference} />
        );
      case 'copy':
        return <SvgXml width={size} height={size} color={color} xml={copy} />;
      case 'right_v':
        return (
          <SvgXml width={size} height={size} color={color} xml={right_v} />
        );

      case 'location_point':
        return (
          <SvgXml
            width={size}
            height={size}
            color={color}
            xml={location_point}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderIcon()}</>;
};

export { IconSvg };
