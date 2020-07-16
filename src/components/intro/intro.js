import React from "react"
import { HighlightBGPrimary } from '../highlight/highlight'
import styles from "./intro.module.scss"

const Intro = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>./src/<HighlightBGPrimary>hello_world</HighlightBGPrimary></h1>
    <p>
      Welcome to my website! As you can notice, my website is under construction. 
      My future work will end up here, so stay in touch.
    </p>
    <p>
      Meanwhile, you can take a look at my resume or check my LinkedIn page by clicking the icons above.  
    </p>
    <div className={styles.separator} />
  </div>
)

export default Intro
