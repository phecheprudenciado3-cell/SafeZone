
import { StyleSheet } from 'react-native';

export const alertStyles = StyleSheet.create({
  alertItem: {
    backgroundColor: '#FFF7ED',
    borderLeftWidth: 5,
    borderLeftColor: '#F97316',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },

  alertTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#9A3412',
    marginBottom: 6,
  },

  alertSeverity: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 8,
  },

  cardText: {
    color: '#475569',
    lineHeight: 21,
  },

  location: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 8,
  },

  emptyContainer: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },

  emptyText: {
    color: '#64748B',
    textAlign: 'center',
  },
});
