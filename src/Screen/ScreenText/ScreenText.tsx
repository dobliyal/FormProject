import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { validationSchemaText } from './validations/Validations'
import CustomForm from '../../CustomForm/CustomForm';
import CustomRadioButton from '../../CustomRadioButton/CustomRadioButton';
import { Option } from '../../CustomRadioButton/Types/CustomRadioButtonInterface';

const fields = [
  { name: 'singleLineText', label: 'Single-line Text', placeholder: 'Enter text', required: true, keyboardType: 'default' as const },
  { name: 'multiLineText', label: 'Multi-line Text', placeholder: 'Enter multi-line text', required: true, multiline: true },
  { name: 'email', label: 'Email', placeholder: 'Enter your email', required: true, keyboardType: 'email-address' as const },
  { name: 'password', label: 'Password', placeholder: 'Enter your password', required: true, secureTextEntry: true },
  { name: 'url', label: 'URL', placeholder: 'Enter URL', required: true, keyboardType: 'url' as const  },
  { name: 'search', label: 'Search', placeholder: 'Search here', required: true, keyboardType: 'web-search' as const },
  { name: 'phoneNumber', label: 'Phone Number', placeholder: 'Enter phone number', required: true,},
  { name: 'number', label: 'Number', placeholder: 'Enter a number', required: true, keyboardType: 'numeric' as const },
  { name: 'date', label: 'Date', placeholder: '2020-01-01', required: true, keyboardType: 'default' as const },
  { name: 'time', label: 'Time', placeholder: '00:00:00', required: true, keyboardType: 'default' as const }, 
  { name: 'dateTime', label: 'Date & Time', placeholder: '2020-01-01T00:00:00Z', required: true, keyboardType: 'default' as const }, 
  { name: 'range', label: 'Range', placeholder: '0-100', required: true, keyboardType: 'numeric' as const },
];

const ScreenText = () => {
  const onSubmit=(data:any)=>{
    console.log('Form Data:',data);
  }

  return (
    <ScrollView style={styles.container}>
    <CustomForm
      fields={fields}
      onSubmit={onSubmit}
      buttonLabel="Submit"
      validationSchema={validationSchemaText}
    />
  </ScrollView>
  )
}

export default ScreenText

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
