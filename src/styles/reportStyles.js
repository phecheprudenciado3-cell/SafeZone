
import { StyleSheet } from 'react-native';

export const reportStyles = StyleSheet.create({
  reportCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5EAF2',
    padding: 17,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#172B4D',
    marginBottom: 18,
  },
  inputLabel: {
    color: '#344563',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 8,
  },
  reportInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE4EF',
    borderRadius: 11,
    padding: 13,
    marginBottom: 16,
    fontSize: 13,
    color: '#172B4D',
  },
  descriptionInput: {
    height: 105,
    textAlignVertical: 'top',
  },
  reportTypes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  typeButton: {
    borderWidth: 1,
    borderColor: '#DCE4EF',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 22,
    marginRight: 7,
    marginBottom: 9,
  },
  selectedTypeButton: {
    backgroundColor: '#17477F',
    borderColor: '#17477F',
  },
  typeButtonText: {
    color: '#596579',
    fontSize: 12,
  },
  selectedTypeText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  submitReportButton: {
    backgroundColor: '#17477F',
    padding: 15,
    borderRadius: 11,
    alignItems: 'center',
  },
  submitReportText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
});
