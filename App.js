import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

import UserContextProvider from './src/contexts/UserContext';
import Routes from './src/route';

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  /*if(!fontsLoaded){
    return <AppLoading/>
  }*/

  return (
    <UserContextProvider>
      <>
        <StatusBar style="light" backgroundColor='#000'  translucent={true}/>
        <Routes/>
      </>
    </UserContextProvider>
  );
};