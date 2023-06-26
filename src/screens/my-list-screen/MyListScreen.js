

//!!!!! Development Continues !!!!!

//React-native
import React from 'react';
import { View, Text, FlatList } from 'react-native';

//Navigate
import { useNavigation } from '@react-navigation/native';

//Style
import styles from './MyListScreen.style';

//Page Components
//import MiniCard from './Components/ImageCard';



function MyListScreen() {


  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={{color: 'white'}}>My List</Text>
      {/* <FlatList 
      data = {persons}
      keyExtractor = {item => item.id.toString()}
      renderItem = {({item}) => <MiniCard item = {item} onPress={() => navigation.navigate('HomeScreen')} />}
      numColumns={2}
      /> */}
    </View>
  );
}

export default MyListScreen;
