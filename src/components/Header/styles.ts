import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  max-width: 100%;
  padding-top: 20px;
  padding-left: 80px;
  padding-right: 80px;
  margin: 0 auto;
  background: transparent;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

export const Buttons = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${media.lessThan('medium')`
    flex-direction: column-reverse;
  `}
`

export const LogoDark = styled.img`
  width: 22rem;
  ${media.greaterThan('medium')`
    width: 18rem;
  `}
  ${media.lessThan('medium')`
    display: none;
  `}
`

export const Logo = styled.img`
  width: 22rem;
  ${media.greaterThan('medium')`
    width: 18rem;
    display: none;
  `}
`
