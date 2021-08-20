import React from 'react';
import { StatusBar } from 'expo-status-bar';

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

  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/img/expo-bg2.png')} />
        <WelcomeContainer>
          <PageTitle welcome={true} >Welcome Buddy</PageTitle>
          <SubTitle welcome={true} >Bini's First RN Clone App</SubTitle>
          <SubTitle welcome={true} >evanpark333@gmail.com</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/img/expo-bg1.png')} />

            <Line />
            <StyledButton onPress={() => { }} >
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