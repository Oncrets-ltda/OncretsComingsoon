import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: flex;
  padding-bottom: 100px;
  ${media.greaterThan('medium')}
  padding-bottom: 100px;
  padding-top: 60px;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};
    grid-template-columns: 1fr;
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}
  `}
`
