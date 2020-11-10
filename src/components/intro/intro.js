import React from "react"
import { HighlightBGPrimary } from '../highlight/highlight'
import styles from "./intro.module.scss"

const Intro = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>./src/<HighlightBGPrimary>hello_world</HighlightBGPrimary></h1>
    <p>
      Welcome to my website! My name is Byeong Min (Michael), and I am currently a student at University of California, Berkeley, 
      majoring in Electrical Engineering and Computer Science.
    </p>
    <p>
      You can take a look at my resume or check my LinkedIn page by clicking the icons above.  
    </p>
    <div className={styles.separator} />
  </div>
)

export default Intro
