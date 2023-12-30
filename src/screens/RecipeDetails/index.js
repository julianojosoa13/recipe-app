import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Title from '../../components/Title'

const RecipeDetails = ({route}) => {
  const {name, thumbnail_url, nutrition, instructions} = route.params.item
  delete nutrition?.updated_at
  const nutritionKeys = Object.keys(nutrition || {})
  console.log("nutritionKeys :>> ", nutritionKeys)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{uri: thumbnail_url}} style={styles.image}/>
        <Title text={name} />
        {nutritionKeys?.map(key => (
          <View style={styles.row} key={key}>
              <Text style={styles.key}>{key}</Text>
              <Text style={styles.value}>{nutrition[key]}</Text>
          </View>
        ))}
        <Title style={{marginTop: 32, marginBottom: 16}} text={'Instructions'}/>
        {instructions?.map((instruction, index) => (
          <View style={styles.instructionRow} key={instruction?.id}>
              <Text style={styles.index}>{index + 1}</Text>
              <Text style={styles.instructionText}>{instruction?.display_text}</Text>
          </View>
        ))}
        {!instructions?.length? (
          <Text style={styles.value}>No instructions found!</Text>
        ): null}
      </ScrollView>
    </SafeAreaView>
  )
}

export default RecipeDetails