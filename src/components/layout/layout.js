import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../header/header"
import Footer from "../footer/footer"
import styles from "./layout.module.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            fullName
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.pageWrapper}>
        <Header siteMetadata={data.site.siteMetadata} />
        <div className={styles.contentContainer}>{children}</div>
        <Footer siteMetadata={data.site.siteMetadata} />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showHome: PropTypes.bool,
}

export default Layout
