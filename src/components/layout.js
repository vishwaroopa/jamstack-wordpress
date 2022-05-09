import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"

const Layout = ({ children, styles, scripts }) => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        generalSettings {
          title
          url
        }
        menu(id: "dGVybToy") {
          menuItems {
            nodes {
              id
              url
              label
            }
          }
        }
      }
    }
  `)

  const { title, url } = data.wpgraphql.generalSettings
  const items = data.wpgraphql.menu.menuItems.nodes.map(item => ({
    ...item,
    url: item.url.replace(url, ""),
  }))

  return (
      <>
          <link rel="jjj" src="https://www.suryacemhyd.com/blog/wp-content/themes/hello-elementor/theme.min.css" />
          {styles.map((node, id) => (
              <link key={`style-${id}`} href={node.src} rel="stylesheet" />
          ))}
          <header>
        <Link to="/" className="home">
          {title}
        </Link>
        {items.map(item => (
          <Link to={item.url} key={item.id}>
            {item.label}
          </Link>
        ))}
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
