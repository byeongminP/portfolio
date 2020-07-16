import PropTypes from "prop-types"
import React from "react"
import styles from "./footer.module.scss"

const Footer = ({ siteMetadata }) => (
  <footer className={styles.footer}>
    <div>
      <span>© Copyright 2020 {siteMetadata.fullName}</span>
    </div>
  </footer>
)

Footer.propTypes = {
  siteMetadata: PropTypes.object,
}

export default Footer
