

import { StyleSheet } from 'react-native';

export const alertStyles = StyleSheet.create({
  alertItem: {
    backgroundColor: '#FFF9EF',
    borderLeftWidth: 4,
    borderLeftColor: '#D49A3A',
    padding: 16,
    borderRadius: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EAE2D4',
  },

  alertTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#183D2C',
    marginBottom: 7,
  },

  alertSeverity: {
    fontSize: 11,
    fontWeight: '800',
    color: '#B65C36',
    marginBottom: 8,
  },

  cardText: {
    color: '#625F56',
    fontSize: 13,
    lineHeight: 20,
  },

  location: {
    color: '#898477',
    fontSize: 11,
    marginTop: 9,
  },

  emptyContainer: {
    padding: 20,
    backgroundColor: '#FFFCF6',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#EAE2D4',
  },

  emptyText: {
    color: '#858176',
    textAlign: 'center',
    fontSize: 13,
  },
});
