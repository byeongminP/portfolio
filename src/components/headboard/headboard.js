import PropTypes from 'prop-types'
import React from 'react'
import { HighlightBGYellow } from '../highlight/highlight'
import Socials from '../socials/socials'
import styles from './headboard.module.scss'
import { StaticQuery, graphql } from 'gatsby'

const Headboard = ({ siteMetadata }) => (
    <div className={styles.container}>
      <h1 className={styles.name}>{siteMetadata.fullName}</h1>
      <div className={styles.subWrapper}>
        <div className={styles.sub}>
          <HighlightBGYellow>Engineer</HighlightBGYellow>
        </div>
        <div className={styles.dotSeparator} />
        <div className={styles.sub}>
          <HighlightBGYellow>Berkeley, CA</HighlightBGYellow>
        </div>
      </div>
      <Socials siteMetadata={siteMetadata} />
      <div className={styles.separator} />
    </div>
  )
  
  Headboard.propTypes = {
    siteMetadata: PropTypes.object,
  }
  
  export default () => (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              fullName
              linkedInLink
              githubLink
            }
          }
        }
      `}
      render={data => <Headboard siteMetadata={data.site.siteMetadata} />}
    />
  )