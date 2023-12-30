import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
// import SignupScreen from './screens/SignupScreen';
// import ProductScreen from './screens/ProductScreen';
// import PurchaseScreen from './screens/PurchaseScreen';
// import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        {/* <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Signup' }} />
        <Stack.Screen name="Product" component={ProductScreen} options={{ title: 'Product' }} />
        <Stack.Screen name="Purchase" component={PurchaseScreen} options={{ title: 'Purchase' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
