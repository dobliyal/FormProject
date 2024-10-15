import { ViewStyle, TextStyle, TextInputProps } from 'react-native';
import { ZodSchema } from 'zod';
import { ReactNode } from 'react';

export interface FormField {
  name: string;
  label?: string;
  value?: string;  
  placeholder?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  required?: boolean;
  errorMessage?: string;
  customContainerStyles?: ViewStyle;
  customInputStyles?: ViewStyle;
  customLabelStyles?: TextStyle; 
  customErrorStyles?: TextStyle;
  secureTextEntry?: boolean;
  maxLength?: number;
  keyboardType?: TextInputProps['keyboardType'];
  multiline?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;  
}

//data will be an object where the keys are field names (from FormField)
// and the values are the corresponding field values.
export interface CustomFormProps {
  fields: FormField[];  
  onSubmit: (data: Record<string, string>) => void;  
  buttonLabel?: string;  
  validationSchema: ZodSchema; 
}
