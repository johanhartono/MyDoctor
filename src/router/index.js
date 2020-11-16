import React from 'react';
import {
  Splash,
  GetStarted,
  Register,
  Login,
  UploadPhoto,
  Doctor,
  Messages,
  Hospitals,
  ChooseDoctor,
  Chatting,
  UserProfile,
  UpdateProfile,
  DoctorProfile,
} from '../pages';

import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Main Home Scenes
//Doctor Messages and Hospitals is a sub Components
const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Doctor" component={Doctor} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Hospitals" component={Hospitals} />
    </Tab.Navigator>
  );
};

const router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseDoctor"
        component={ChooseDoctor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Doctor"
        component={Doctor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hospitals"
        component={Hospitals}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default router;

const styles = StyleSheet.create({});
