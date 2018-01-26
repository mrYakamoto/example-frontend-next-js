import css from 'styled-jsx/css'

export default css`
.article {
  & > h2 {
  margin: 2rem 0 0 0;
  padding: 0 0.5rem;
  border-bottom: 1px solid #ccc;
  }

  & .list {
    line-height: 2rem;

    img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
      object-fit: cover;
    }
  }
}

.article__header {
  clear: both;
  overflow: hidden;
  padding: 0.5rem;

  & > h1 {
    font-size: 3rem;
    line-height: 1em;
    margin: 1rem 0 0 0;
    padding: 0;
  }

  & > img {
    display: block;
    width: 33vw;
    max-width: 20rem;
    height: auto;
    float: left;
    margin-right: 0.5rem;
  }
}
`
