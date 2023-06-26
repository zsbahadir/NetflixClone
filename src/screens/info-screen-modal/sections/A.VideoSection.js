//React-Native
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

//Constants
import { colors } from 'src/basic/constants/colors';
import { IconList } from 'src/basic/icon-list/IconList';

//Components
import IconButton from 'src/basic/components/icon/IconButton';
import RedLine from 'src/basic/components/red-line/RedLine';
import VideoCustom from 'src/basic/components/video/VideoCustom'

//Navigate
import { useNavigation, useRoute } from '@react-navigation/native';

//Hooks
import { useMovieVideo } from 'src/store/hooks/getMovieVideo';
import { useTvVideo } from 'src/store/hooks/getTvVideo';

function VideoSection() {
  const navigation = useNavigation();

  const route = useRoute();
  const { id } = route.params;

  //const { data: movieVideo } = useMovieVideo(id);
  const { data: tvVideo } = useTvVideo(id);

  return (
    <View>
      <View style={styles.imageContainer}>
        <VideoCustom
        source={{ uri: tvVideo}}
         resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.redLine}>
         <RedLine/>
         </View>
      </View>
      <View style={styles.iconContainer}>
        <IconButton
          name={IconList.Connected}
          color={colors.smokeWhite}
          size={25}
          onPress={() => console.log('Button connected')}
          backgroundColor={colors.darkGray}
        />
        <IconButton
          style={styles.icon}
          name={IconList.Close}
          size={24}
          color={colors.white}
          onPress={() => navigation.goBack()}
          backgroundColor={colors.darkGray}

        />
      </View>
      <View style={styles.iconMute}>
         <IconButton
          name={IconList.Mute}
          size={24}
          color={colors.white}
          backgroundColor={colors.darkGray}
        />
        </View>
    </View>
  );
}

export default VideoSection;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  imageContainer: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,    
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0,
    top: 0,
    margin: 10,
  },
  icon: {
    marginLeft: 6,
  },
  iconMute: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 10,
    top: 170,
    // margin: 150,
  },
  redLine: {
    position: 'absolute',
    marginTop: 182,
    width: 150,
  },
});
