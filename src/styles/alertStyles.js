
import { StyleSheet } from 'react-native';

export const alertStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E5EAF2',
    padding: 14,
    marginBottom: 12,
    gap: 12,
  },
  iconBox: {
    width: 43,
    height: 43,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 6,
  },
  title: {
    flex: 1,
    color: '#172B4D',
    fontSize: 14,
    fontWeight: '800',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  description: {
    color: '#596579',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 7,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  location: {
    color: '#8995A5',
    fontSize: 10,
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E5EAF2',
    alignItems: 'center',
    padding: 25,
  },
  emptyTitle: {
    color: '#172B4D',
    fontSize: 14,
    fontWeight: '800',
    marginTop: 10,
  },
  emptyText: {
    color: '#718096',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 5,
  },
});

