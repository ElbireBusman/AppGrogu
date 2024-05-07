import React, {useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , Image} from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/images/background.png');
const GifImage = require('./assets/images/grogu.gif');

export default function App() {

  const [counter, setCounter] = useState(0);
  const [showGif, setShowGif] = useState(false);
  const [showResetButton, setShowResetButton] = useState(false);
  const [showCounter, setShowCounter]=useState(false);

  useEffect(() => {
    if (counter >= 10) {
      setShowGif(true);
      setShowResetButton(true);
    }else{
      setShowGif(false);
      setShowResetButton(false);
    }
  }, [counter]);

  const handleButtonPress = () => {
    // Incrementar el contador en 1 cada vez que se presiona el botón
    setCounter(counter + 1);
  };

  const handleResetButtonPress = () => {
    setCounter(0);
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label={`Give Grogu food (${counter})`} onPress={handleButtonPress} />
        {showResetButton && (<Button theme="reset" label="Reset food :(" onPress={handleResetButtonPress}/>)}
      </View>
      {showGif && (
        <View style={styles.gifContainer}>
          <Image source={GifImage} style={styles.gifImage} />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gifContainer: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  gifImage: {
    width: 250, // Ajusta el ancho del GIF según sea necesario
    height: 200, // Ajusta el alto del GIF según sea necesario
  },
});
