//React-Native
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

//Constants
import { colors } from 'src/basic/constants/colors';
import { IconList}  from 'src/basic/icon-list/IconList';

//Components
import { IconPosition } from 'src/basic/icon-list/IconList';
import YearCircleCard from 'src/basic/components/cards/year-circle-card/YearCircleCard';
import Button from 'src/basic/components/button/Button';

//Navigate
import { useRoute } from '@react-navigation/native';

//Hook
import { useMovieDetail } from 'src/store/hooks/getMovieDetail';
import { useGetTvDetail } from 'src/store/hooks/getTvDetail';


function TitleAndButtonsSection() {

  const route = useRoute();
  const { id  } = route.params;

  const { data: movieDetail } = useMovieDetail(id);
  const { data: tvDetail } = useGetTvDetail(id);

  //tersini yazinca yanlis id aliyor Allah Allah
  const detailData = tvDetail || movieDetail;

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>{ detailData?.original_title || detailData?.name }</Text>
        <View style={styles.childContainer}>
          <Text style={styles.percentage}>%97 esleme</Text>
          <Text style={{color: 'white'}}>{ new Date(detailData?.release_date).getFullYear() || new Date(detailData?.first_air_date).getFullYear() }</Text>
          <YearCircleCard year='15' />
          <Text style={{color: 'white'}}>{ 
          detailData?.runtime && `${(detailData?.runtime)} min` || 
          detailData?.number_of_seasons && `${detailData?.number_of_seasons} seasons` }</Text>
          <Text
            style={styles.hdText}>
            HD
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          type="playLgButton"
          title="Play"
          //icon part
          name={IconList.Play}
          size={24}
          color={colors.black}
          iconPosition={IconPosition.Before}
        />
        <Button
          type="downloadGrayButton"
          title="Download"
          //icon part
          name={IconList.Download}
          size={24}
          color={colors.white}
          iconPosition={IconPosition.Before}
        />
      </View>
    </View>
  );
}

export default TitleAndButtonsSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: 'yellow',
    // borderWidth: 3,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    height: Dimensions.get('window').height / 14,
    width: Dimensions.get('window').width / 1.6,
  },
  textTitle: {
    color: colors.white,
    fontWeight: 900,
    fontSize: 16,
  },
  childContainer: {
    flex: 1,
    flexDirection: 'row',
    width: 240,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 5,
    // borderColor: 'blue',
    // borderWidth: 3,
  },
  percentage: {
    color: colors.green,
  },
  hdText: {
    color: 'white',
    fontSize: 10,
    borderColor: 'white',
    borderWidth: 0.5,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: Dimensions.get('window').height / 11,
    // borderColor: 'green',
    // borderWidth: 3,
    marginHorizontal: 10,
  },
});
