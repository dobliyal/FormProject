import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomDropdown from '../CustomDropDown/CustomDropDown';
import { Option } from '../CustomDropDown/Types/CustomDropdownInterface';

const ScreenDropdown: React.FC = () => {
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
      <CustomDropdown
        options={options1}
        placeholder="Select from Dropdown 1"
        label="Dropdown 1"
        required={true}
        multiple={true}
        clearable={false}
        //style={styles.dropdown}
      />

      <CustomDropdown
        options={options2}
        placeholder="Select from Dropdown 2"
        label="Dropdown 2"
        required={true}
        multiple={false}
        clearable={true}
       // style={styles.dropdown}
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
  dropdown: {
    marginBottom: 20,
  },
});

export default ScreenDropdown;








