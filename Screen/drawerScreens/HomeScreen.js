/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React, {useState} from 'react';

//Import all required component
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = () => {
  global.currentScreenIndex = 'HomeScreen';
  let [full_name, set_full_name] = useState('');
    let [address, set_address] = useState('');
    let [gender, set_gender] = useState('');
    let [email, set_email] = useState('');
    let [id, set_id] = useState('');
    let [school_id, set_school_id] = useState('');

  AsyncStorage.getItem('userToken').then((value) => {
    console.log(value);
    fetch(
      'http://duyphamdev.xyz:8111/notAuthorized/student/QTP20150101000000',
      {
        method: 'GET',
        headers: new Headers({
          Authorization: 'fastm ' + value,
          'Content-Type': 'application/json',
        }),
      },
    )
      .then((response) => response.json())
      .then(async (responseJson) => {
        console.log(responseJson);
        set_full_name(responseJson.data.full_name);
          set_address(responseJson.data.address);
          set_gender(responseJson.data.gender);
          set_email(responseJson.data.email);
          set_id(responseJson.data.id);
          set_school_id(responseJson.data.school_id);
      });
  });

  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
      <Text style={{fontSize: 23, marginTop: 10}}>Home Screen</Text>
      <Text style={{fontSize: 18, marginTop: 10}}>Student Details</Text>
      <Text style={{fontSize: 16, marginTop: 10}}>{id}</Text>
      <Text style={{fontSize: 16, marginTop: 10}}>{full_name}</Text>
      <Text style={{fontSize: 16, marginTop: 10}}>{gender}</Text>
      <Text style={{fontSize: 16, marginTop: 10}}>{address}</Text>
      <Text style={{fontSize: 16, marginTop: 10}}>{email}</Text>
      <Text style={{fontSize: 16, marginTop: 10}}>{school_id}</Text>
      <Text style={{fontSize: 18, marginTop: 10}}>https://aboutreact</Text>
    </View>
  );
};
export default HomeScreen;
