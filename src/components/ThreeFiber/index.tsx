import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { StyledCanvas } from './index.styles';
import { Environment } from './Environment';
import { House } from './House';

export const ThreeFiber: React.FunctionComponent = () => {
  return (
    <StyledCanvas shadows camera={{ position: [-15, 10, 15], fov: 25 }}>
      <color attach="background" args={['skyblue']} />
      <House />
      <Environment />
      <OrbitControls makeDefault />
    </StyledCanvas>
  );
};
