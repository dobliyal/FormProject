import React from 'react'
import { Alert, Text, View } from 'react-native'
import {styles} from './StyleLogin'
import CustomForm from '../../CustomForm/CustomForm';
import { LoginValidationSchema } from './validation/Validation';

const ScreenLogin:React.FC = () => {
    const LoginFields = [
        {
          name: 'email',
          label: 'Email',
          placeholder: 'Enter your email',
          required: true,
          customContainerStyles: { 
            backgroundColor: '#fff',
            borderRadius: 5, 
            padding: 10 
          },
          customLabelStyles: { 
            color: '#000' ,
            fontSize: 16, 
          },
          customInputStyles: { 
            padding: 10, 
            borderColor: '#000' ,
            color: '#000',
            fontSize: 16,
          } ,
          keyboardType: 'email-address' as const,
        },
        {
          name: 'password',
          label: 'Password',
          placeholder: 'Enter your password',
          required: true,
      
          iconPosition: 'left' as const,
          customContainerStyles: { 
            backgroundColor: '#fff', 
            borderRadius: 5, 
            padding: 10 
          },
          customLabelStyles: { 
            color: '#000',
            fontSize: 16, 
          },
          customInputStyles: { 
            padding: 10, 
            color: '#000',
            fontSize: 16 
          },
          secureTextEntry: true,
        },
      ];

      const handleFormSubmit = (data: any) => {
        Alert.alert('Form Submitted!', JSON.stringify(data));
      };

  return (
    <View style={styles.container}>
        <View >
        <Text style={styles.title}>LogIn</Text>
      <CustomForm
      fields={LoginFields}
      onSubmit={handleFormSubmit}
      validationSchema={LoginValidationSchema}
      />
      </View>
    </View>
  )
}

export default ScreenLogin
