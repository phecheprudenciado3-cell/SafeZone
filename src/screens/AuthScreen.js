
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';

import { registerUser, loginUser } from '../services/authService';
import { authStyles as styles } from '../styles/authStyles';

export default function AuthScreen() {
  const [isRegister, setIsRegister] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim() || !password || (isRegister && !fullName.trim())) {
      Alert.alert('Incomplete Form', 'Please complete all required fields.');
      return;
    }

    setSubmitting(true);

    try {
      const result = isRegister
        ? await registerUser(fullName, email, password)
        : await loginUser(email, password);

      if (result.error) {
        Alert.alert(
          isRegister ? 'Registration Failed' : 'Login Failed',
          result.error.message
        );
        return;
      }

      if (isRegister) {
        if (result.data?.session) {
          Alert.alert('Welcome to SafeZone', 'Your account has been created.');
        } else {
          Alert.alert(
            'Verify Your Email',
            'Your account was created. Please check your email before logging in.'
          );
          setIsRegister(false);
        }
      }

      setPassword('');
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#F8F4EC" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoArea}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoIcon}>⌂</Text>
          </View>

          <Text style={styles.logo}>
            Safe<Text style={styles.logoAccent}>Zone</Text>
          </Text>

          <Text style={styles.tagline}>
            Safer Community. Stronger Tomorrow.
          </Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.heading}>
            {isRegister ? 'Create Account' : 'Welcome Back!'}
          </Text>

          <Text style={styles.description}>
            {isRegister
              ? 'Join our community for a safer place.'
              : 'Sign in to continue to your community.'}
          </Text>

          {isRegister && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputIcon}>♙</Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#9A968D"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
              />
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>✉</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#9A968D"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>♙</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#9A968D"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleSubmit}
            disabled={submitting}
          >
            {submitting ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.primaryButtonText}>
                {isRegister ? 'Create Account' : 'Log In'}
              </Text>
            )}
          </TouchableOpacity>

          <View style={styles.switchArea}>
            <Text style={styles.switchLabel}>
              {isRegister
                ? 'Already have an account? '
                : "Don't have an account? "}
            </Text>

            <TouchableOpacity onPress={() => setIsRegister(!isRegister)}>
              <Text style={styles.switchLink}>
                {isRegister ? 'Log In' : 'Register'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footer}>
          Together, we build a safer community.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
