import { Image, StyleSheet, Platform, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SwitchButton } from '@/components/SwitchButton'
import { useState } from 'react';
import SelectableOptions from '@/components/SelectItems'



export default function HomeScreen() {
  const [fever, setFever] = useState(0);
  const [cough, setCough] = useState(0);
  const [fatigue, setFatigue] = useState(0);
  const [difficultyBreathing, setDifficultyBreathing] = useState(0);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(0);
  const [bloodPressure, setBloodPressure] = useState('Normal');
  const [Cholesterol, setCholesterol] = useState('Normal');

  const handleSubmit = () => {
    const data = {
        fever,
        cough,
        fatigue,
        difficultyBreathing,
        age: parseInt(age, 10),
        gender,
        bloodPressure
    };

    
    fetch('https://backend-api.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Ducktor Duck Doctor Sticker.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Welcome!</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Fever</ThemedText>
                <SwitchButton txt1={'Yes'} txt2={'No'} onSelect={setFever} />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Cough</ThemedText>
                <SwitchButton txt1={'Yes'} txt2={'No'} onSelect={setCough} />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Fatigue</ThemedText>
                <SwitchButton txt1={'Yes'} txt2={'No'} onSelect={setFatigue} />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Difficulty Breathing</ThemedText>
                <SwitchButton txt1={'Yes'} txt2={'No'} onSelect={setDifficultyBreathing} />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Age</ThemedText>
                <TextInput
                    placeholder="Age"
                    value={age}
                    onChangeText={setAge}
                    style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        height: 40,
                        paddingLeft: 20,
                        borderWidth: 0.2
                    }}
                    autoCapitalize="none"
                    keyboardType="numeric"
                />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Gender</ThemedText>
                <SwitchButton txt1={'Male'} txt2={'Female'} onSelect={setGender} />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Blood Pressure</ThemedText>
                <SelectableOptions options={['Low', 'Normal', 'High']} onOptionSelect={setBloodPressure} />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Cholesterol</ThemedText>
                <SelectableOptions options={['Low', 'Normal', 'High']} onOptionSelect={setCholesterol} />
            </ThemedView>
            <Button title="Submit" onPress={handleSubmit} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 360,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
