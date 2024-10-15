import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButtonProps } from './Types/CustomRadioButtonInterface';
import styles from './StyleCustomRadioButton';
import { Controller, useForm } from 'react-hook-form';

const CustomRadioButton: React.FC<RadioButtonProps> = ({
  onSelect,
  options,
  placeholder,
  label,
  disabled,
  error,
  multiple = false,  
  required = false,
  style = {},
  inputStyle = {},
  radioStyle = {},
  errorStyle = {},
}) => {
const {control,handleSubmit,formState:{errors},setValue}=useForm({
  defaultValues:{
    radioValue:multiple ? [] as string[] : '' as string,
  },
});


  const isSelected = (optionValue: string, value: string | string[]) => {
    return multiple
      ? Array.isArray(value) && value.includes(optionValue)
      : value === optionValue;
  };

  const handleSelect = (optionValue: string, onChange:(value:any)=>void,value:string|string[]) => {
    if (disabled) return;

    if (multiple) {
      if (Array.isArray(value)) {
        const newValue = value.includes(optionValue)
          ? value.filter(v => v !== optionValue)
          : [...value, optionValue];  
          onChange?.(newValue);  
      }
    } else {
  
      const newValue = value === optionValue ? '' : optionValue;
      onChange?.(newValue); 
    }
  };

  const onSubmit = (data: any) => {
    console.log('Selected Radio Value:', data.radioValue);
  };  

  const showError = required && !!errors.radioValue;
  
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, styles.defaultText]}>
        {label} {required && (
          <Text style={[styles.requiredMark, showError ? styles.errorText : styles.defaultText]}>
            *
          </Text>
        )}
      </Text>
      
      <Controller
        control={control}
        name="radioValue"
        rules={{ required: 'This field is required' }}
        render={({ field: { onChange, value } }) => (
          <>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          onPress={() => handleSelect(option.value, onChange, value)}
          style={[
            styles.radioOption,
            radioStyle,
            isSelected(option.value,value) ? styles.selectedRadio : {},
          ]}
          disabled={disabled}
        >
          <View style={[
            styles.radioCircle,
            isSelected(option.value,value) ? styles.selectedRadioCircle : {},
          ]} />

          <Text style={[styles.radioLabel, inputStyle]}>{option.label}</Text>
        </TouchableOpacity>
      ))}


      {showError && <Text style={[styles.errorText, errorStyle]}>Error: {errors.radioValue?.message}</Text>}
      </>
        )}
        />
         <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomRadioButton;

