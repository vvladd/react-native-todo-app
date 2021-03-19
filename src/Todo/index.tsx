import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {TodoProps} from './interfaces';
import {styles} from './styles';

export const Todo: FC<TodoProps> = ({todo}) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  );
};
