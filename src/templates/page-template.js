import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
enqueuedStylesheets {
              nodes {
                src
              }
            }
            enqueuedScripts {
              nodes {
                src
                id
              }
            }
      }
    }
  }
`

const PageTemplate = ({ data, styles }) => {
  const page = data.wpgraphql.page
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </Layout>
  )
}

export default PageTemplate
