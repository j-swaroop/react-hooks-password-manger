// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PasswordContainer = styled.div`
  background-color: #383a4e;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding-bottom: 45px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  text-align: center;
  color: #f9f4fb;
  margin-bottom: 3px;
  @media (max-width: 576px) {
    font-size: 28px;
  }
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  color: #f9f4fb;
`

export const Input = styled.input`
  background-color: #f8fafc;
  font-family: 'Roboto';
  outline: none;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 80%;
  margin: auto;
  margin-top: 27px;
  padding-left: 15px;
  @media (max-width: 576px) {
    width: 90%;
  }
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: red;
  text-align: center;
`
