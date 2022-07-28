import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegistrationScreen from './src/view/screens/RegistrationScreen';
import LoginScreen from './src/view/screens/LoginScreen';
import HomeScreen from './src/view/screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './src/view/components/Loader';

const Stack = createStackNavigator();

export default function App() {
  const [intialRouteName, setInitialRouteName] = useState('');
  useEffect(() => {
    setTimeout(authUser, 2000);
  }, []);
  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('user');
      if (userData) {
        userData = JSON.parse(userData);
        if (userData?.loggedIn) {
          setInitialRouteName('HomeScreen');
        } else {
          setInitialRouteName('LoginScreen');
        }
      } else {
        setInitialRouteName('RegistraionScreen');
      }
    } catch (error) {
      setInitialRouteName('RegistraionScreen');
    }
  };
  return (
    <NavigationContainer>
      {intialRouteName == '' ? (
        <Loader visible={true} />
      ) : (
        <>
          <Stack.Navigator
            initialRouteName={intialRouteName}
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="RegistraionScreen"
              component={RegistrationScreen}></Stack.Screen>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}></Stack.Screen>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}></Stack.Screen>
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
