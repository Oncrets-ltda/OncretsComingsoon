import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: #080e22;
    display: flex;
    transform: skewY(3deg);
    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} 0;
    `}
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    transform: skewY(-3deg);
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.medium};
    ${media.greaterThan('large')`
    grid-template-columns: 1fr 1fr;
      padding: 0 ${theme.spacings.medium};
    `}
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    margin: ${theme.spacings.xlarge} auto;
    width: min(34rem, 100%);
    ${media.greaterThan('medium')`
      margin-left: 10rem;
      width: 42rem;
    `}
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    p {
      color: white;
      margin-bottom: ${theme.spacings.small};
    }
    strong {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`
