import css from 'styled-jsx/css'
import { spacing, colors } from './variables'

export default css`
nav {
  align-items: center;
  background-color: ${colors.grey};
  display: flex;
  font-size: 1rem;
  height: ${spacing.headerHeight};
  left: 0;
  padding: 0 1em;
  top: 0;
  width: 100%;

  a {
    color: ${colors.white};
    text-decoration: none;
  }
}

footer {
  background-color: red;
  padding: 5rem 1rem;
  text-align: center;
  font-size: 2rem;

  img {
    display: inline-block;
    height: 1em;
    width: auto;
    padding: 0 0.4em;
  }
}
`
