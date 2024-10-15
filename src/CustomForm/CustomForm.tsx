import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomFormProps, FormField } from './Types/CustomFormProps';
import styles from './StylesCustomForm';

const CustomForm: React.FC<CustomFormProps> = ({ fields, onSubmit, buttonLabel = 'Submit', validationSchema }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const getInputWrapperStyle = (fieldName: string) => {
    if (errors[fieldName]) {
      return [styles.inputWrapper, styles.errorInputWrapper];
    } else if (focusedField === fieldName) {
      return [styles.inputWrapper, styles.focusedInputWrapper];
    } else {
      return styles.inputWrapper;
    }
  };

  const getLabelStyle = (fieldName: string ) => {
    if (errors[fieldName]) {
      return [styles.label, styles.errorLabel]; 
    } else {
      return styles.label; 
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      <View style={styles.WrapperView}>
        {fields.map((field: FormField) => (
          <View key={field.name} style={[styles.fieldContainer, field.customContainerStyles]}>
            {field.label && (
              <Text style={[getLabelStyle(field.name), field.customLabelStyles]}>
                {field.label}
                {field.required && (
                  <Text style={[styles.required, errors[field.name] ? styles.errorText : styles.defaultText]}>
                    {' *'}
                  </Text>
                )}
              </Text>
            )}

            <View style={getInputWrapperStyle(field.name)}>
              {field.icon && field.iconPosition === 'left' && <View>{field.icon}</View>}
              <Controller
                control={control}
                name={field.name}
                defaultValue={field.value || ''}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder={field.placeholder}
                    value={value.toString()}
                    onBlur={() => {
                      onBlur();
                      setFocusedField(null);
                    }}
                    onFocus={() => setFocusedField(field.name)}
                    onChangeText={(text) => {
                      if(field.keyboardType ==='phone-pad' || field.keyboardType === 'numeric')
                      {
                        if(text==''){ onChange(0) }
                       else { onChange(parseFloat(text)); }
                      }
                      else{
                      onChange(text);
                      }
                      field.onChangeText?.(text);
                    }}
                    secureTextEntry={field.secureTextEntry}
                    maxLength={field.maxLength}
                    keyboardType={field.keyboardType}
                    multiline={field.multiline}
                  />
                )}
              />
              {field.icon && field.iconPosition === 'right' && <View>{field.icon}</View>}
            </View>

            {errors[field.name] && (
              <Text style={[styles.errorText, field.customErrorStyles]}>
                {errors[field.name]?.message as string}
              </Text>
            )}
          </View>
        ))}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitButtonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomForm;
