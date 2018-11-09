import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`

const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }
  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    white-space: nowrap;
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          silverstripe {
            readAppContentPages {
              edges {
                node {
                  Title
                  URLSegment
                }
              }
            }
          }
        }
    `}
      render={data => (
        <Header>
          <Nav>
            <ul>
              <li>
                <Link to="/" activeStyle={activeLinkStyle}>
                  Home
                </Link>
              </li>
                {
                  data.silverstripe.readAppContentPages.edges.map(({node}) => {
                    return (
                      <li key={node.URLSegment}>
                        <Link to={node.URLSegment} activeStyle={activeLinkStyle}>
                          {node.Title}
                        </Link>
                      </li>
                    )
                  })
                }
            </ul>
          </Nav>
        </Header>
      )}
    />
  )
}

export default Menu
