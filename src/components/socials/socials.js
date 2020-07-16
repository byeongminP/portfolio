import React from "react"
import styles from "./socials.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Socials = ({ siteMetadata }) => {
  return (
    <div className={styles.container}>
      <a
        href={siteMetadata.githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={siteMetadata.linkedInLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="./Byeongmin_Park_Resume.pdf"
        download="Byeongmin_Park_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFolder} />
      </a>
    </div>
  )
}

export default Socials
