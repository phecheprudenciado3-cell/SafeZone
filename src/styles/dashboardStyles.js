
import { StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FA',
  },

  dashboard: {
    padding: 20,
    paddingBottom: 35,
  },

  header: {
    backgroundColor: '#123B56',
    padding: 22,
    paddingTop: 45,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  welcome: {
    fontSize: 17,
    color: '#123B56',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  email: {
    color: '#64748B',
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#123B56',
    marginBottom: 13,
    marginTop: 18,
  },

  feature: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 12,
    marginBottom: 12,
  },

  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#123B56',
  },

  featureDescription: {
    color: '#64748B',
    marginTop: 5,
    lineHeight: 20,
  },

  logoutButton: {
    backgroundColor: '#DC2626',
    padding: 15,
    borderRadius: 9,
    alignItems: 'center',
    marginTop: 10,
  },

  logoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F7FA',
  },
});