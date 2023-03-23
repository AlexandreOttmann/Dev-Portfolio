import { Player } from '@lottiefiles/react-lottie-player';
import * as loading from '../../public/loading.json'
import * as loadingMobile from '../../public/loading_mobile.json'

const Loading = () => {

  return (
    <>
      <Player src={loading} className="player tw-hidden md:tw-block tw-min-h-[100vh]  " autoplay />

      <Player src={loadingMobile} className="player tw-block md:tw-hidden tw-min-h-[100vh]  " autoplay />

    </>
  );
}

export default Loading;