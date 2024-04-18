import { View } from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import splashAluraMed from '../../assets/splash-aluramed.json'
import Onboarding from './../Onboarding/index';

export default function SplashScreen({ navigation }){

  function animacaoFinalizada(){
    //Dá um reset na Stack de Telas e elege a Tela de Onbording com a
    //primeira da nova Stack
    navigation.reset({
      index: 0,
      routes: [{ name: "Onboarding" }]
    })
    // navigation.navigate("Onboarding");
  }

  return (
    <View style={styles.container}>
      <LottieView 
        source={splashAluraMed}
        loop={false}
        autoPlay={true}
        onAnimationFinish={animacaoFinalizada}
      />
    </View>
  )
}