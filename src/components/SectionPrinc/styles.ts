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

  ${media.lessThan('medium')`
    height: 100rem;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
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
    max-width: 32rem;
    margin: auto;
    ${media.greaterThan('medium')`
      max-width: 70rem;
      margin: initial;
      padding-right: ${theme.spacings.medium};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: black;
    font-size: min(${theme.font.sizes.xxlarge}, 5vw);
    font-weight: 900;
    ${media.lessThan('medium')`
      font-size: min(${theme.font.sizes.large});
      color: white;
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

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;

  ${media.lessThan('medium')`
    justify-content: center;
    width: 100%;
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
