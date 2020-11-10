import React from "react"
import { HighlightBGOrange } from '../highlight/highlight'
import styles from "./cs194.module.scss"

const Cs194 = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>./src/<HighlightBGOrange>computer_vision</HighlightBGOrange></h1>
    <p>
      Check out my work from <a href="https://inst.eecs.berkeley.edu/~cs194-26/fa20/">CS194-26</a>, 
      a Computer Vision course taught by Professor Efros from UC Berkeley. In this course, I used various python libraries 
      to explore the realm of image processing, computer vision, and machine learning.
    </p>
    <p>
      <strong>Project 1</strong> - <a href="https://inst.eecs.berkeley.edu/~cs194-26/fa20/upload/files/proj1/cs194-26-adl/michael_park_web_proj1/">
        Image of the Russian Empire -- Colorizing the Prokudin-Gorskii Photo Collection
      </a>
    </p>
    <p>
      <strong>Project 2</strong> - <a href="https://inst.eecs.berkeley.edu/~cs194-26/fa20/upload/files/proj2/cs194-26-adl/michael_park_proj2/">
        Fun with Filters and Frequencies
      </a>
    </p>
    <p>
      <strong>Project 3</strong> - <a href="https://inst.eecs.berkeley.edu/~cs194-26/fa20/upload/files/proj3/cs194-26-adl/">
        Face Morphing and Modelling a Photo Collection
      </a>
    </p>
    <p>
      <strong>Project 4</strong> - <a href="https://inst.eecs.berkeley.edu/~cs194-26/fa20/upload/files/proj4/cs194-26-adl/">
        Face Keypoint Detection with Neural Networks
      </a>
    </p>
    <div className={styles.separator} />
  </div>
)

export default Cs194
