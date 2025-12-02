import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import * as loading from '../../public/loading.json'
import * as loadingMobile from '../../public/loading_mobile.json'

// Dynamically import Player with SSR disabled
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
);

const Loading = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or return a simple loading placeholder
  }

  return (
    <>
      <Player src={loading} className="player tw-hidden md:tw-block tw-min-h-[100vh]  " autoplay />

      <Player src={loadingMobile} className="player tw-block md:tw-hidden tw-min-h-[100vh]  " autoplay />

    </>
  );
}

export default Loading;