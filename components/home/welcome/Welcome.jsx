import {useState} from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import styles from './welcome.style'
import {icons,SIZES} from '../../../constants'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Arpan</Text>
        <Text style={styles.welcomeMessage}>Find Your Dream Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput}/>
      </View>
    </View>
  )
}

export default Welcome