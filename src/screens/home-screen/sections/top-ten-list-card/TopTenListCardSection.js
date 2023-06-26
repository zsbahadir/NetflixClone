//React-Native
import React from 'react';
import { ScrollView, View } from 'react-native';

//Style
import styles from './TopTenListCardSection.style';

//Basic Components
import TextArea from 'src/basic/components/text/TextArea';
import BigNumberCard from 'src/basic/components/cards/big-numbers/BigNumberCard';

//Hooks
import { useTopRatedTvSeries } from 'src/store/hooks/topRatedTvSeries';

function TopTenListCardSection() {

  const { data: topTvList } = useTopRatedTvSeries();

  return (
    <View>
      <TextArea type="title">Top 10 Movies in the UK Today</TextArea>
      <View style={styles.container}>
        <ScrollView horizontal>
          {topTvList?.slice(0, 10).map(item => (
            <View>
              <BigNumberCard
                // key={item.id}
                item={item}
                source={item.poster_path}
                onPress={() => navigation.navigate('InfoScreenModal')}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default TopTenListCardSection;
