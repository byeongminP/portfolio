import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.menu}>
      <h3>Exodus 15:2</h3>
    </div>
  </header>
)

Header.propTypes = {
  siteMetadata: PropTypes.object,
}

export default Header