import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  text-align: center;
  ${media.greaterThan('medium')`
    text-align: left;
    margin: auto;
  `}
`
type ImageProps = {
  src: string
}

export const Background = styled.div<ImageProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.6rem auto 0;
  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 15rem auto;
  `}
`

export const TextBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    margin: auto;
    ${media.greaterThan('medium')`
      margin: initial;
      padding-right: ${theme.spacings.medium};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: min(${theme.font.sizes.xxlarge}, 5vw);
    font-weight: ${theme.font.bold};
    ${media.lessThan('medium')`
      font-size: min(${theme.font.sizes.large});
    `}
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    color: #006db6;
    font-size: 1.8rem;
    line-height: 3rem;
    font-weight: 200;
    margin-top: 2rem;
    ${media.greaterThan('medium')`
      font-size: min(${theme.font.sizes.medium}, 3vw);
      line-height: min(6rem, 4.5vw);
    `}
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-top: ${theme.spacings.medium};
    margin: 0 auto;
    ${media.greaterThan('medium')`
      margin: 0;
      padding-right: ${theme.spacings.medium};
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
