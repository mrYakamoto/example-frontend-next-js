import css from 'styled-jsx/css'
import { colors, spacing } from './variables'

const navItemPadding = '1rem'

export default css`
header {
  background-color: ${colors.greys.grey};

  .grid-container {
    align-items: center;
  }

  a {
    color: ${colors.white};
    padding: 0 ${spacing.gutter};
    text-decoration: none;
  }
}

nav {
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  height: ${spacing.headerHeight};
  justify-content: flex-end;

  .nav-item {
    align-items: center;
    display: flex;

    &:hover {
      background-color: ${colors.white};
    }
  }
}
`
