import styled from 'styled-components'

export const Wrapper = styled.button`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 50px;
  background: transparent;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;

  // themes
  background: ${(props) => props.model.background};
  color: ${(props) => props.model.color};
  border: ${(props) => props.model.border};
  cursor: ${(props) => props.model.cursor};
`
