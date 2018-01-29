import css from 'styled-jsx/css'
import { colors, spacing } from 'variables'

const navItemPadding = '1rem'

export default css`
header {
  margin-bottom: .5rem;

  .grid-container {
    align-items: center;
  }

  a {
    color: ${colors.black};
    padding: 0 ${spacing.gutter};
    text-decoration: none;
  }
}

.divider {
  border-bottom: 1px solid ${colors.greys.grey};
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
    transition: background-color .3s;

    &:hover {
      background-color: ${colors.greys.darkGrey};
    }
  }
}
`
