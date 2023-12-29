import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import Title from '../../components/Title'

const RecipeDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
    </SafeAreaView>
  )
}

export default RecipeDetails