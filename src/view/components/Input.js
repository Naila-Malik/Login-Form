import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../conts/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocuesd, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={{marginBottom: 20}}>
      <Text style={StyleSheet.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocuesd
              ? COLORS.darkBlue
              : COLORS.light,
          },
        ]}>
        <Fontisto
          name={iconName}
          style={{fontSize: 22, color: COLORS.darkBlue, marginRight: 10}}
        />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={{color: COLORS.darkBlue, flex: 1}}
          {...props}
        />
        {password && (
          <Ionicons
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{fontSize: 22, color: COLORS.darkBlue}}
            onPress={() => setHidePassword(!hidePassword)}
          />
        )}
      </View>
      {error && (
        <Text style={{color: COLORS.red, fontSize: 12, marginTop: 7}}>
          {error}
        </Text>
      )}
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
    borderRadius: 5,
  },
});
export default Input;
