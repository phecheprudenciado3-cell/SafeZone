
import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FD',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 35,
  },
  brand: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 21,
    backgroundColor: '#17477F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  brandName: {
    fontSize: 34,
    fontWeight: '800',
    color: '#17365F',
    letterSpacing: -1,
  },
  brandAccent: {
    color: '#3785D6',
  },
  brandSubtitle: {
    fontSize: 10,
    letterSpacing: 1.8,
    color: '#718096',
    fontWeight: '700',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 23,
    borderWidth: 1,
    borderColor: '#E5EAF2',
    elevation: 3,
  },
  heading: {
    fontSize: 25,
    fontWeight: '800',
    color: '#172B4D',
  },
  description: {
    fontSize: 13,
    color: '#718096',
    lineHeight: 20,
    marginTop: 7,
    marginBottom: 24,
  },
  field: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#344563',
    marginBottom: 8,
  },
  inputWrap: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DCE4EF',
    borderRadius: 12,
    paddingHorizontal: 13,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    marginLeft: 11,
    color: '#172B4D',
    fontSize: 14,
    paddingVertical: 12,
  },
  primaryButton: {
    minHeight: 53,
    backgroundColor: '#17477F',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 23,
  },
  switchText: {
    color: '#718096',
    fontSize: 13,
  },
  switchLink: {
    color: '#245FA6',
    fontSize: 13,
    fontWeight: '800',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
    marginTop: 25,
  },
  footerText: {
    color: '#718096',
    fontSize: 11,
  },
});

