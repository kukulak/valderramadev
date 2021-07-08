import { DistortionText } from "react-text-fun";

const DistortionSecond = ({ text }) => {
        return (
            <>
      <DistortionText
        text={text}
        fontSize={20}
        speed={1.5}
        rotation={45.0}
        distortX={0.9}
        distortY={0.5}
        noiseAmplitude={0.8}
        noiseVolatility={1.2}
        />
    </>
  );
};

export default DistortionSecond;
