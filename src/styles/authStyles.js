

import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4EC',
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 35,
  },

  logoArea: {
    alignItems: 'center',
    marginBottom: 32,
  },

  logoCircle: {
    width: 76,
    height: 76,
    borderRadius: 25,
    backgroundColor: '#E9E5D9',
    borderWidth: 2,
    borderColor: '#C8A45D',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  logoIcon: {
    fontSize: 48,
    color: '#183D2C',
    fontWeight: 'bold',
  },

  logo: {
    fontSize: 39,
    fontWeight: '800',
    color: '#183D2C',
    letterSpacing: -1.5,
  },

  logoAccent: {
    color: '#C99B3B',
  },

  tagline: {
    fontSize: 13,
    color: '#77756D',
    marginTop: 7,
  },

  formCard: {
    backgroundColor: '#FFFCF6',
    padding: 23,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#EAE2D4',
    elevation: 3,
  },

  heading: {
    fontSize: 25,
    fontWeight: '800',
    color: '#183D2C',
    marginBottom: 7,
  },

  description: {
    fontSize: 13,
    color: '#858176',
    marginBottom: 25,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 53,
    borderWidth: 1,
    borderColor: '#E5DDCF',
    borderRadius: 13,
    backgroundColor: '#FBF8F1',
    paddingHorizontal: 14,
    marginBottom: 14,
  },

  inputIcon: {
    fontSize: 19,
    color: '#183D2C',
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: '#34352F',
  },

  primaryButton: {
    height: 53,
    backgroundColor: '#183D2C',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  switchArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 23,
    flexWrap: 'wrap',
  },

  switchLabel: {
    color: '#77756D',
    fontSize: 13,
  },

  switchLink: {
    color: '#183D2C',
    fontSize: 13,
    fontWeight: '800',
  },

  footer: {
    textAlign: 'center',
    color: '#969083',
    fontSize: 12,
    marginTop: 25,
  },
});
