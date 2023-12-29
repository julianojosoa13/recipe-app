import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Title from '../../components/Title'

const RecipeDetails = ({route}) => {
  const {name, thumbnail_url, nutrition} = route.params.item
  delete nutrition?.updated_at
  const nutritionKeys = Object.keys(nutrition)
  console.log("nutritionKeys :>> ", nutritionKeys)

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: thumbnail_url}} style={styles.image}/>
      <Title text={name} />
      {nutritionKeys?.map(key => (
        <View style={styles.row} key={key}>
            <Text style={styles.key}>{key}</Text>
            <Text style={styles.value}>{nutrition[key]}</Text>
        </View>
      ))}
    </SafeAreaView>
  )
}

export default RecipeDetails