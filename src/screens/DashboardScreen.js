
import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { getActiveAlerts } from '../services/alertService';
import { logoutUser } from '../services/authService';

import EmergencyAlertList from '../components/EmergencyAlertList';
import EmergencyReportForm from '../components/EmergencyReportForm';

import { dashboardStyles } from '../styles/dashboardStyles';

export default function DashboardScreen({ session }) {
  const [alerts, setAlerts] = useState([]);
  const [alertsLoading, setAlertsLoading] = useState(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      setAlertsLoading(true);

      try {
        const { data, error } = await getActiveAlerts();

        if (error) {
          console.log('Alert error:', error.message);
          Alert.alert('Alert Error', error.message);
        } else {
          setAlerts(data || []);
        }
      } catch (error) {
        console.log('Unexpected alert error:', error);
      } finally {
        setAlertsLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  const handleLogout = async () => {
    const { error } = await logoutUser();

    if (error) {
      Alert.alert('Logout Failed', error.message);
    }
  };

  return (
    <View style={dashboardStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={dashboardStyles.header}>
          <Text style={dashboardStyles.headerTitle}>
            SafeZone
          </Text>

          <Text style={{ color: '#CBD5E1', marginTop: 5 }}>
            Your Community Safety Companion
          </Text>
        </View>

        <View style={dashboardStyles.dashboard}>
          <Text style={dashboardStyles.welcome}>
            Welcome to SafeZone!
          </Text>

          <Text style={dashboardStyles.email}>
            {session?.user?.email}
          </Text>

          <Text style={dashboardStyles.sectionTitle}>
            Emergency Alerts
          </Text>

          <EmergencyAlertList
            alerts={alerts}
            loading={alertsLoading}
          />

          <Text style={dashboardStyles.sectionTitle}>
            Report an Emergency
          </Text>

          <EmergencyReportForm userId={session.user.id} />

          <Text style={dashboardStyles.sectionTitle}>
            Community Features
          </Text>

          <View style={dashboardStyles.feature}>
            <Text style={dashboardStyles.featureTitle}>
              Emergency Reports
            </Text>
            <Text style={dashboardStyles.featureDescription}>
              Submit important emergency information to help your community.
            </Text>
          </View>

          <View style={dashboardStyles.feature}>
            <Text style={dashboardStyles.featureTitle}>
              Evacuation Centers
            </Text>
            <Text style={dashboardStyles.featureDescription}>
              Find available evacuation centers in your community.
            </Text>
          </View>

          <View style={dashboardStyles.feature}>
            <Text style={dashboardStyles.featureTitle}>
              Safety Guides
            </Text>
            <Text style={dashboardStyles.featureDescription}>
              Learn what to do before, during, and after disasters.
            </Text>
          </View>

          <TouchableOpacity
            style={dashboardStyles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={dashboardStyles.logoutText}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
