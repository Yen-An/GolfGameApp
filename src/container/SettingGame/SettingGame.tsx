import {
  Button,
  Center,
  FormControl,
  // Input,
  Select,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {USER_LIST} from '../../const/UserList';

const SettingGame: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (index: number, value: string) => {
    const updatedValues = [...selectedValues];
    updatedValues[index] = value;
    setSelectedValues(updatedValues);
  };

  const onFinish = () => {
    console.log('Selected Values:', selectedValues);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Center>
      {/* 建立一個長度為4的陣列來遍歷 FormControl */}
      {Array.from(Array(4).keys()).map((_item, index) => (
        <FormControl w="3/4" isRequired key={index} mt="1" mb="1">
          <FormControl.Label>開球 {index + 1}</FormControl.Label>
          <Select
            minWidth="200"
            placeholder={`燒咖 ${index + 1}`}
            _selectedItem={{
              bg: 'teal.400',
            }}
            onValueChange={(value: string) => handleSelectChange(index, value)}
            selectedValue={selectedValues?.[index] || undefined}>
            {USER_LIST.map(user => (
              <Select.Item label={user} value={user} key={`player${index}`} />
            ))}
          </Select>
        </FormControl>
      ))}
      <Button onPress={onFinish}>完成設定</Button>
    </Center>
  );
};

export default SettingGame;
