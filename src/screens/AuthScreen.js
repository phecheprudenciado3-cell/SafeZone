
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, KeyboardAvoidingView, Platform,
  ActivityIndicator, Alert, StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { loginUser, registerUser } from '../services/authService';
import { authStyles as s } from '../styles/authStyles';

export default function AuthScreen() {
  const [isRegister, setIsRegister] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim() || !password || (isRegister && !fullName.trim())) {
      Alert.alert('Incomplete form', 'Please complete all required fields.');
      return;
    }

    if (isRegister && password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Your passwords do not match.');
      return;
    }

    setSubmitting(true);

    try {
      const result = isRegister
        ? await registerUser(fullName, email, password)
        : await loginUser(email, password);

      if (result.error) {
        Alert.alert(
          isRegister ? 'Registration failed' : 'Login failed',
          result.error.message
        );
        return;
      }

      if (isRegister && !result.data?.session) {
        Alert.alert(
          'Verify your email',
          'Your account was created. Please check your email before logging in.'
        );
        setIsRegister(false);
      }

      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      Alert.alert('Error', error.message || 'Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const renderInput = (label, icon, value, onChangeText, options = {}) => (
    <View style={s.field}>
      <Text style={s.label}>{label}</Text>
      <View style={s.inputWrap}>
        <Ionicons name={icon} size={19} color="#718096" />
        <TextInput
          style={s.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={options.placeholder}
          placeholderTextColor="#9AA6B5"
          secureTextEntry={options.secure && !showPassword}
          keyboardType={options.keyboardType || 'default'}
          autoCapitalize={options.autoCapitalize || 'none'}
          autoCorrect={false}
        />
        {options.secure && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#718096"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={s.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#F5F8FD" />

      <ScrollView
        contentContainerStyle={s.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={s.brand}>
          <View style={s.logo}>
            <Ionicons name="shield-checkmark" size={36} color="#FFFFFF" />
          </View>
          <Text style={s.brandName}>
            Safe<Text style={s.brandAccent}>Zone</Text>
          </Text>
          <Text style={s.brandSubtitle}>COMMUNITY SAFETY PLATFORM</Text>
        </View>

        <View style={s.card}>
          <Text style={s.heading}>
            {isRegister ? 'Create Account' : 'Welcome Back!'}
          </Text>
          <Text style={s.description}>
            {isRegister
              ? 'Join our community for a safer place.'
              : 'Sign in to stay connected and informed.'}
          </Text>

          {isRegister && renderInput(
            'Full Name',
            'person-outline',
            fullName,
            setFullName,
            { placeholder: 'Enter your full name', autoCapitalize: 'words' }
          )}

          {renderInput(
            'Email Address',
            'mail-outline',
            email,
            setEmail,
            { placeholder: 'name@example.com', keyboardType: 'email-address' }
          )}

          {renderInput(
            'Password',
            'lock-closed-outline',
            password,
            setPassword,
            { placeholder: 'Enter your password', secure: true }
          )}

          {isRegister && renderInput(
            'Confirm Password',
            'lock-closed-outline',
            confirmPassword,
            setConfirmPassword,
            { placeholder: 'Confirm your password', secure: true }
          )}

          <TouchableOpacity
            style={s.primaryButton}
            onPress={handleSubmit}
            disabled={submitting}
          >
            {submitting ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <>
                <Text style={s.primaryButtonText}>
                  {isRegister ? 'Create Account' : 'Sign In'}
                </Text>
                <Ionicons name="arrow-forward" size={19} color="#FFFFFF" />
              </>
            )}
          </TouchableOpacity>

          <View style={s.switchRow}>
            <Text style={s.switchText}>
              {isRegister
                ? 'Already have an account? '
                : "Don't have an account? "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsRegister(!isRegister);
                setPassword('');
                setConfirmPassword('');
              }}
            >
              <Text style={s.switchLink}>
                {isRegister ? 'Sign In' : 'Register'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={s.footer}>
          <Ionicons name="shield-checkmark-outline" size={16} color="#718096" />
          <Text style={s.footerText}>
            Free community safety for everyone
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
