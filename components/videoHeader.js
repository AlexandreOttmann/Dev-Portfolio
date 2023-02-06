
import { Box } from '@chakra-ui/react'


const VideoHeader = () => {
  return (
    <section className="tw-relative tw-mb-6 tw-h-80  tw-flex tw-justify-center tw-items-center">
      <div className="tw-absolute tw-w-full tw-h-full tw-overflow-hidden ">
        <Box as='video'
          autoPlay
          src='https://archive.org/download/bgvideo_202302/bgvideo.mp4'
          className="tw-absolute  tw-inset-0 tw-min-w-full tw-min-h-full tw-object-cover tw-opacity-60"
          loop
          muted
        />


      </div>
      <div className="tw-z-10 tw-text-center tw-px-8 tw-drop-shadow-lg tw-shadow-black">
        <div className="tw-uppercase tw-text-sm tw-mb-4">Welcome to</div>
        <div className="tw-text-4xl tw-font-mplus tw-font-medium">
          A less professional <span className="tw-text-orange-500 ">space</span>
        </div>
      </div>
    </section>
  )
}

export default VideoHeader