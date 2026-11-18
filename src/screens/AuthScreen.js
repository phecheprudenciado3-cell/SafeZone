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
} from 'react-native';

import { registerUser, loginUser } from '../services/authService';
import { authStyles } from '../styles/authStyles';

export default function AuthScreen() {
  const [isRegister, setIsRegister] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitting, setSubmitting] = useState(false);

  // Register resident
  const handleRegister = async () => {
    setSubmitting(true);

    const { data, error } = await registerUser(
      fullName,
      email,
      password
    );

    setSubmitting(false);

    if (error) {
      Alert.alert('Registration Failed', error.message);
      return;
    }

    if (data.session) {
      Alert.alert(
        'Success',
        'Your SafeZone account was created!'
      );
    } else {
      Alert.alert(
        'Check Your Email',
        'Your account was created. Please verify your email before logging in.'
      );

      setIsRegister(false);
    }

    setPassword('');
  };

  // Login resident
  const handleLogin = async () => {
    setSubmitting(true);

    const { error } = await loginUser(email, password);

    setSubmitting(false);

    if (error) {
      Alert.alert('Login Failed', error.message);
    } else {
      setPassword('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={authStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={authStyles.authContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={authStyles.logo}>SafeZone</Text>

        <Text style={authStyles.subtitle}>
          Your Community Safety Companion
        </Text>

        <View style={authStyles.form}>
          <Text style={authStyles.formTitle}>
            {isRegister ? 'Create Account' : 'Welcome Back!'}
          </Text>

          {isRegister && (
            <TextInput
              style={authStyles.input}
              placeholder="Full Name"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
            />
          )}

          <TextInput
            style={authStyles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={authStyles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={authStyles.primaryButton}
            onPress={isRegister ? handleRegister : handleLogin}
            disabled={submitting}
          >
            {submitting ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={authStyles.buttonText}>
                {isRegister ? 'Register' : 'Login'}
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsRegister(!isRegister)}
            style={authStyles.switchButton}
          >
            <Text style={authStyles.switchText}>
              {isRegister
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
