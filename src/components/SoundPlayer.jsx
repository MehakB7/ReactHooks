import React, { forwardRef, useImperativeHandle, useRef } from "react";

const audioPath = process.env.PUBLIC_URL + "/audio";
const SoundPlayer = forwardRef((props, ref) => {
  const correctSoundRef = useRef();
  const wrongSoundRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        playCorrectSound() {
          correctSoundRef.current.play();
        },
        playIncorrectSound() {
          wrongSoundRef.current.play();
        },
      };
    },
    []
  );

  return (
    <div>
      <audio ref={correctSoundRef}>
        <source src={`${audioPath}/correct.wav`} type="audio/mpeg" />
      </audio>
      <audio ref={wrongSoundRef}>
        <source src={`${audioPath}/fail.wav`} type="audio/mpeg" />
      </audio>
    </div>
  );
});

const SoundPlayerWrapper = () => {
  const ref = useRef();

  return (
    <div>
      <SoundPlayer ref={ref} />
      <button onClick={() => ref?.current?.playCorrectSound()}>
        Play Correct Sound
      </button>
      <button onClick={() => ref?.current?.playIncorrectSound()}>
        Play Wrong Sound
      </button>
    </div>
  );
};

export default SoundPlayerWrapper;
