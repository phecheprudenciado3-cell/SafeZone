
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { alertStyles as s } from '../styles/alertStyles';

const severityColors = {
  low: '#3182CE',
  moderate: '#D69E2E',
  high: '#DD6B20',
  critical: '#E53E3E',
};

export default function EmergencyAlertList({ alerts, loading }) {
  if (loading) {
    return (
      <ActivityIndicator
        color="#245FA6"
        size="large"
        style={{ margin: 25 }}
      />
    );
  }

  if (!alerts || alerts.length === 0) {
    return (
      <View style={s.emptyCard}>
        <Ionicons name="notifications-off-outline" size={28} color="#8995A5" />
        <Text style={s.emptyTitle}>No active alerts</Text>
        <Text style={s.emptyText}>
          There are currently no active emergency announcements.
        </Text>
      </View>
    );
  }

  return (
    <View>
      {alerts.map((alert) => {
        const color = severityColors[alert.severity?.toLowerCase()] || '#3182CE';

        return (
          <View key={alert.id} style={s.card}>
            <View style={[s.iconBox, { backgroundColor: `${color}18` }]}>
              <Ionicons name="warning-outline" size={25} color={color} />
            </View>

            <View style={s.details}>
              <View style={s.titleRow}>
                <Text style={s.title}>{alert.title}</Text>
                <View style={[s.badge, { backgroundColor: `${color}18` }]}>
                  <Text style={[s.badgeText, { color }]}>
                    {alert.severity || 'Information'}
                  </Text>
                </View>
              </View>

              <Text style={s.description}>{alert.description}</Text>

              <View style={s.locationRow}>
                <Ionicons name="location-outline" size={13} color="#8995A5" />
                <Text style={s.location}>
                  {alert.location || 'Location not specified'}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}
