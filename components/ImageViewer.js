import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource }) {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
      },
      
    image: {
        width: 420,
        height: 770,
        borderRadius: 18,
      },
});
