import css from 'styled-jsx/css'
import { spacing, colors } from 'variables'

export default css`
footer {
  color: ${colors.black};
  padding: 3rem 1rem;
  text-align: right;

  &::before {
    content: '';
    display: block;
    border-bottom: 1px solid ${colors.greys.grey};
    width: 100%;
  }
}
`
