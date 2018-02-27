import css from 'styled-jsx/css'
import { colors, spacing } from 'variables'

export default css`
.sidebar {
  position: 'static';
}

.publication-wrapper {
  margin-bottom: 1rem;
  padding-right: .5rem;
  position: relative;

  &::after {
    bottom: 0;
    content: '';
    display: block;
    border-bottom: 1px solid ${colors.greys.lightGrey};
    position: absolute;
    width: 100%;
  }
}
`
