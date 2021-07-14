import * as S from './styles'

export type TestProps = {
  title: string
  description: string
  img: string
}

const Main = ({
  title = 'COMING SOON',
  description = 'Stay tuned to experience the first worldwide post-tensioning platform',
  img = '/img/background.jpg'
}: TestProps) => (
  <S.Wrapper>
    <S.Background src={img} />
    <S.Content>
      <S.Logo src="/img/Branco.png" alt="Logo Oncrets." />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      {/* <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    /> */}
    </S.Content>
  </S.Wrapper>
)

export default Main
