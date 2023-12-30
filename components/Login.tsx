import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { loginStyles } from './styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.logo}>Your Logo</Text>
      <View style={loginStyles.inputView}>
        <TextInput
          style={loginStyles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={loginStyles.inputView}>
        <TextInput
          style={loginStyles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={loginStyles.loginBtn} onPress={handleLogin}>
        <Text style={loginStyles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={loginStyles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={loginStyles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
