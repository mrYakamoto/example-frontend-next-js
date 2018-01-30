import css from 'styled-jsx/css'
import { colors } from 'variables'

export default css`
.article-card {
  height: 100%;
  overflow: hidden;
  position: relative;

  &:hover {
    .overlay {
      top: 0;
      visibility: visible;
    }
  }
}

.article-link {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.overlay {
  background-color: ${colors.white};
  color: ${colors.black};
  cursor: pointer;
  height: 100%;
  left: 0;
  max-width: 434px;
  padding: 1rem;
  position: absolute;
  text-decoration: none;
  top: -100%;
  transition: top .3s ease-in-out;
  width: 100%;
}
`
