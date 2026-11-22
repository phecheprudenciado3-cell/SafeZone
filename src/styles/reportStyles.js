

import { StyleSheet } from 'react-native';

export const reportStyles = StyleSheet.create({
  reportCard: {
    backgroundColor: '#FFFCF6',
    padding: 18,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#EAE2D4',
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#183D2C',
    marginBottom: 18,
  },

  inputLabel: {
    fontWeight: '700',
    color: '#55574D',
    fontSize: 12,
    marginBottom: 8,
  },

  reportInput: {
    borderWidth: 1,
    borderColor: '#E5DDCF',
    borderRadius: 11,
    padding: 13,
    marginBottom: 16,
    backgroundColor: '#FBF8F1',
    color: '#34352F',
    fontSize: 13,
  },

  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },

  reportTypes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },

  typeButton: {
    borderWidth: 1,
    borderColor: '#DCD4C6',
    backgroundColor: '#FBF8F1',
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 20,
    marginRight: 7,
    marginBottom: 8,
  },

  selectedTypeButton: {
    backgroundColor: '#183D2C',
    borderColor: '#183D2C',
  },

  typeButtonText: {
    color: '#625F56',
    fontSize: 12,
  },

  selectedTypeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  submitReportButton: {
    backgroundColor: '#183D2C',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  submitReportText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
});
