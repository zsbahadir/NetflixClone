//React-Native
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

//React-Query
import { useMutation } from 'react-query';

//Constants
import { colors } from 'src/basic/constants/colors';
import { IconList } from 'src/basic/icon-list/IconList';

//Components
import IconButton from 'src/basic/components/icon/IconButton';

//Navigate
import { useRoute } from '@react-navigation/native';

//Hook
import { useMovieDetail } from 'src/store/hooks/getMovieDetail';
import { useGetTvDetail } from 'src/store/hooks/getTvDetail';

//Hooks
import { addMyList } from 'src/store/hooks/addMyList';


function DescriptionAndIconsSection() {

  const [detailData, setDetailData] = useState(null);
  const [iconName, setIconName] = useState(IconList.Plus);


  const route = useRoute();
  const { id  } = route.params;

  const { data: movieDetail } = useMovieDetail(id);
  const { data: tvDetail } = useGetTvDetail(id);

const addMyListMutation = useMutation(addMyList);

  const handlePlusIcon = () => {
    const listId = route.params.listId;
    addMyListMutation.mutate(listId)
    iconName === IconList.Plus ?  setIconName(IconList.Check) : setIconName(IconList.Plus)
    }


  useEffect(() => {
    if (tvDetail) {
      setDetailData(tvDetail);
    } else if (movieDetail) {
      setDetailData(movieDetail);
    }
  }, [movieDetail, tvDetail]);



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.descriptionText}>
        {detailData?.overview}
        </Text>
        <Text style={styles.castText}>
          Cast: Iain Armitage, Zoe Perry, lance Barber ...daha fazla
          bilgi
        </Text>
        <Text style={styles.productionText}>
          Producer: Chuck Lorre, Bill Prady, Steve Molaro
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <IconButton name= {iconName} size= {40} color= {colors.white} subtitle= 'My List' onPress= {handlePlusIcon} />
        <IconButton name= {IconList.HandOkey} size= {35} color= {colors.white} subtitle= 'Rate' />
        <IconButton name= {IconList.Share} size= {30} color= {colors.white} transform= {[{rotateZ: '-45deg'}]} subtitle= 'Share'/>
      </View>
    </View>
  ); 
}

export default DescriptionAndIconsSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 10,
    // borderColor: 'red',
    // borderWidth: 3,
  },
  descriptionText: {
    color: 'white',
    marginBottom: 10
  },
  castText: {
    color: 'gray',

  },
  productionText: {
    color: 'gray',
    marginBottom: 10
  },
  iconsContainer: {
    flexDirection: 'row',
    // borderColor: 'red',
    // borderWidth: 3,
    width: Dimensions.get('window').width / 1.5,
    justifyContent: 'space-around',
    alignItems: 'baseline'
  },
});
