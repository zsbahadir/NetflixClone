//React-Native
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

//Components
import TextArea from 'src/basic/components/text/TextArea';
import MiniCard from 'src/basic/components/cards/mini-card/MiniCard';
import TopTen from 'src/basic/components/top-ten/TopTen';

//Hook
import  { useTopRatedTvSeries }  from 'src/store/hooks/topRatedTvSeries';

//Navigate
import { useNavigation } from '@react-navigation/native';

function MiniCardSection({title}) {

const { data: topTvList } = useTopRatedTvSeries();

  const navigation = useNavigation();


  return (
    <View>
          <TextArea type="title">{title}</TextArea>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal>
              {topTvList?.map((item) => (
                <View>
                  <MiniCard
                    key={item.id}
                    item={item}
                    source={item.poster_path}
                    onPress= {()=> navigation.navigate('InfoScreenModal', {id: item.id })}
                  />
                  {item.popularity > 150.0 && (
                    <View style={styles.topTenContainer}>
                      <TopTen />
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topTenContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});

export default MiniCardSection;
