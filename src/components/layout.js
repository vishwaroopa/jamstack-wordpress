import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"

const Layout = ({ children }) => {
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
          <link rel="stylesheet" href="https://www.suryacemhyd.com/blog/wp-content/themes/hello-elementor/theme.min.css" />
          <link rel="stylesheet" href="https://www.suryacemhyd.com/blog/wp-content/uploads/elementor/css/post-7.css" />
          <link rel="stylesheet" href="https://www.suryacemhyd.com/blog/wp-content/themes/hello-elementor/style.min.css" />
          <link rel="stylesheet" href="https://www.suryacemhyd.com/blog/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js" />
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
