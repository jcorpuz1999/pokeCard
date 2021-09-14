import { StyleSheet } from "react-native";
import * as eva from '@eva-design/eva';

export const styles = StyleSheet.create({
    ItemDetailsMainContainerStyle: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: 30
    },
    cardDetailsContainer: {
        marginVertical: 30,
        paddingHorizontal: 16,
        justifyContent: 'flex-start'
    },
    cardDetailsNameText: {
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 30,
        lineHeight: 40,
        letterSpacing: 0.0704,
        color: '#FFFFFF',
        marginBottom: 8
    },
    cardDetailsArtistContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardDetailsArtistText: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 18.75,
        color: '#C4C4C4',
        marginLeft: 8
    },
    ml30: {
        marginLeft: 30
    },
    cardOtherDetailsContainer: {
        marginTop: 30
    },
    typesLabelText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 12,
        letterSpacing: 0.15,
        color: '#979797',
        marginTop: 15
    },
    typesText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: '#FFFFFF'
    },
    attacksContainer:{
        paddingBottom: 12,
        paddingHorizontal: 6
    },
    attacksText: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: '#FFFFFF'
    },
    setsCardContainer: {
        marginTop: 15
    }
})