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

const Welcome = ({navigation, route}) => {
  const {name, email, photoUrl} = route.params;
  const AvatarImg = photoUrl ? { uri: photoUrl } : require('./../assets/img/expo-bg1.png');

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
            <StyledButton onPress={() => {navigation.navigate('Login')}} >
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