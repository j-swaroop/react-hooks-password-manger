// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  ResponsiveContainer,
  PasswordContainer,
  Heading,
  Text,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, setUserInput] = useState('')

  const onChangeUserInput = event => {
    setUserInput(event.target.value)
  }

  return (
    <MainContainer>
      <ResponsiveContainer>
        <PasswordContainer>
          <Heading> Password Validator </Heading>
          <Text> Check how strong and secure is your password</Text>
          <Input
            type="password"
            value={userInput}
            onChange={onChangeUserInput}
          />
          {userInput.length >= 8 ? (
            ''
          ) : (
            <ErrorMsg> Your password must be at least 8 characters </ErrorMsg>
          )}
        </PasswordContainer>
      </ResponsiveContainer>
    </MainContainer>
  )
}

export default PasswordValidator
