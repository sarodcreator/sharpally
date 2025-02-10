import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Image1 from '../../../images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import Image2 from '../../../images/alex-knight-2EJCSULRwC8-unsplash.jpg';
import Image3 from '../../../images/surface-91HFUXYi_Jg-unsplash.jpg';
import Image4 from '../../../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import Image5 from '../../../images/magnet-me-9rierf0Y-QY-unsplash.jpg';
import Image6 from '../../../images/nathan-dumlao-QvM7SCMFtVc-unsplash.jpg';

const ScrollableContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
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
  cursor: pointer;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: ${({ isDisassembled }) => (isDisassembled ? 'none' : `${rotateAnimation} 10s infinite linear ease-in-out`)};
  will-change: transform;
`;

const CubeFace = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  background-size: cover;
  background-position: center;
  border: 2px solid black;
  transition: transform 1s ease-in-out;
`;

const FrontFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'translateZ(300px)' : 'translateZ(100px)')};
  background-image: url(${Image1});
`;

const BackFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'translateZ(-300px)' : 'translateZ(-100px) rotateY(180deg)')};
  background-image: url(${Image2});
`;

const RightFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'translateX(300px)' : 'rotateY(90deg) translateZ(100px)')};
  background-image: url(${Image3});
`;

const LeftFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'translateX(-300px)' : 'rotateY(-90deg) translateZ(100px)')};
  background-image: url(${Image4});
`;

const TopFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'translateY(-300px)' : 'rotateX(90deg) translateZ(100px)')};
  background-image: url(${Image5});
`;

const BottomFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'translateY(300px)' : 'rotateX(-90deg) translateZ(100px)')};
  background-image: url(${Image6});
`;

const CubeViewer = () => {
  const [isDisassembled, setIsDisassembled] = useState(false);

  const handleClick = () => {
    setIsDisassembled(!isDisassembled);
  };

  return (
    <ScrollableContainer>
      <CubeContainer onClick={handleClick}>
        <Cube isDisassembled={isDisassembled}>
          <FrontFace isDisassembled={isDisassembled} />
          <BackFace isDisassembled={isDisassembled} />
          <RightFace isDisassembled={isDisassembled} />
          <LeftFace isDisassembled={isDisassembled} />
          <TopFace isDisassembled={isDisassembled} />
          <BottomFace isDisassembled={isDisassembled} />
        </Cube>
      </CubeContainer>
    </ScrollableContainer>
  );
};

export default CubeViewer;