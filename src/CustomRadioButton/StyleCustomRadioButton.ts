import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#000',
  },
  requiredMark: {
    fontSize: 18,
  },
  defaultText: {
    color: '#000',
  },
  errorText: {
    color: 'red',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRadioCircle: {
    backgroundColor: '#1876d1',
  },
  selectedRadio: {
    borderColor: '#1876d1',
  },
  radioLabel: {
    fontSize: 16,
  },
  selectedOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginRight: 5,
    marginBottom: 5,
  },
  selectedOptionText: {
    color: '#000',
    fontSize: 14,
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
