
import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-items'
import { Suspense } from 'react'
import Loading from './loading.js'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}


const Layout = ({ children, title }) => {
  const t = `${title} - Alexandre Ottmann`

  return (
    <Suspense fallback={<Loading />}>

      <motion.article initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.4, type: 'easeInOut' }} style={{ position: 'relative' }}>
        <>
          {title && (
            <Head>
              <title>{t}</title>
            </Head>
          )}
          {children}
          <GridItemStyle />

        </>
      </motion.article>
    </Suspense>
  )
}

export default Layout