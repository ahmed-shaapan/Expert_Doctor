import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from './ThemedText';

interface SwitchButtonProps {
    txt1: string;
    txt2: string;
    onSelect: (value: number) => void;
}

export function SwitchButton({ txt1, txt2, onSelect }: SwitchButtonProps) {
    const [SelectedTab, setSelectedTab] = useState(0);

    const handleSelect = (value: number) => {
        setSelectedTab(value);
        onSelect(value);
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ width: '100%', height: 55, borderWidth: 0.5, borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: '48%', height: '90%', marginHorizontal: 3, backgroundColor: SelectedTab == 0 ? '#00bfff' : 'white', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => handleSelect(0)}
                >
                    <ThemedText type="subtitle" darkColor={SelectedTab == 0 ? 'ffff' : "white"}>{txt1}</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '48%', height: '90%', marginHorizontal: 3, backgroundColor: SelectedTab == 1 ? '#00bfff' : 'white', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => handleSelect(1)}
                >
                    <ThemedText type="subtitle" darkColor={SelectedTab == 1 ? 'ffff' : "white"}>{txt2}</ThemedText>
                </TouchableOpacity>
            </View>
        </View>
    );
}
