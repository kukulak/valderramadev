import { DistortionText } from "react-text-fun";

const Distortion = ({ text }) => {
        return (
            <>
      <DistortionText
        text={text}
        fontSize={30}
        speed={1.5}
        rotation={13.0}
        distortX={0.9}
        distortY={0.5}
        noiseAmplitude={0.2}
        noiseVolatility={1.2}
        />
    </>
  );
};

export default Distortion;
