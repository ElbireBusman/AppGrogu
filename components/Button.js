import React from 'react';
import { StyleSheet, View, Pressable, Text ,Image} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function Button({ label, theme, onPress }) {
    if (theme === "primary") {
      return (
        <View style={[styles.buttonContainer]}>
          <Pressable
            style={[styles.button, { backgroundColor: "#fff" }]}
            onPress={onPress}
          >
            <Image source = {require('../assets/images/groguIcon.png')}
            style={styles.buttonIcon}
            />
            
            <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
          </Pressable>
        </View>
      );
    }else if(theme === "reset"){
        return(
            <View style={[styles.buttonContainerR]}>
          <Pressable
            style={[styles.button, { backgroundColor: "#25292e" }]}
            onPress={onPress}
          >
            <Image source = {require('../assets/images/mando.png')}
            style={styles.buttonIconR}
            />
            
            <Text style={[styles.buttonLabel, { color: "#fff" }]}>{label}</Text>
          </Pressable>
        </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
              <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
          </View>
      );
    }

const styles = StyleSheet.create({
  buttonContainer: {
    width: 220,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  buttonContainerR: {
    width: 170,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    width: 45, 
    height: 45, 
    resizeMode: 'contain', // Ajusta el modo de redimensionamiento según sea necesario
    marginRight: 7,
  },
  buttonIconR: {
    width: 45, 
    height: 45, 
    resizeMode: 'contain', // Ajusta el modo de redimensionamiento según sea necesario
    
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
