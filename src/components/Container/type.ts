import {BoxProps} from './../Box/types';


import {ReactNode} from 'react';

export interface ContainerProps extends BoxProps {
  children?: ReactNode;
}
