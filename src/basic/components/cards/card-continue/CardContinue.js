//React-native
import React from 'react';
import { View, Image } from 'react-native';

//Style
import styles from './CardContinue.style'

//Constants
import { colors } from 'src/basic/constants/colors';
import { IconList } from 'src/basic/icon-list/IconList';


//Components
import IconButton from 'src/basic/components/icon/IconButton';
import EpisodeNum from 'src/basic/components/episode-num/EpisodeNum';
import RedLine from 'src/basic/components/red-line/RedLine';

//Navigate
import { useNavigation } from '@react-navigation/native';


function CardContinue( {item, onPress} ) {


  const navigation = useNavigation();
  
  const imageSource = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: imageSource }}
      />
      <View style={styles.icon}>
      <IconButton name={IconList.PlayCircle} color={colors.smokeWhite} size={60}  onPress={() => console.log('Button 1 connected')}/>
      </View>

      <View style={styles.textContainer}>
        <EpisodeNum/>
      </View>
      <View style={styles.redLine}>
        <RedLine />
      </View>

      <View style={styles.childContainer}>
        <View style={styles.leftSide}>
          <IconButton name={IconList.Info} color={colors.smokeWhite} size={25} onPress={onPress}/>
        </View>
        <View style={styles.rightSide}>
          <IconButton name={IconList.DotsVertical} color={colors.smokeWhite} size={25} onPress={() => console.log('Button 3 connected')} />
        </View>
      </View>
    </View>
  );
}

export default CardContinue;
