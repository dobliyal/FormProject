import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Option } from '../CustomRadioButton/Types/CustomRadioButtonInterface';
import CustomRadioButton from '../CustomRadioButton/CustomRadioButton';

const ScreenRadioButtons: React.FC = () => {
 

  const [options1, setOptions1] = useState<Option[]>([
    { id: '1', label: 'Option 1', value: 'option1' },
    { id: '2', label: 'Option 2', value: 'option2' },
    { id: '3', label: 'Option 3', value: 'option3' },
  ]);

  const [options2, setOptions2] = useState<Option[]>([
    { id: '1', label: 'Choice A', value: 'choiceA' },
    { id: '2', label: 'Choice B', value: 'choiceB' },
    { id: '3', label: 'Choice C', value: 'choiceC' },
  ]);



  return (
    <View style={styles.container}>
      
          <CustomRadioButton
            options={options1}
            placeholder="Select options from Radio Group 1"
            label="Choose options from Radio Group 1"
            required={true}
            style={styles.radioGroup}
            multiple={true}
            inputStyle={styles.input}
            radioStyle={styles.radioOption}
            errorStyle={styles.errorText}
          />
       

     
          <CustomRadioButton
            options={options2}
            placeholder="Select an option from Radio Group 2"
            label="Choose an option from Radio Group 2"
            required={true}
            style={styles.radioGroup}
            multiple={false}
            inputStyle={styles.input}
            radioStyle={styles.radioOption}
            errorStyle={styles.errorText}
          />
        

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  radioGroup: {
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
  },
  radioOption: {
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
  },
});

export default ScreenRadioButtons;
