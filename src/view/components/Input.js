import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../conts/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={StyleSheet.label}>{label}</Text>
      <View style={[styles.inputContainer]}></View>
      <Fontisto name={iconName} />
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
  },
});
export default Input;
