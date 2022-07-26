import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import COLORS from '../../conts/colors';
import Input from '../components/Input';
import Buttons from '../components/Buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegistrationScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
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
        />
        <Input
          placeholder="Please Enter your Password"
          label="Password"
          iconName="locked"
          password
        />
        <Input
          placeholder="Please Enter your fullname"
          label="fullname"
          iconName="person"
        />
        <Input
          placeholder="Please Enter your phonenumber"
          label="PhoneNumber"
          iconName="phone"
          keyboardType="numeric"
        />
        <Buttons title="Register" />
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
