import { Player } from '@lottiefiles/react-lottie-player';
import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  },);

  return targetReached;
};


const Loading = () => {
  const isBreakpoint = useMediaQuery(768)
  return (
    <>
      {isBreakpoint ? (
        <div className="tw-bg-slate-500 ">
          <Player src='https://lottie.host/d58d0ff9-72d7-4f63-86cf-b4c71bc6ced2/dCYPkTCwdY.json' className="player tw-min-h-[100vh] tw-size " autoplay loop />
        </div>
      )
        :
        (
          <div className="tw-bg-slate-500 ">
            <Player src='https://lottie.host/8697bcb9-c520-4962-b01b-4b59a415cc65/MNeD4OLc1C.json' className="player tw-min-h-[100vh] tw-size " autoplay loop />
          </div>
        )
      }
    </>
  );
}

export default Loading;