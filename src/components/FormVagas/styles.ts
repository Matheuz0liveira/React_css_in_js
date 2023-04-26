import styled from 'styled-components'
import Cores from '../../styles'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Cores.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    background-color: #fff;
    padding: 0;
  }
`
export const BotaoPesquisar = styled.button`
  background-color: ${Cores.corPrincipal};
  border: 1px solid ${Cores.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Cores.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${Cores.corPrincipal};
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`
