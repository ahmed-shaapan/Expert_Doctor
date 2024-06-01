import { Image, StyleSheet, Platform, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SwitchButton } from '@/components/SwitchButton'
import { useState } from 'react';
import SelectableOptions from '@/components/SelectItems'



export default function HomeScreen() {
  const[email, setEmail]=useState('')
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
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Fever</ThemedText>
        <SwitchButton txt1={'Yes'} txt2={'No'} />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Cough</ThemedText>
        <SwitchButton txt1={'Yes'} txt2={'No'}/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Fatigue</ThemedText>
        <SwitchButton txt1={'Yes'} txt2={'No'}/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Difficulty Breathing</ThemedText>
        <SwitchButton txt1={'Yes'} txt2={'No'}/>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Age</ThemedText>
        <TextInput
          placeholder="Age"
          value={email}
          onChangeText={val => setEmail(val)}
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            height: 40,
            paddingLeft: 20,
            borderWidth:0.2
          }}
          autoCapitalize="none"
        />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Gender</ThemedText>
        <SwitchButton txt1={'Male'} txt2={'Female'}/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Blood Pressure</ThemedText>
        <SelectableOptions options={['Low', 'Normal', 'Heigh']}/>
      </ThemedView>
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
