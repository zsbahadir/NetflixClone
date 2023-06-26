//React-Native
import React from 'react';
import { View, ScrollView } from 'react-native';

//Components
import TextArea from 'src/basic/components/text/TextArea';
import CardContinue from 'src/basic/components/cards/card-continue/CardContinue';

//Navigate 
import { useNavigation } from '@react-navigation/native';

//Hook
import { useGetMovieData } from 'src/store/hooks/getMovieData';

function CardContinueSection({title}) {
  
  const {data: movieData} = useGetMovieData();
  const navigation = useNavigation();


  const onMovieSelect = (id) => {
    navigation.navigate('InfoScreenModal', { id })
  };
 
  return (
    <View>
      <TextArea type="title">{title}</TextArea>
      <ScrollView horizontal>
        {movieData?.map(item => (
          <CardContinue
            key={item.id}
            item={item}
            source={item.poster_path}
            onPress={() => onMovieSelect(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default CardContinueSection;
