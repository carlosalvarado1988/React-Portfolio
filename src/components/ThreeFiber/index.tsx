import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';

import { StyledCanvas } from './index.styles';
import { Environment } from './Environment';
import { House } from './House';

const NavigationBox = styled(Box)`
  display: flex;
  position: absolute;
  z-index: 1;
  padding: 10px;
`;

export const ThreeFiber: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBox>
        <Button variant="contained" onClick={() => navigate('/#portfolio')}>
          Home
        </Button>
      </NavigationBox>
      <StyledCanvas shadows camera={{ position: [-15, 10, 15], fov: 25 }}>
        <color attach="background" args={['skyblue']} />
        <House />
        <Environment />
        <OrbitControls makeDefault />
      </StyledCanvas>
    </>
  );
};
