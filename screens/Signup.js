import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import { Formik } from 'formik';

// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  ButtonText,
  StyledButton,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent
} from '../components/styles'
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Colors
const { brand, darkLight, primary } = Colors;

// DatetimepickerModal
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Signup = () => {

  // Password
  const [hidePassword, setHidePassword] = useState(true);

  // DateTimePicker
  // const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // Actual date of birth to be sent
  const [dob, setDob] = useState();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDob(date);
    // console.warn("A date has been picked: ", date);
    hideDatePicker();
  };



  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Flower Crib</PageTitle>
          <SubTitle>Account Signup</SubTitle>

          <View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          <Formik
            initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => <StyledFormArea>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="Name"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />

              <MyTextInput
                label="Email"
                icon="mail"
                placeholder="email"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput
                label="Date of Birth"
                icon="calendar"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
              />

              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <MsgBox>
                ...
              </MsgBox>

              <StyledButton onPress={handleSubmit} >
                <ButtonText>
                  Login
                </ButtonText>
              </StyledButton>
              <Line />

              <ExtraView>
                <ExtraText>Already have an account?</ExtraText>
                <TextLink>
                  <TextLinkContent>
                    Login
                  </TextLinkContent>
                </TextLink>
              </ExtraView>


            </StyledFormArea>}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate &&
        <TouchableOpacity onPress={showDatePicker} >
          <StyledTextInput {...props} />
        </TouchableOpacity>
      }
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
}

export default Signup;