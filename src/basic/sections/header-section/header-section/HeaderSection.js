//React-native
import React from 'react';
import { View } from 'react-native';

//Styles
import styles from './HeaderSection.style';

//Components
import TextArea from 'src/basic/components/text/TextArea';

//Route-Navigate
import { useRoute } from '@react-navigation/native';

//Hook
import { useUserList } from 'src/store/hooks/userHook';


function HeaderSection() {

  const route = useRoute();
  const { id } = route.params;

  const { userList } = useUserList(id)
  const currentUser = userList?.find(user => user.userId === id);

  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <TextArea type="textOwnerName">{ currentUser?.subtitle}</TextArea>
      </View>
    </View>
  );
}

export default HeaderSection;
