/* styles.js */
import css from 'styled-jsx/css'

export default css`
.list {
  display: block;
  margin: 0;
  padding: 0;
  clear: both;

  & > li {
    display: block;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: stretch;
  }

  & a {
    text-decoration: none;
    display: block;
    flex-grow: 1;
    color: #333;
    padding: 0.5rem;

    & :hover {
      background-color: #eee;
    }

    & :active {
      color: white;
      background-color: black;
    }
  }

  & h3 {
    margin: 0;
    padding: 0;
  }

  & img {
    display: block;
    height: auto;
    width: 3em;
    margin-right: 0.5rem;
    float: left;
  }
}
`
