import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image1 from '../../../images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import Image2 from '../../../images/alex-knight-2EJCSULRwC8-unsplash.jpg';
import Image3 from '../../../images/surface-91HFUXYi_Jg-unsplash.jpg';
import Image4 from '../../../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import Image5 from '../../../images/magnet-me-9rierf0Y-QY-unsplash.jpg';
import Image6 from '../../../images/nathan-dumlao-QvM7SCMFtVc-unsplash.jpg';

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
  /*background-image: url('../../../images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg');*/
  background-image: url(${Image1});
  object-fit: contain;
   background-size: cover;                                     background-position: center;
`;

const BackFace = styled(CubeFace)`
  transform: translateZ(-100px) rotateY(180deg);
  background-image: url(${Image2});
  object-fit: contain;
   background-size: cover;                                     background-position: center;
`;

const RightFace = styled(CubeFace)`
  transform: rotateY(90deg) translateZ(100px);
  background-image: url(${Image3});
  object-fit: contain;
   background-size: cover;                                     background-position: center;
`;

const LeftFace = styled(CubeFace)`
  transform: rotateY(-90deg) translateZ(100px);
  background-image: url(${Image4});
  object-fit: contain;
   background-size: cover;                                     background-position: center;
`;

const TopFace = styled(CubeFace)`
  transform: rotateX(90deg) translateZ(100px);
  background-image: url(${Image5});
  object-fit: contain;
   background-size: cover;                                     background-position: center;
`;

const BottomFace = styled(CubeFace)`
  transform: rotateX(-90deg) translateZ(100px);
  background-image: url(${Image6});
  object-fit: contain;
  background-size: cover;
  background-position: center;
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
