import styled from 'styled-components'
import media from 'styled-media-query'

interface ImageProps {
  width?: string
}

export const Wrapper = styled.header`
  background-color: #080e22;
  border: 1px solid black;
  padding-left: 85px;
  padding-right: 85px;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: row;
  ${media.greaterThan('medium')`
    margin: auto;
  `}
`

export const Contacts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Email = styled.div`
  width: 100%;
  border: 1px solid green;
`

export const EmailTitle = styled.h2`
  color: white;
  font-size: 18px;
  margin-top: 60px;
  color: #006db6;
`

export const EmailContent = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ul {
    display: inline-flex;
    list-style: none;
    color: green;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    display: inline;
    margin
  }
`

export const PhoneContent = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 5px;
`

export const Icon = styled.img<ImageProps>`
  cursor: pointer;
  width: min(22rem, 100%);
  color: white;
  width: 25px;
`

export const Image = styled.img<ImageProps>`
  cursor: pointer;
  width: min(22rem, 100%);
  color: white;
  width: 160px;
`
