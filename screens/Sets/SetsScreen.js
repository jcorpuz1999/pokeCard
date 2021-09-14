import React, {useLayoutEffect, useState} from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Layout, Text} from '@ui-kitten/components';
import { styles } from './Styles';
import { config } from '../../config/config';
import axios from 'axios';
import { Spinner } from '@ui-kitten/components';

const {REACT_APP_GET_SETS} = config

const SetsScreen = (props) => {
    const {route} = props
    const [isLoading, setIsLoading] = useState(true)
    const [dataArr, setDataArr] = useState([])
    const setsId = route && route.params && route.params.id ? route.params.id : []

    console.log("details screen", props)

    const getSets = async () => {
        try {
          const response = await axios.get(`${REACT_APP_GET_SETS}${setsId}`);
          setDataArr(response.data.data)
          setIsLoading(false)
        } catch (error) {
          console.error(error);
        }
      }
    useLayoutEffect(() => {
        getSets()
    },[])
    console.log("dataArr", dataArr)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Divider/>
            <Layout style={styles.SetsDetailsMainContainerStyle}>
                {/* <DetailsMainContainer /> */}
                {isLoading ? <Spinner /> : null}
            </Layout>
        </SafeAreaView>
    );
};

export default SetsScreen