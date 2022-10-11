import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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

// export const PlayerDiv = styled.video`
//   position: relative;
//   padding-top: 56.25%
// `

export const Card = styled.article`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    text-align: left;
    margin-top: 4rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  `}
`

export const Header = styled.div`
  padding: 0;
  text-align: center;
  ${media.greaterThan('medium')`
      display: flex;
      flex-direction: row;
      justify-content: left;
      text-align: left
    `}
`

export const Infos = styled.div`
  margin-left: 2rem;
  ${media.greaterThan('medium')`
        padding-top: 4rem;
    `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 100%;
    margin: 0;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Name = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Role = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const SocialLinks = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: left;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Link = styled.li`
  ${({ theme }) => css`
    display: block;
    > a {
      padding: ${theme.spacings.xxsmall};
      color: ${theme.colors.primary};
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.texts};
    text-align: center;

    ${media.greaterThan('medium')`
      text-align: left;
    `}
  `}
`
