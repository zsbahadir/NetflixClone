//React-native
import React from 'react';
import {View, ScrollView} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

//styles
import styles from './HomeScreen.style';

//Page Components
import BigCard from 'src/basic/components/cards/big-card/BigCard';

//Sections
import TopButtons from 'src/screens/home-screen/sections/top-buttons/TopButtons';
import MiniCardSection from 'src/screens/home-screen/sections/mini-cards/MiniCardSection';
import CardContinueSection from 'src/screens/home-screen/sections/card-continue/CardContinueSection';
import TopTenListCardSection from 'src/screens/home-screen/sections/top-ten-list-card/TopTenListCardSection';

import { useRoute } from '@react-navigation/native';

import { useUserList } from '../../store/hooks/userHook';



function HomeScreen() {

  // const route = useRoute();
  // const { id } = route.params;

  return (
    // <SafeAreaView >
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topButtonsContainer}>
          <TopButtons />
        </View>
        <View style={styles.bigCardContainer}>
          <BigCard />
        </View>

        <View>
          <CardContinueSection
          title = "Continue Watching"
          />
        </View>
        <View>
          <MiniCardSection
          title = "Top Rated TV Series"
          />
        </View>
        <View>
          <TopTenListCardSection />
        </View>
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
}

export default HomeScreen;
