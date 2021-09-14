import React from 'react'
import {TouchableOpacity} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, Text } from '@ui-kitten/components';
import { styles } from './Styles'

export const ItemCard = (props) => {
    const {item, navigation} = props
    const itemImageUri = item && item.images && item.images.small ? item.images.small : ''
    return (
        <Card style={styles.card}>
            <TouchableOpacity onPress={() => navigation(item)}>
                <FastImage
                    style={{ width: 263, height: 263 }}
                    source={{
                        uri: itemImageUri,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </TouchableOpacity>
        </Card>
    )
}