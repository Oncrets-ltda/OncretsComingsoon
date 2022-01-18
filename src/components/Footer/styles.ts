import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  ${media.greaterThan('medium')`
    text-align: center;
    margin: auto;
  `}
`

export const Image = styled.img`
  width: min(22rem, 100%);
  ${media.greaterThan('medium')`
      width: 18rem;
    `}
`
