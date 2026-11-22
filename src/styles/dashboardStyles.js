
import { StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4EC',
  },

  header: {
    backgroundColor: '#183D2C',
    paddingHorizontal: 23,
    paddingTop: 55,
    paddingBottom: 35,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 35,
  },

  brand: {
    fontSize: 25,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  headerSubtitle: {
    fontSize: 11,
    color: '#D5DFD4',
    marginTop: 4,
  },

  profileCircle: {
    width: 47,
    height: 47,
    borderRadius: 24,
    backgroundColor: '#E8D7B7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileInitial: {
    fontSize: 20,
    color: '#183D2C',
    fontWeight: 'bold',
  },

  greeting: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  welcomeText: {
    fontSize: 14,
    color: '#D5DFD4',
    marginTop: 6,
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#183D2C',
    marginTop: 23,
    marginBottom: 14,
  },

  refreshText: {
    color: '#A77B2D',
    fontWeight: '700',
    fontSize: 13,
  },

  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  featureCard: {
    width: '48%',
    minHeight: 145,
    backgroundColor: '#FFFCF6',
    padding: 15,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#EAE2D4',
    marginBottom: 13,
    elevation: 2,
  },

  featureIcon: {
    fontSize: 27,
    marginBottom: 13,
  },

  featureTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#183D2C',
    marginBottom: 6,
  },

  featureDescription: {
    fontSize: 11,
    lineHeight: 17,
    color: '#858176',
  },

  infoCard: {
    backgroundColor: '#EAE6D9',
    borderRadius: 16,
    padding: 17,
    marginTop: 10,
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#183D2C',
    marginBottom: 7,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 19,
    color: '#666459',
  },

  logoutButton: {
    backgroundColor: '#183D2C',
    padding: 15,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 20,
  },

  logoutText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  footer: {
    color: '#999386',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 20,
  },
});
