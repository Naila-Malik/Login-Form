import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import COLORS from '../../conts/colors';
import Input from '../components/Input';

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
        <Input label="Email" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
