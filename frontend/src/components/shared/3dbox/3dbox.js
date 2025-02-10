import React from 'react';
import styled, { keyframes } from 'styled-components';

const ScrollableContainer = styled.div`
  width: 100%;
  height: 400px; /* Adjust height as needed */
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

const CubeContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 800px;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: ${rotateAnimation} 10s infinite linear;
`;

const CubeFace = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  background-size: cover;
  background-position: center;
  border: 2px solid black;
`;

const FrontFace = styled(CubeFace)`
  transform: translateZ(100px);
  background-image: url('/images/front.jpg'); /* Replace with actual path */
`;

const BackFace = styled(CubeFace)`
  transform: translateZ(-100px) rotateY(180deg);
  background-image: url('/images/back.jpg');
`;

const RightFace = styled(CubeFace)`
  transform: rotateY(90deg) translateZ(100px);
  background-image: url('/images/right.jpg');
`;

const LeftFace = styled(CubeFace)`
  transform: rotateY(-90deg) translateZ(100px);
  background-image: url('/images/left.jpg');
`;

const TopFace = styled(CubeFace)`
  transform: rotateX(90deg) translateZ(100px);
  background-image: url('/images/top.jpg');
`;

const BottomFace = styled(CubeFace)`
  transform: rotateX(-90deg) translateZ(100px);
  background-image: url('/images/bottom.jpg');
`;

const CubeViewer = () => {
  return (
    <ScrollableContainer>
      <CubeContainer>
        <Cube>
          <FrontFace />
          <BackFace />
          <RightFace />
          <LeftFace />
          <TopFace />
          <BottomFace />
        </Cube>
      </CubeContainer>
    </ScrollableContainer>
  );
};

export default CubeViewer;