import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  text-align: center;
  ${media.greaterThan('medium')`
    text-align: center;
    margin: auto;
  `}
`
