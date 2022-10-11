import { Wrapper } from './styles'
import { ReactNode, ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string
  height?: string
  children: string | ReactNode
  align?: 'flex-start' | 'center' | 'flex-end'
  model?: 'primary' | 'secondary' | 'disabled' | 'outlined'
}

export default function Button({
  children,
  model = 'primary',
  ...rest
}: ButtonProps) {
  const models = {
    primary: {
      hoverBg: '#006DB6',
      hoverColor: '#fff',
      background: 'linear-gradient(90deg, #01c2e6 2.26%, #006db6 102.9%)',
      color: '#fff',
      border: 'none',
      cursor: 'pointer'
    },
    secondary: {
      hoverBg: '#ffffff',
      hoverColor: '#006DB6',
      background: '#006DB6',
      color: '#ffffff',
      border: '0.5px solid #F9F9F9',
      cursor: 'pointer',
      hoverBorder: 'none'
    },
    outlined: {
      hoverBg: '#006DB6',
      hoverColor: '#ffffff',
      background: 'transparent',
      color: '#ffffff',
      border: '1px solid white',
      cursor: 'pointer',
      hoverBorder: 'none'
    },
    disabled: {
      hoverBg: '#006DB6',
      hoverColor: '#ffffff',
      background: 'transparent',
      color: '#006DB6',
      border: '1px solid #006DB6',
      cursor: 'pointer',
      hoverBorder: 'none'
    }
  }

  return (
    <Wrapper type="submit" model={models[model]} {...rest}>
      {children}
    </Wrapper>
  )
}
