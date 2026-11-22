
import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StatusBar, Alert, RefreshControl
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { logoutUser } from '../services/authService';
import { getActiveAlerts } from '../services/alertService';
import EmergencyAlertList from '../components/EmergencyAlertList';
import EmergencyReportForm from '../components/EmergencyReportForm';
import { dashboardStyles as s } from '../styles/dashboardStyles';

const navigation = [
  { key: 'Home', icon: 'home-outline', active: 'home' },
  { key: 'Alerts', icon: 'notifications-outline', active: 'notifications' },
  { key: 'Report', icon: 'document-text-outline', active: 'document-text' },
  { key: 'Profile', icon: 'person-outline', active: 'person' },
];

export default function DashboardScreen({ session }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = session?.user;
  const fullName = user?.user_metadata?.full_name || 'Resident';

  useEffect(() => {
    loadAlerts();
  }, []);

  const loadAlerts = async () => {
    setLoading(true);
    try {
      const { data, error } = await getActiveAlerts();
      if (error) {
        console.log('Alert error:', error.message);
        return;
      }
      setAlerts(data || []);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: async () => {
          const { error } = await logoutUser();
          if (error) Alert.alert('Logout Failed', error.message);
        },
      },
    ]);
  };

  const serviceItems = [
    { title: 'Emergency Alerts', icon: 'notifications-outline', color: '#EAF1FF', tab: 'Alerts' },
    { title: 'Report Incident', icon: 'alert-circle-outline', color: '#FFF0EC', tab: 'Report' },
    { title: 'Evacuation Centers', icon: 'location-outline', color: '#EAF7F0', tab: 'Centers' },
    { title: 'Safety Guides', icon: 'book-outline', color: '#F2EDFF', tab: 'Guides' },
  ];

  const renderHome = () => (
    <>
      <View style={s.welcomeRow}>
        <View style={{ flex: 1 }}>
          <Text style={s.eyebrow}>COMMUNITY OVERVIEW</Text>
          <Text style={s.greeting}>
            Hello, {fullName.split(' ')[0]}!
          </Text>
          <Text style={s.subGreeting}>Stay safe, stay informed.</Text>
        </View>
        <View style={s.avatar}>
          <Text style={s.avatarText}>
            {fullName.charAt(0).toUpperCase()}
          </Text>
        </View>
      </View>

      <View style={s.banner}>
        <View style={s.bannerIcon}>
          <Ionicons name="shield-checkmark" size={30} color="#FFFFFF" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={s.bannerTitle}>A safer community</Text>
          <Text style={s.bannerDescription}>
            Preparedness starts with staying informed.
          </Text>
        </View>
      </View>

      <View style={s.sectionHeader}>
        <Text style={s.sectionTitle}>Quick Access</Text>
      </View>

      <View style={s.serviceGrid}>
        {serviceItems.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={s.serviceCard}
            onPress={() => {
              if (item.tab === 'Centers' || item.tab === 'Guides') {
                Alert.alert(
                  'Coming Soon',
                  'This feature will be available in a future update.'
                );
              } else {
                setActiveTab(item.tab);
              }
            }}
          >
            <View style={[s.serviceIcon, { backgroundColor: item.color }]}>
              <Ionicons name={item.icon} size={24} color="#245FA6" />
            </View>
            <Text style={s.serviceTitle}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={16} color="#98A2B3" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={s.sectionHeader}>
        <Text style={s.sectionTitle}>Latest Alerts</Text>
        <TouchableOpacity onPress={() => setActiveTab('Alerts')}>
          <Text style={s.viewAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <EmergencyAlertList
        alerts={alerts.slice(0, 2)}
        loading={loading}
      />
    </>
  );

  const renderAlerts = () => (
    <>
      <Text style={s.pageTitle}>Emergency Alerts</Text>
      <Text style={s.pageDescription}>
        Stay updated with announcements from your community.
      </Text>
      <EmergencyAlertList alerts={alerts} loading={loading} />
    </>
  );

  const renderReport = () => (
    <>
      <Text style={s.pageTitle}>Report Incident</Text>
      <Text style={s.pageDescription}>
        Help keep your community safe. Report an incident you witness.
      </Text>
      <EmergencyReportForm userId={user?.id} />
    </>
  );

  const renderProfile = () => (
    <>
      <Text style={s.pageTitle}>My Profile</Text>

      <View style={s.profileCard}>
        <View style={s.largeAvatar}>
          <Text style={s.largeAvatarText}>
            {fullName.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={s.profileName}>{fullName}</Text>
        <Text style={s.profileEmail}>{user?.email}</Text>
        <View style={s.roleBadge}>
          <Text style={s.roleText}>Resident</Text>
        </View>
      </View>

      <View style={s.profileMenu}>
        <View style={s.menuItem}>
          <Ionicons name="document-text-outline" size={20} color="#245FA6" />
          <Text style={s.menuText}>My Reports</Text>
          <Ionicons name="chevron-forward" size={18} color="#98A2B3" />
        </View>
        <View style={s.menuItem}>
          <Ionicons name="settings-outline" size={20} color="#245FA6" />
          <Text style={s.menuText}>Settings</Text>
          <Ionicons name="chevron-forward" size={18} color="#98A2B3" />
        </View>
        <View style={s.menuItem}>
          <Ionicons name="help-circle-outline" size={20} color="#245FA6" />
          <Text style={s.menuText}>Help & Support</Text>
          <Ionicons name="chevron-forward" size={18} color="#98A2B3" />
        </View>
        <TouchableOpacity style={s.menuItem} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#D14343" />
          <Text style={[s.menuText, { color: '#D14343' }]}>Log Out</Text>
          <Ionicons name="chevron-forward" size={18} color="#98A2B3" />
        </TouchableOpacity>
      </View>
    </>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Alerts': return renderAlerts();
      case 'Report': return renderReport();
      case 'Profile': return renderProfile();
      default: return renderHome();
    }
  };

  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" backgroundColor="#173B70" />

      <View style={s.topBar}>
        <View style={s.brandRow}>
          <Ionicons name="shield-checkmark" size={25} color="#FFFFFF" />
          <Text style={s.brandName}>SafeZone</Text>
        </View>
        <TouchableOpacity onPress={() => setActiveTab('Alerts')}>
          <Ionicons name="notifications-outline" size={23} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={s.scroll}
        contentContainerStyle={s.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadAlerts} />
        }
      >
        {renderContent()}
        <Text style={s.footer}>SafeZone • Free Community Safety Platform</Text>
      </ScrollView>

      <View style={s.bottomBar}>
        {navigation.map((item) => {
          const selected = activeTab === item.key;
          return (
            <TouchableOpacity
              key={item.key}
              style={s.tab}
              onPress={() => setActiveTab(item.key)}
            >
              <Ionicons
                name={selected ? item.active : item.icon}
                size={22}
                color={selected ? '#245FA6' : '#8995A5'}
              />
              <Text style={[s.tabLabel, selected && s.activeTabLabel]}>
                {item.key}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
