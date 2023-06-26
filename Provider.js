import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native'
import {StatusBar} from 'react-native';
import Router from './Router';

function Provider() {

    const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar />
        <Router />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default Provider;
