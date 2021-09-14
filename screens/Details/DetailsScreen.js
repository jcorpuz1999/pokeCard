import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Layout, Text} from '@ui-kitten/components';
import { DetailsContext } from '../../AppContext';
import {DetailsMainContainer} from './CustomComponents'
import { styles } from './Styles';

const DetailsScreen = (props) => {
    const {route, navigation} = props
    const dataArr = route && route.params && route.params.data ? route.params.data : []

    console.log("details screen", props)
    return (
        <DetailsContext.Provider value={{
            dataArr, navigation
        }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Divider/>
                <Layout style={styles.ItemDetailsMainContainerStyle}>
                    <DetailsMainContainer />
                </Layout>
            </SafeAreaView>
        </DetailsContext.Provider>
    );
};

export default DetailsScreen