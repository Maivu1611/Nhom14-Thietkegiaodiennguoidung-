import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import UnitScreen from '../screens/UnitScreen'
import SearchScreen from '../screens/SearchScreen'

const Stack = createStackNavigator();

export default function HomeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          ...styles,
          ...titleStyle,
          title: 'MyMind',
          headerLeft: () => 
            <TouchableOpacity
              onPress={() => props.navigation.openDrawer()}
              style={{marginLeft: 16}}
            >
              <Feather name='menu' size={24} color={'white'}/>
            </TouchableOpacity>,
          headerRight: () => 
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Search')}
              style={{marginRight: 16}}
            >
              <Feather name='search' size={24} color={'white'}/>
            </TouchableOpacity>
          }}
        />
      <Stack.Screen 
        name="Unit" 
        component={UnitScreen} 
        options={
        ({ route }) => ({ title: route.params.name })
        }
      />
      <Stack.Screen 
        name="Search" 
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
}

const styles = {
  headerStyle: {
        backgroundColor: '#662d86'
  }
}

const titleStyle = {
  headerTitleAlign: 'center', 
  headerTintColor: 'white', 
  fontWeight: 'bold'
}