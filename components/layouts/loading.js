import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {

  return (
    <>
      <Player src='https://lottie.host/8697bcb9-c520-4962-b01b-4b59a415cc65/MNeD4OLc1C.json' className="player tw-hidden md:tw-block tw-min-h-[100vh]  " autoplay />

      <Player src='https://lottie.host/d58d0ff9-72d7-4f63-86cf-b4c71bc6ced2/dCYPkTCwdY.json' className="player tw-block md:tw-hidden tw-min-h-[100vh]  " autoplay />

    </>
  );
}

export default Loading;