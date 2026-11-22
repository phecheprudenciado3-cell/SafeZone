

import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StatusBar,
} from 'react-native';

import { logoutUser } from '../services/authService';
import { getActiveAlerts } from '../services/alertService';

import EmergencyAlertList from '../components/EmergencyAlertList';
import EmergencyReportForm from '../components/EmergencyReportForm';

import { dashboardStyles as styles } from '../styles/dashboardStyles';

export default function DashboardScreen({ session }) {
  const [alerts, setAlerts] = useState([]);
  const [alertsLoading, setAlertsLoading] = useState(true);

  const user = session?.user;

  useEffect(() => {
    loadAlerts();
  }, []);

  const loadAlerts = async () => {
    setAlertsLoading(true);

    try {
      const { data, error } = await getActiveAlerts();

      if (error) {
        console.log('Alert loading error:', error.message);
        return;
      }

      setAlerts(data || []);
    } catch (error) {
      console.log('Alert error:', error.message);
    } finally {
      setAlertsLoading(false);
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log Out',
          style: 'destructive',
          onPress: async () => {
            const { error } = await logoutUser();

            if (error) {
              Alert.alert('Logout Failed', error.message);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#183D2C" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.brand}>SafeZone</Text>
              <Text style={styles.headerSubtitle}>
                Your Community Safety Companion
              </Text>
            </View>

            <View style={styles.profileCircle}>
              <Text style={styles.profileInitial}>
                {(user?.user_metadata?.full_name || user?.email || 'U')
                  .charAt(0)
                  .toUpperCase()}
              </Text>
            </View>
          </View>

          <Text style={styles.greeting}>
            Hello, {user?.user_metadata?.full_name?.split(' ')[0] || 'there'}!
          </Text>

          <Text style={styles.welcomeText}>
            Stay safe, stay informed.
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Emergency Alerts</Text>

            <TouchableOpacity onPress={loadAlerts}>
              <Text style={styles.refreshText}>Refresh</Text>
            </TouchableOpacity>
          </View>

          <EmergencyAlertList
            alerts={alerts}
            loading={alertsLoading}
          />

          <Text style={styles.sectionTitle}>Safety Services</Text>

          <View style={styles.featureGrid}>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>⚠️</Text>
              <Text style={styles.featureTitle}>Emergency Alerts</Text>
              <Text style={styles.featureDescription}>
                Stay updated with announcements.
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>📋</Text>
              <Text style={styles.featureTitle}>Report Incident</Text>
              <Text style={styles.featureDescription}>
                Send reports to your barangay.
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🏠</Text>
              <Text style={styles.featureTitle}>Evacuation Centers</Text>
              <Text style={styles.featureDescription}>
                Find designated safe locations.
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>📖</Text>
              <Text style={styles.featureTitle}>Safety Guides</Text>
              <Text style={styles.featureDescription}>
                Learn how to prepare for emergencies.
              </Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Submit an Emergency Report</Text>

          <EmergencyReportForm userId={user?.id} />

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Your Safety Matters</Text>
            <Text style={styles.infoText}>
              SafeZone helps your community stay informed and prepared.
              For immediate danger, contact the appropriate emergency
              services directly.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            SafeZone • Free Community Safety Platform
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
