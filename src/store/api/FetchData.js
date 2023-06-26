import React, {useState, useEffect} from 'react';
import {View, Button, FlatList, Text, Image} from 'react-native';
import getData from '../hooks/getMovieData';
import MiniCard from '../../basic/components/cards/mini-card/MiniCard';
import DropDown from '../../basic/components/dropdown/DropDown';
import CategoriesModal from '../../basic/components/modal';

import  { useTopRatedTvSeries } from '../hooks/topRatedTvSeries'
import BigCard from '../../basic/components/cards/big-card/BigCard';


function FetchData() {
  const [movieList, setMovieList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const { data: topTvList } = useTopRatedTvSeries();




  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getData();
  //       setMovieList(data.results);
  //       // console.log(data.results)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

 

  // const renderItem = (topTvList.map(({item}, index) => {
  //   return <Text key={index}> {item.name} </Text>
  // }))
  const options = ['Option 1', 'Option 2', 'Option 3'];

 

  return (
    <View>
      {/* <FlatList data={topTvList} renderItem={renderItem} /> */}

      <Button title="Fetch Data" onPress={getData} />

      <DropDown options={options}/>

      <View>
      <Button title="Open Modal" onPress={openModal} />
      <CategoriesModal visible={modalVisible} onClose={closeModal}>
        <Text>This is the content of the modal.</Text>
      </CategoriesModal>
    </View>
   


    </View>
  );
}

export default FetchData;

