import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

// 자동 로그인
// async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  ButtonText,
  StyledButton,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar
} from '../components/styles'

const Welcome = () => {

  // context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const {name, email, photoUrl} = storedCredentials;
  const AvatarImg = photoUrl ? { uri: photoUrl } : require('./../assets/img/expo-bg1.png');

  const clearLogin = () => {
    AsyncStorage.removeItem('testCridentials')
    .then(() => {
      setStoredCredentials("");
    })
    .catch((error) => console.log(error))
  }

  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/img/expo-bg2.png')} />
        <WelcomeContainer>
          <PageTitle welcome={true} >Welcome Buddy</PageTitle>
          <SubTitle welcome={true} >{name || "Bini's First RN Clone App"}</SubTitle>
          <SubTitle welcome={true} >{email || 'evanpark333@gmail.com'}</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={AvatarImg} />

            <Line />
            <StyledButton onPress={clearLogin} >
              <ButtonText>
                Logout
              </ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer> 
    </>
  );
};

export default Welcome;