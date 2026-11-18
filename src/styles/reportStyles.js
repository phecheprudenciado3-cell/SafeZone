
import { StyleSheet } from 'react-native';

export const reportStyles = StyleSheet.create({
  reportCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#123B56',
    marginBottom: 18,
  },

  inputLabel: {
    fontWeight: '600',
    color: '#334155',
    marginBottom: 7,
  },

  reportInput: {
    borderWidth: 1,
    borderColor: '#D6DEE5',
    borderRadius: 9,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
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
    borderColor: '#CBD5E1',
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 20,
    marginRight: 7,
    marginBottom: 8,
  },

  selectedTypeButton: {
    backgroundColor: '#123B56',
    borderColor: '#123B56',
  },

  typeButtonText: {
    color: '#334155',
    fontSize: 12,
  },

  selectedTypeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  submitReportButton: {
    backgroundColor: '#123B56',
    padding: 15,
    borderRadius: 9,
    alignItems: 'center',
  },

  submitReportText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
