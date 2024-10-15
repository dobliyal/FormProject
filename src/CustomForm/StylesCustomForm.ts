import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
  },
  fieldContainer: {
    marginBottom: 16,
    width: '100%',
  },
  WrapperView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  required: {
    color: 'black', // Always black for the required symbol
  },
  errorText: {
    color: 'red', // Red for error
  },
  defaultText: {
    color: 'black', // Default color for required asterisk
  },
  errorLabel: {
    color: 'red', // Red when the field shows an error
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc', 
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 16,
    paddingLeft: 12,
    color: '#333',
  },
  focusedInputWrapper: {
    borderWidth: 2,
    borderColor: '#1876d1', // Focused border color
    borderRadius: 8,
  },
  errorInputWrapper: {
    borderWidth: 2,
    borderColor: 'red', // Error border color
    borderRadius: 8,
  },
  submitButton: {
    marginTop: 24,
    backgroundColor: '#004CFFFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
