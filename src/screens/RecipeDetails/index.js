import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import Title from '../../components/Title'

const RecipeDetails = ({route}) => {
  const {name, thumbnail_url} = route.params.item

  return (
    <SafeAreaView style={styles.container}>
      <Title text={name} />
    </SafeAreaView>
  )
}

export default RecipeDetails