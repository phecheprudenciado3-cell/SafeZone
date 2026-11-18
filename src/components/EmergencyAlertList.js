
import React from 'react';

import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import { alertStyles } from '../styles/alertStyles';

export default function EmergencyAlertList({ alerts, loading }) {
  if (loading) {
    return (
      <ActivityIndicator
        size="small"
        color="#123B56"
        style={{ margin: 15 }}
      />
    );
  }

  if (!alerts || alerts.length === 0) {
    return (
      <View style={alertStyles.emptyContainer}>
        <Text style={alertStyles.emptyText}>
          No active emergency alerts.
        </Text>
      </View>
    );
  }

  return (
    <View>
      {alerts.map((alert) => (
        <View key={alert.id} style={alertStyles.alertItem}>
          <Text style={alertStyles.alertTitle}>
            {alert.title}
          </Text>

          <Text style={alertStyles.alertSeverity}>
            Severity: {alert.severity?.toUpperCase()}
          </Text>

          <Text style={alertStyles.cardText}>
            {alert.description}
          </Text>

          <Text style={alertStyles.location}>
            Location: {alert.location || 'Not specified'}
          </Text>
        </View>
      ))}
    </View>
  );
}
