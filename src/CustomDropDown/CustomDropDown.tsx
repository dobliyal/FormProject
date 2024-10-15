import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { DropdownProps, Option } from './Types/CustomDropdownInterface';
import styles from './StylesCustomDropDown';

const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  label,
  disabled,
  error,
  multiple,
  clearable,
  required,
  style = {},
  inputStyle = {},
  dropdownStyle = {},
  errorStyle = {},
}) => {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      dropdownValue: multiple ? [] as string[] : '' as string,
    },
  });

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const toggleDropdown = () => {
    if (!disabled) setDropdownVisible(!dropdownVisible);
  };

  const onSubmit = (data: any) => {
    console.log('Selected Value:', data.dropdownValue);
  };

  const handleClearSelection = () => {
    setValue('dropdownValue', multiple ? [] : '');  
  };

  const showError = required && !!errors.dropdownValue; 

  return (
    <View style={styles.container}>
      <Text style={[styles.label, styles.defaultText]}>
        {label} {required && (
          <Text style={[styles.requiredMark, showError ? styles.errorText : styles.defaultText]}>
            *
          </Text>
        )}
      </Text>

      <Controller
        control={control}
        name="dropdownValue"
        rules={{ required: 'This field is required' }} 
        render={({ field: { onChange, value } }) => (
          <>
            <TouchableOpacity onPress={toggleDropdown} disabled={disabled}>
              <View style={[
                styles.inputContainer,
                showError ? styles.errorBorder : isFocused ? styles.focusBorder : styles.blurBorder,
                value ? styles.selectedBorder : {},
              ]}>
                {multiple && Array.isArray(value) && value.length > 0 ? (
                  <View style={styles.selectedOptionsContainer}>
                    {value.map((selectedOption: string, index: number) => (
                      <View key={index} style={styles.selectedOption}>
                        <Text style={styles.selectedOptionText}>{selectedOption}</Text>
                        <TouchableOpacity onPress={() => onChange(value.filter((v: string) => v !== selectedOption))}>
                          <Text style={styles.removeOptionText}>✖</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                ) : (
                  <TextInput
                    editable={false}
                    placeholder={placeholder}
                    value={typeof value === 'string' ? value : ''} 
                    style={[styles.inputText, inputStyle]}
                  />
                )}

                {clearable && value && (
                  <TouchableOpacity onPress={handleClearSelection} style={styles.clearButton}>
                    <Text style={styles.clearText}>✖</Text>
                  </TouchableOpacity>
                )}
              </View>
            </TouchableOpacity>

            {dropdownVisible && (
              <View style={[styles.dropdown, dropdownStyle]}>
                <FlatList
                  data={options}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                      const selectedValue = item.value;
                      if (multiple && Array.isArray(value)) {
                        const newValue = value.includes(selectedValue)
                          ? value.filter((v: string) => v !== selectedValue)
                          : [...value, selectedValue];
                        onChange(newValue);
                      } else {
                        onChange(selectedValue);
                        setDropdownVisible(false);
                      }
                    }}>
                      <Text style={[
                        styles.dropdownItem,
                        Array.isArray(value) && value.includes(item.value) ? styles.selectedItemText : {},
                      ]}>
                        {item.label}
                      </Text>
                      <View style={styles.optionSeparator} />
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}

            {showError && <Text style={[styles.errorText, errorStyle]}>{errors.dropdownValue?.message}</Text>}
          </>
        )}
      />

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDropdown;
