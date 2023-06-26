//React-native
import React from 'react';
import { View } from 'react-native';

//Styles
import styles from './HeaderRightSection.style';

//Constants
import {colors} from 'src/basic/constants/colors';

//Components
import IconButton from 'src/basic/components/icon/IconButton';
import MiniImageCard from 'src/basic/components/cards/mini-image-card/MiniImageCard';
import { IconList } from 'src/basic/icon-list/IconList';

//Navigate
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

//Hook
import { useUserList } from 'src/store/hooks/userHook';


function HeaderRightSection() {

  const route = useRoute();
  const { id } = route.params;

  const navigation = useNavigation();

  const {userList} = useUserList(id);
  const currentUser = userList?.find(user => user.userId === id);
  console.log('header user', currentUser)


  return (
    <View style={styles.rightSide}>
      <IconButton
        name={IconList.Connected}
        color={colors.smokeWhite}
        size={25}
        onPress={() => console.log('Button connected')}
      />
      <IconButton
        name={IconList.Search}
        color={colors.white}
        size={30}
        onPress={() => console.log('Button pressed')}
      />
      <MiniImageCard
        source={currentUser?.imageSource}
        onPress={() => navigation.navigate('WhoWatching')}
      />
    </View>
  );
}

export default HeaderRightSection;
