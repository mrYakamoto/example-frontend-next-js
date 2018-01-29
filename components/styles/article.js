import css from 'styled-jsx/css'
import { colors } from 'variables'

export default css`
.article-card {
  overflow: hidden;
  position: relative;

  &:hover {
    .overlay {
      top: 0;
      visibility: visible;
    }
  }
}

.overlay {
  background-color: ${colors.white};
  color: ${colors.black};
  cursor: pointer;
  height: 100%;
  left: 0;
  padding: 1rem;
  position: absolute;
  text-decoration: none;
  top: -100%;
  transition: top .3s ease-in-out;
  width: 100%;
}
`
