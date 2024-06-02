import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SelectableOptionsProps {
  options: string[];
  onOptionSelect: (option: string) => void;
}

const SelectableOptions: React.FC<SelectableOptionsProps> = ({ options, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelection = (option: string) => {
    setSelectedOption(option);
    onOptionSelect(option);
  };

  return (
    <View style={styles.container}>
      {options.map(option => (
        <TouchableOpacity
          key={option}
          style={[
            styles.option,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => handleSelection(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },
  selectedOption: {
    backgroundColor: '#00bfff',
    borderRadius: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
});

export default SelectableOptions;
