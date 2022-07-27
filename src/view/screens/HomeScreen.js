import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({navigation}) {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    getUserDetails;
  }, []);

  const getUserDetails = async => {
    const userData = AsyncStorage.getItem('user');
    console.log('user  D etails');

    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        {' '}
        Welcome Screen {userDetails}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
