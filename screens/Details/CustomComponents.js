import React, {useContext} from 'react'
import { DetailsContext, GlobalContext} from '../../AppContext';
import {View, ScrollView, Dimensions, TouchableOpacity} from 'react-native'
import FastImage from 'react-native-fast-image'
import { Text, Divider, Card} from '@ui-kitten/components';
import { config } from '../../config/config';
import { styles } from './Styles';

const {REACT_APP_DEFAULT_AVATAR} = config

export const CardDetailsContainer = () => {
    const value = useContext(DetailsContext)
    const globalValue = useContext(GlobalContext)
    const {typesLabel, hpLabel, levelLabel, attacksLabel, nameLabel, descriptionLabel, costLabel, setLabel, seriesLabel} = globalValue.pokeLocale
    const {dataArr, navigation} = value
    const name = dataArr && dataArr.name ? dataArr.name : ''
    const artist = dataArr && dataArr.artist ? dataArr.artist : ''
    const typesArr = dataArr &&dataArr.types ? dataArr.types : []
    const hpText = dataArr && dataArr.hp ? dataArr.hp : ''
    const levelText = dataArr && dataArr.level ? dataArr.level : 0
    const attackArr = dataArr && dataArr.attacks ? dataArr.attacks: []
    const setArr = dataArr && dataArr.set ? dataArr.set : []
    const setName = setArr && setArr.name ? setArr.name : ''
    const setId = setArr && setArr.id ? setArr.id : 0
    const setSeries = setArr && setArr.series ? setArr.series : ''
    console.log("globalValue", globalValue)
    return (
        <View style={styles.cardDetailsContainer}>
            <Text style={styles.cardDetailsNameText}>{name}</Text>
            <View style={styles.cardDetailsArtistContainer}>
                <FastImage
                    style={{ width: 30, height: 30, borderRadius: 10 }}
                    source={{
                        uri: REACT_APP_DEFAULT_AVATAR,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={styles.cardDetailsArtistText}>{artist}</Text>
            </View>
            <View style={styles.cardOtherDetailsContainer}>
                <Text style={styles.typesLabelText}>{typesLabel}</Text>
                <View style={styles.cardDetailsArtistContainer}>
                    {
                        typesArr.map((type, i) => {
                            return <Text style={styles.typesText} key={i}>{type}</Text>
                        })
                    }
                </View>
                <View style={styles.cardDetailsArtistContainer}>
                    <View>
                        <Text style={styles.typesLabelText}>{hpLabel}</Text>
                        <Text style={styles.typesText}>{hpText}</Text>
                    </View>
                    <View style={styles.ml30}>
                        <Text style={styles.typesLabelText}>{levelLabel}</Text>
                        <Text style={styles.typesText}>{levelText}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cardOtherDetailsContainer}>
                <Text style={styles.typesLabelText}>{attacksLabel}</Text>
                {
                    attackArr.map((attack, i) => {
                        const attackName = attack && attack.name ? attack.name : ''
                        const attackDescription = attack && attack.text ? attack.text : ''
                        const attackDamage = attack && attack.damage ? attack.damage: ''
                        const attackCost = attack && attack.convertedEnergyCost ? attack.convertedEnergyCost :''

                        return (
                            <View key={i}>
                                <View style={styles.attacksContainer}>
                                    <Text style={styles.typesLabelText}>{nameLabel}</Text>
                                    <Text style={styles.attacksText}>{attackName}</Text>
                                    <Text style={styles.typesLabelText}>{descriptionLabel}</Text>
                                    <Text style={styles.attacksText}>{attackDescription}</Text>
                                    <Text style={styles.typesLabelText}>{costLabel}</Text>
                                    <Text style={styles.attacksText}>{attackCost}</Text>
                                </View>
                                <Divider />
                            </View>
                        )
                    })
                }
            </View>
            <View style={styles.cardOtherDetailsContainer}>
                <Text style={styles.typesLabelText}>{setLabel}</Text>
                <Card style={styles.setsCardContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Sets', {id: setId})}>
                    <View>
                        <Text style={styles.typesLabelText}>{nameLabel}</Text>
                        <Text>{setName}</Text>
                    </View>
                    <View>
                        <Text style={styles.typesLabelText}>{seriesLabel}</Text>
                        <Text>{setSeries}</Text>
                    </View>
                    </TouchableOpacity>
                </Card>
            </View>
        </View>
    )
}

export const DetailsImageContainer = () => {
    const value = useContext(DetailsContext)
    const {dataArr} = value
    const dataImageUri = dataArr && dataArr.images && dataArr.images.large ? dataArr.images.large : ''
    console.log("dataArr", value)
    return (
        <View>
            <FastImage
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width }}
                    source={{
                        uri: dataImageUri,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
        </View>
    )
}

export const DetailsMainContainer = () => {
    return (
        <ScrollView>
            <DetailsImageContainer />
            <CardDetailsContainer />
        </ScrollView>
    )
}