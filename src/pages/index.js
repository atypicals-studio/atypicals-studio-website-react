import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/logo.png"
        loading="eager"
        width={645}
        quality={87}
        alt="Atypicals.studio"
        style={{ marginBottom: `var(--space-3)` }}
      />
      <p className={styles.intro} style={{ marginTop: "80px" }}>
        New website coming soon...
      </p>
      <p className={styles.intro}>
        <a href="mailto:hello@atypicals.studio">hello@atypicals.studio</a>
        <br />
        <a href="tel:+32473788644">+32 473 78 86 44</a>
      </p>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
