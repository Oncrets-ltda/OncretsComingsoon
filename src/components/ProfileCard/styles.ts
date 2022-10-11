import styled, { css } from 'styled-components'

export const Card = styled.article`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    text-align: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 100%;
    margin: auto;
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
    justify-content: center;
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
  `}
`
