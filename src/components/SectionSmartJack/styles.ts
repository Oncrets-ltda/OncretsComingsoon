import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} 0;
    `}
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
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
    margin: ${theme.spacings.large} auto;
    width: min(34rem, 100%);
    ${media.greaterThan('medium')`
      margin: 0;
      width: 60rem;
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
