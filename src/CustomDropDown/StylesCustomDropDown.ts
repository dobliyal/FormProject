import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18, // Increased font size
    marginBottom: 8,
    color: '#000',
  },
  requiredMark: {
    fontSize: 18, // Increased to match label size
  },
  defaultText: {
    color: '#000', // Default color
  },
  focusText: {
    color: '#1876d1', // Blue color on focus
  },
  errorText: {
    color: 'red', // Red color for error
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  selectedBorder: {
    borderColor: '#1876d1',
    borderWidth: 2,
  },
  blurBorder: {
    borderColor: 'grey',
  },
  focusBorder: {
    borderColor: '#1876d1', // Blue color when focused
    borderWidth: 2,
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 2,
  },
  inputText: {
    fontSize: 18, 
    color: '#000',
    flex: 1,
  },
  clearButton: {
    marginLeft: 8,
  },
  clearText: {
    color: '#343a40',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  dropdownItem: {
    padding: 15, 
    fontSize: 18, 
    color: '#000',
  },
  selectedItemText: {
    color: '#1876d1', 
  },
  optionSeparator: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  selectedOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  selectedOption: {
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedOptionText: {
    marginRight: 5,
    fontSize: 14,
    marginHorizontal: 5,
  },
  removeOptionText: {
    color: '#343a40',
    fontWeight: 'bold',
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
