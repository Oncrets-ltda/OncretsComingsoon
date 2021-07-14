import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    display: block;
    position: absolute;
  `}
`

export const Content = styled.div`
  position: relative;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 600;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
