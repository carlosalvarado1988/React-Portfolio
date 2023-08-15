import * as React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Environment } from './Environment';
import { House } from './House';

const StyledCanvas = styled(Canvas)`
  height: 800px;
  width: 100%;
  height: 100%;
  position: relative;
`;

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
