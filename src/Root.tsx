import { Composition } from "remotion";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GymCinematic"
        component={MyComposition}
        durationInFrames={240}
        fps={24}
        width={1080}
        height={1920}
      />
    </>
  );
};
