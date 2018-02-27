import css from 'styled-jsx/css'
import { colors } from 'variables'

export default css`
.publication {
  padding-bottom: .5rem;
}

.accordion {
  text-align: left;
  width: 100%;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }
}

.publication-logo {
  max-height: 2rem;
}

.panel {
  overflow: hidden;
  transition: max-height .2s ease-out;
}

.articles {
  list-style: none;
  padding: 0;
}

.article {
  padding-bottom: .375rem;
  padding-top: .375rem;
}

.article-title {
  color: ${colors.greys.grey};
  font-size: .8125rem;
}

.article-link {
  color: ${colors.black};
  text-decoration: none;
}
`
