import css from 'styled-jsx/css'
import { colors, spacing } from 'variables'

const navItemPadding = '1rem'

export default css`
header {
  padding-bottom: .8rem;
  position: relative;

  &::after {
    bottom: 0;
    content: '';
    display: block;
    border-bottom: 1px solid ${colors.greys.lightGrey};
    position: absolute;
    width: calc(100% - ${spacing.gutters});
  }

  &.grid-container.fluid {
    margin-bottom: 2rem;
  }

  .grid-container {
    align-items: center;
  }

  a {
    color: ${colors.black};
    padding: 0 ${spacing.gutter};
    text-decoration: none;
  }
}

.page-title-container,
.nav-container {
  display: flex;
}

.page-title-container {
  align-items: flex-end;
}

.page-title {
  margin-bottom: .5rem;
}

.nav-container {
  align-items: flex-end;
}

nav {
  align-items: center;
  display: flex;
  font-size: 1rem;
  height: ${spacing.headerHeight};
  justify-content: flex-end;
}

.nav-item {
  align-items: center;
  display: flex;
  &.social-link {
    padding: 0 .15rem;
  }
}

.icon-wrapper {
  height: 2rem;
  width: 2rem;
}
`
