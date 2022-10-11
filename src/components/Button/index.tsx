import { Wrapper } from './styles'
import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string
  height?: string
  children: string | ReactNode
  align?: 'flex-start' | 'center' | 'flex-end'
  model?: 'primary' | 'secondary' | 'disabled' | 'outlined'
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <Wrapper type="button" {...rest}>
      {children}
    </Wrapper>
  )
}
