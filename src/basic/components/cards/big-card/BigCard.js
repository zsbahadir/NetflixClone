//React-Native
import React, {useState} from 'react';
import {View, Image} from 'react-native';

//Navigate
import {useNavigation} from '@react-navigation/native';

//Styles
import styles from './BigCard.style';

//Linear-Gradient
import LinearGradient from 'react-native-linear-gradient';

//Constants
import {colors} from 'src/basic/constants/colors';

//Basic Components
import Button from 'src/basic/components/button/Button';
import TextArea from 'src/basic/components/text/TextArea';
import {IconList, IconPosition} from 'src/basic/icon-list/IconList';

//Hooks
import {useGetMovieData} from 'src/store/hooks/getMovieData';
import {useCategories} from 'src/store/hooks/getCategories';

function BigCard() {

  //for getting genres name
  const { data: categories } = useCategories();

  const getGenreName = genreId => {
    if (categories) {
      const genre = categories.find(category => category.id === genreId);
      return genre ? genre.name : '';
    }
    return '';
  };

    // for getting movie Data with hook
    const {data: movieData} = useGetMovieData();

  //for getting random image
  const getRandomImage = () => {
    if (movieData && movieData.length > 0) {
      const randomIndex = Math.floor(Math.random() * movieData.length);
      const randomMovie = movieData[randomIndex];
      const posterPath = randomMovie.poster_path;
      const genreIds = randomMovie.genre_ids;
      const genreNames = genreIds.map(genreId => getGenreName(genreId));   //genres
      return {posterPath, genreIds, genreNames};
    }
    return {posterPath: null, genreIds: null, genreNames: null};
  };

  const randomImage = getRandomImage(); //this is random Image

  const imageSource = `https://image.tmdb.org/t/p/w500${randomImage.posterPath}`;

  const genreNames = randomImage.genreNames;

  //Icon change when listed
  const [iconName, setIconName] = useState(IconList.Plus);

  const navigation = useNavigation();

  const handlePlusIcon = () => {
    iconName === IconList.Plus
      ? setIconName(IconList.Check)
      : setIconName(IconList.Plus);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}>
        <Image source={{uri: imageSource}} style={styles.imageContainer} />
      </LinearGradient>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <TextArea type="bigCardText">{genreNames?.[0]}</TextArea>
          <TextArea type="bigCardText">{genreNames?.[1]}</TextArea>
          <TextArea type="bigCardText">{genreNames?.[2]}</TextArea>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            type="playSmButton"
            title="Play"
            onPress={() => navigation.navigate('Login')}
            //icon props
            name={IconList.Play}
            color={colors.black}
            size={35}
            iconPosition={IconPosition.Before}
          />
          <Button
            type="grayButton"
            title="My List"
            onPress={handlePlusIcon}
            //button's icon props
            name={iconName}
            color={colors.white}
            size={35}
            iconPosition={IconPosition.Before}
          />
        </View>
      </View>
    </View>
  );
}

export default BigCard;
