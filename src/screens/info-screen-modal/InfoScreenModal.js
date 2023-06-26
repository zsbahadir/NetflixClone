//React-Native
import React from 'react';
import {ScrollView, View} from 'react-native';

//Style
import styles from './InfoScreenModal.style';

//Component
import CustomModal from 'src/basic/components/modal/CustomModal';

//Sections
import VideoSection from 'src/screens/info-screen-modal/sections/A.VideoSection';
import TitleAndButton from 'src/screens/info-screen-modal/sections/B.TitleAndButtonsSection';
import DescriptionAndIconsSection from 'src/screens/info-screen-modal/sections/C.DescriptionAndIconsSection';
import BottomSectionTitle from 'src/screens/info-screen-modal/sections/D.BottomSectionTitle';

//Navigate
import {useNavigation} from '@react-navigation/native';

function InfoScreenModal() {
  const navigation = useNavigation();

  return (
    // <View style={styles.modalContainer}>
      <CustomModal animationType="none">
        <VideoSection />
        <ScrollView>
          <TitleAndButton />
          <DescriptionAndIconsSection />
          <BottomSectionTitle />
        </ScrollView>
      </CustomModal>
    // </View>
  );
}

export default InfoScreenModal;
