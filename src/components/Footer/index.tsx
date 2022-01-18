import Container from '../Container'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <Logo />
    </Container>
    <div>
      <a href="https://play.google.com/store/apps/details?id=com.oncretsapp&hl=pt_BR&gl=US">
        <S.Image src="/img/PlayStoreButton.png" />
      </a>
      <a href="https://apps.apple.com/br/app/oncrets-pt-manager/id1580757868?l=en">
        <S.Image src="/img/AppStoreButton.png" />
      </a>
    </div>
  </S.Wrapper>
)

export default Footer
