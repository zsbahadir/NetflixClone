//React-native
import React from 'react';
import { View, FlatList } from 'react-native';

//Navigate
import { useNavigation } from '@react-navigation/native';

//Style
import styles from './WhoWatching.style';

//Components
import ImageCard from 'src/basic/components/cards/image-card/ImageCard';

//Hooks
import { useUserList } from 'src/store/hooks/userHook'; 


function WhoWatching() {

const { userList } = useUserList();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList 
      data = {userList}
      keyExtractor = {item => item.userId.toString()}
      renderItem = {({item}) => <ImageCard item = {item} onPress={() => navigation.navigate('HomeScreen', { id: item?.userId })} />}
      numColumns={2}
      />
    </View>
  );
}

export default WhoWatching;
