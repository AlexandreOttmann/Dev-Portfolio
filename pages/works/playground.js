import * as React from "react"
import { useRef } from 'react';
import { Title } from '../../components/work'
import { motion } from "framer-motion";
import { Container, Badge } from '@chakra-ui/react'


const Work = () => {
  const constraintsRef = useRef(null);
  return (
    <Container className="tw-absolute  tw-flex tw-flex-col tw-left-0  tw-min-w-[100vw]  tw-min-h-[100vh] ">
      <Title>
        Playground <Badge>2023</Badge>
      </Title>
      <h1 className='tw-text-center tw-mb-48 '>So yeah, I just want to test on this page, motion framer and tailwind possibilities</h1>
      <h2 className='tw-text-center tw-text-xl  '>Drag the white square around, yey!</h2>

      <div className="">
        <motion.div
          className="dynamicBox tw-m-auto "
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
      <div className="example-container tw-flex tw-justify-center">

        <motion.div className="drag-area" ref={constraintsRef} />
        <motion.div drag dragConstraints={constraintsRef} />
      </div>


    </Container>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'