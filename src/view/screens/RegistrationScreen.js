import {Alert, Keyboard, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import COLORS from '../../conts/colors';
import Input from '../components/Input';
import Buttons from '../components/Buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
<script src="http://192.168.100.19:8097"></script>;

export default function RegistrationScreen({navigation}) {
  const [errorEmail, setErrorEmail] = useState('');
  const [errorFullname, setErrorFullname] = useState('');
  const [errorPhonenumber, setErrorPhonenumber] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  // const [inputs, setInputs] = useState({
  //   email: '',
  //   fullname: '',
  //   phoneNumber: '',
  //   password: '',
  // });

  const validate = () => {
    Keyboard.dismiss();
    let validate = true;

    if (!email) {
      setErrorEmail('Please input email');
      validate = false;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      setErrorEmail('Please enter a valid email');
      validate = false;
    }

    if (!fullname) {
      setErrorFullname('Please input fullname');
      validate = false;
    }
    if (!phonenumber) {
      setErrorPhonenumber('Please input phonenumber');
      validate = false;
    }
    if (!password) {
      setErrorPassword('Please input password');
      validate = false;
    } else if (password.length < 5) {
      setErrorPassword('Min password length of 5');
    }
    if (validate) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      try {
        AsyncStorage.setItem(
          'user',
          JSON.stringify(email, fullname, phonenumber, password),
        );
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Something went wrong');
      }
    }, 3000);
  };
  // const handleError = (errorMessage, input) => {
  //   setErrors(prevState => ({...prevState, [input]: errorMessage}));
  // };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 20,
        }}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          {' '}
          Register
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          {' '}
          Enter Your Details to Register
        </Text>
        <View style={{marginVertical: 20}}></View>
        <Input
          placeholder="Please Enter your Email"
          label="Email"
          iconName="email"
          onChangeText={newText => setEmail(newText)}
          error={errorEmail}
          onFocus={() => setErrorEmail('')}
        />

        <Input
          placeholder="Please Enter your fullname"
          label="fullname"
          iconName="person"
          onChangeText={newText => setFullname(newText)}
          error={errorFullname}
          onFocus={() => setErrorFullname('')}
        />
        <Input
          placeholder="Please Enter your phonenumber"
          label="PhoneNumber"
          iconName="phone"
          keyboardType="numeric"
          onChangeText={newText => setPhonenumber(newText)}
          error={errorPhonenumber}
          onFocus={() => setErrorPhonenumber('')}
        />
        <Input
          placeholder="Please Enter your Password"
          label="Password"
          iconName="locked"
          password
          onChangeText={newText => setPassword(newText)}
          error={errorPassword}
          onFocus={() => setErrorPassword('')}
        />
        <Buttons title="Register" onPress={validate} />
        <Text
          onPress={() => navigation.navigate('LoginScreen')}
          style={{
            color: COLORS.black,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Already have an account? Login{' '}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
