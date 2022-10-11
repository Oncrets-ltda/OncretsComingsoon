import styled from 'styled-components'
import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string
  height?: string
  children: string | ReactNode
  align?: 'flex-start' | 'center' | 'flex-end'
  model?: 'primary' | 'secondary' | 'disabled' | 'outlined'
}

export const Wrapper = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 60px;
  margin: 10px 0;
  text-transform: uppercase;
  font-weight: 600 !impotant;

  //variants
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '40px')};
  align-self: ${(props) => (props.align ? props.align : 'inherit')};

  // themes
  background: ${(props) =>
    props.model === 'primary'
      ? 'linear-gradient(90deg, #01c2e6 2.26%, #006db6 102.9%)'
      : props.model === 'secondary'
      ? '#fff'
      : props.model === 'outlined'
      ? 'transparent'
      : props.model === 'disabled'
      ? '#ABABAB'
      : null};
  color: ${(props) =>
    props.model === 'primary'
      ? '#fff'
      : props.model === 'secondary'
      ? '#006DB6'
      : props.model === 'outlined'
      ? '#ffffff'
      : props.model === 'disabled'
      ? '#fff'
      : null};
  border: ${(props) =>
    props.model === 'primary'
      ? 'none'
      : props.model === 'secondary'
      ? '1px solid #006DB6'
      : props.model === 'outlined'
      ? '1px solid rgba(255, 255, 255,0.5)'
      : props.model === 'disabled'
      ? '1px solid #ABABAB'
      : null};
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.model === 'primary'
        ? '#006DB6'
        : props.model === 'secondary'
        ? '#006DB6'
        : props.model === 'outlined'
        ? '#006DB6'
        : props.model === 'disabled'
        ? '#ABABAB'
        : null};
    color: ${(props) =>
      props.model === 'primary'
        ? '#fff'
        : props.model === 'secondary'
        ? '#fff'
        : props.model === 'outlined'
        ? '#ffffff'
        : props.model === 'disabled'
        ? '#fff'
        : null};
    border: ${(props) => (props.model === 'outlined' ? 'none' : null)};
  }
`
