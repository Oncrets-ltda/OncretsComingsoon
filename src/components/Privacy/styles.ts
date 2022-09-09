import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 100%;
  width: 100%;
`

export const Header = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #081221;
  height: 65px;
  width: 100%;
  padding-left: 100px;

  span {
    margin-left: 10px;
  }
`

export const Title = styled.h1`
  color: #081221;
  font-family: Poppins;
  font-styles: bold;
`

export const Subtitle = styled.h2`
  color: #081221;
  font-family: Poppins;
  font-styles: normal;
  margin-top: 30px;
`

export const SubSubtitle = styled.h3`
  color: #081221;
  font-family: Poppins;
  font-styles: normal;
  margin-top: 30px;
`

export const SubSubtitle2 = styled.h4`
  color: #081221;
  font-family: Poppins;
  font-styles: normal;
  margin-top: 30px;
`

export const Text = styled.p`
  color: #081221;
  font-family: Poppins;
  font-styles: normal;
  font-size: 15px;
  margin-top: 20px;
`

export const Body = styled.main`
  background-color: white;
  height: 100%;
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 80px;
  padding-bottom: 50px;
`

export const Logo = styled.img`
  width: 12%;
`
