//React
import React from 'react';

//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import GlobalStatus from './src/store/apis/globalStatus';

//Constants
import { colors } from './src/basic/constants/colors';
import { IconList } from './src/basic/icon-list/IconList';

//Sections
import HeaderLogoSection from './src/screens/login-screen/section/header/HeaderLogoSection';
import HeaderSection from './src/basic/sections/header-section/header-section/HeaderSection';

//Basic Components
import CustomIcon from './src/basic/components/icon/CustomIcon';
import HeaderRightSection from './src/basic/sections/header-section/header-right-section/HeaderRightSection';

//Pages
import LoginScreen from './src/screens/login-screen/LoginScreen';
import HomeScreen from './src/screens/home-screen/HomeScreen';
import WhoWatching from './src/screens/who-watching-screen/WhoWatching';
import InfoScreenModal from './src/screens/info-screen-modal/InfoScreenModal';

import MyListScreen from './src/screens/my-list-screen/MyListScreen';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.darkGray,
          opacity: 0.6,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.lightGray,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ( { focused } ) => (
            <CustomIcon 
            name={IconList.Home} 
            size={30} 
            color={ focused ? colors.white : colors.black} />
          ),
        }}
      />
      <Tab.Screen
        name="My List"
        component={MyListScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomIcon 
            name={IconList.PlayBox} 
            size={30} 
            color={ focused ? colors.white : colors.black} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={LoginScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomIcon 
            name = {IconList.Downloads} 
            size = {30} 
            color = {focused ? colors.white : colors.black} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const backgroundStyle = {
  backgroundColor: colors.black,
};

const Stack = createNativeStackNavigator();

function Router() {
  
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: '',
            headerBackground: () => <HeaderLogoSection />,
          }}
        />
        <Stack.Screen
          name="WhoWatching"
          component={WhoWatching}
          options={{
            title: `Who's watching?`,
            headerStyle: backgroundStyle,
            headerTintColor: colors.white,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeTabs}
          options={{
            title: '',
            headerBackground: () => <HeaderSection />,
            headerLeft: () => '',
            headerRight: () => <HeaderRightSection />,
          }}
        />
        <Stack.Screen
          name="InfoScreenModal"
          component={InfoScreenModal}
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="MyList"
          component={MyListScreen}
      
         
        />
       
      </Stack.Navigator>
  );
}

export default Router;
