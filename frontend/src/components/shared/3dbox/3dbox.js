import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
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
  animation: ${({ isDisassembled }) =>
    isDisassembled ? 'none' : css`${rotateAnimation} 10s infinite linear`};
  transition: transform 0.5s ease-in-out;
  transform: ${({ rotation }) => `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`};
`;

const CubeFace = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  background-size: cover;
  background-position: center;
  border: 2px solid black;
  transition: transform 0.3s ease-in-out;
`;

const FrontFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'translateZ(150px)' : 'translateZ(100px)')};
  background-image: url(${Image1});
`;

const BackFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'translateZ(-150px) rotateY(180deg)' : 'translateZ(-100px) rotateY(180deg)')};
  background-image: url(${Image2});
`;

const RightFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'rotateY(90deg) translateZ(150px)' : 'rotateY(90deg) translateZ(100px)')};
  background-image: url(${Image3});
`;

const LeftFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'rotateY(-90deg) translateZ(150px)' : 'rotateY(-90deg) translateZ(100px)')};
  background-image: url(${Image4});
`;

const TopFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'rotateX(90deg) translateZ(150px)' : 'rotateX(90deg) translateZ(100px)')};
  background-image: url(${Image5});
`;

const BottomFace = styled(CubeFace)`
  transform: ${({ isDisassembled }) => (isDisassembled ? 'rotateX(-90deg) translateZ(150px)' : 'rotateX(-90deg) translateZ(100px)')};
  background-image: url(${Image6});
`;

const CubeViewer = () => {
  const [isDisassembled, setIsDisassembled] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    if (!isDisassembled) {
      // Capture the current rotation before disassembling
      const computedStyle = window.getComputedStyle(document.querySelector('.cube'));
      const transformMatrix = computedStyle.transform;
      if (transformMatrix !== 'none') {
        const values = transformMatrix.split('(')[1].split(')')[0].split(',');
        const [a, b, c, d] = values.map(parseFloat);
        const angleX = Math.round(Math.atan2(c, d) * (180 / Math.PI));
        const angleY = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        setRotation({ x: angleX, y: angleY });
      }
    }
    setIsDisassembled(true);
  };

  useEffect(() => {
    if (isDisassembled) {
      const timer = setTimeout(() => {
        setIsDisassembled(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isDisassembled]);

  return (
    <ScrollableContainer>
      <CubeContainer onClick={handleClick}>
        <Cube className="cube" isDisassembled={isDisassembled} rotation={rotation}>
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