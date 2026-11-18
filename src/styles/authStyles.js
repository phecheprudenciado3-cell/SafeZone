
import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FA',
  },

  authContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
  },

  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#123B56',
    textAlign: 'center',
  },

  subtitle: {
    color: '#64748B',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },

  form: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 15,
  },

  formTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#123B56',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D6DEE5',
    borderRadius: 9,
    padding: 14,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },

  primaryButton: {
    backgroundColor: '#123B56',
    padding: 15,
    borderRadius: 9,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  switchButton: {
    marginTop: 20,
    alignItems: 'center',
  },

  switchText: {
    color: '#2563EB',
    fontWeight: '600',
  },
});
