import React from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import styles from './styles';

const Card = ({ title, style, image, servings, onPress }) => {
    return (
        <Pressable style={[styles.container, style]} onPress={onPress}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text numberOfLines={3} style={styles.title}>{title}</Text>
            {servings ? (
                <View style={styles.row}>
                    <Text style={styles.label}>Servings</Text>
                    <Text style={styles.value}>{servings}</Text>
                </View>
            ) : null}
        </Pressable>
    );
};

export default React.memo(Card);
