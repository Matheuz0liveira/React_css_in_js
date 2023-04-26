import styled from 'styled-components'

const Cores = {
  corPrincipal: '#a7727d',
  corSecundaria: '#f9f5e7'
}

export default Cores

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`
