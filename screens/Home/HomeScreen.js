import React, {useLayoutEffect, useState, useCallback, memo, useMemo} from 'react';
import { SafeAreaView, FlatList} from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import axios from 'axios';
import { config } from '../../config/config';
import { ItemCard } from './CustomComponents';
import { Spinner } from '@ui-kitten/components';

const {REACT_APP_GET_CARDS} = config

const HomeScreen = ({ navigation }) => {

  const [dataArr, setDataArr] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const memoizedNavigation = useCallback((item) => {
    navigation.navigate('Details', {data: item})
  }, [])

  const renderItem = ({item})  => (
    <ItemCard item={item} navigation={memoizedNavigation} />
  )

  const memoizedRenderItem = useMemo(() => renderItem, []);

   const getCards = async () => {
    try {
      const response = await axios.get(REACT_APP_GET_CARDS);
      setDataArr(response.data.data)
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  useLayoutEffect(() => {
    getCards()
  },[])

  console.log("dataArr", dataArr)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigation title='MyApp' alignment='center'/> */}
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 6}}>
          {
              isLoading ? <Spinner /> :
              <FlatList 
                data={dataArr}
                renderItem={memoizedRenderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                />
          }
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen