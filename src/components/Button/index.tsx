import { Wrapper } from './styles'
import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string
  height?: string
  children: string | ReactNode
  align?: 'flex-start' | 'center' | 'flex-end'
  model?: 'primary' | 'secondary' | 'disabled' | 'outlined'
}

export default function Button({ children, ...rest }: ButtonProps) {
  // const models = {
  //   primary: {
  //     hoverBg: "#006DB6",
  //     hoverColor: "#fff",
  //     background: "linear-gradient(90deg, #01c2e6 2.26%, #006db6 102.9%)",
  //     color: "#fff",
  //     border: "none",
  //     cursor: "pointer",
  //   },
  //   secondary: {
  //     hoverBg: "#006DB6",
  //     hoverColor: "#fff",
  //     background: "#fff",
  //     color: "#006DB6",
  //     border: "1px solid #006DB6",
  //     cursor: "pointer",
  //   },
  //   outlined: {
  //     hoverBg: "#006DB6",
  //     hoverColor: "#ffffff",
  //     background: "transparent",
  //     color: "#ffffff",
  //     border: "1px solid rgba(255, 255, 255,0.5)",
  //     cursor: "pointer",
  //     hoverBorder: "none",
  //   },
  //   disabled: {
  //     hoverBg: "#ABABAB",
  //     hoverColor: "#fff",
  //     color: "#fff",
  //     background: "#ABABAB",
  //     border: "1px solid #ABABAB",
  //     cursor: "default",
  //   },
  // }

  return (
    <Wrapper type="button" {...rest}>
      {children}
    </Wrapper>
  )
}
