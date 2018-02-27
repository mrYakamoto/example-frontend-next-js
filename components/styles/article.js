import css from 'styled-jsx/css'
import { colors } from 'variables'

export default css`
.article-card-wrapper {
  border: 1px dashed black;
  perspective: 1000px;
  position: relative;

  &:hover {
    .article-card {
      transform: rotateY(180deg);
    }
  }
}

.article-card {
  transition: all .6s;
  transform-style: preserve-3d;
  padding-bottom: 57.1428%;
  position: relative;
}

.front,
.back {
  position: absolute;
  top: 0;
  left: 0;
}

.front {
  z-index: 2;
  transform: rotateY(0deg);
}

.back {
  backface-visibility: hidden;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px dashed blue;
  color: ${colors.black};
  cursor: pointer;
  height: 100%;
  padding: 1rem;
  transform: rotateY(-180deg) translateZ(1px);
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




