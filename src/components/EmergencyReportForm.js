
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { submitEmergencyReport } from '../services/reportService';
import { reportStyles } from '../styles/reportStyles';

const reportTypes = ['Flood', 'Fire', 'Accident', 'Landslide', 'Other'];

export default function EmergencyReportForm({ userId }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Flood');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim() || !location.trim()) {
      Alert.alert('Incomplete Form', 'Please complete all fields.');
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await submitEmergencyReport(userId, {
        title,
        description,
        location,
        type,
      });

      if (error) {
        Alert.alert('Submission Failed', error.message);
        return;
      }

      Alert.alert(
        'Report Submitted',
        'Your emergency report has been submitted successfully.'
      );

      setTitle('');
      setDescription('');
      setLocation('');
      setType('Flood');
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={reportStyles.reportCard}>
      <Text style={reportStyles.cardTitle}>
        Submit Emergency Report
      </Text>

      <Text style={reportStyles.inputLabel}>Report Title</Text>

      <TextInput
        style={reportStyles.reportInput}
        placeholder="Enter report title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={reportStyles.inputLabel}>Description</Text>

      <TextInput
        style={[
          reportStyles.reportInput,
          reportStyles.descriptionInput,
        ]}
        placeholder="Describe the emergency"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={reportStyles.inputLabel}>Location</Text>

      <TextInput
        style={reportStyles.reportInput}
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={reportStyles.inputLabel}>Report Type</Text>

      <View style={reportStyles.reportTypes}>
        {reportTypes.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              reportStyles.typeButton,
              type === item && reportStyles.selectedTypeButton,
            ]}
            onPress={() => setType(item)}
          >
            <Text
              style={[
                reportStyles.typeButtonText,
                type === item && reportStyles.selectedTypeText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={reportStyles.submitReportButton}
        onPress={handleSubmit}
        disabled={submitting}
      >
        {submitting ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={reportStyles.submitReportText}>
            Submit Report
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
