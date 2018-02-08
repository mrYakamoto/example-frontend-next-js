import css from 'styled-jsx/css'
import { colors } from 'variables'

export default css`
.article-card {
  overflow: hidden;
  padding-bottom: 57.1428%;
  position: relative;

  &:hover {
    .overlay {
      top: 0;
      visibility: visible;
    }
  }
}

.image {
  height: 100%;
  width: 100%;
}

.article-link {
  height: 100%;
  left: 0;
  padding-bottom: .2rem;
  padding-left: .2rem;
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
  padding: 1rem;
  position: absolute;
  text-decoration: none;
  top: -100%;
  transition: top .3s ease-in-out;
  width: 100%;
}

.article-title {
  margin-bottom: .625rem;
  padding-right: 2rem;
}

.publication-name {
  border-bottom: .0625rem solid ${colors.black};
  text-align: right;
}
`
