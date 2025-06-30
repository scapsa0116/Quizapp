import { View, Pressable, Text, StyleSheet} from "react-native"
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';



export default function CustomButton (){
    return(
        <View>
<Pressable onPress={() => console.warn('Pressed')} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
  {/* <FontAwesome6
    name="arrow-right-long"
    size={16}
    color="white"
    style={styles.buttonIcon}
  /> */}
        </Pressable>

</View>
    )
}

const styles = StyleSheet.create({
    button: {
  backgroundColor: '#005055',
  padding: 20,
  borderRadius: 100,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 30
},
buttonText: {
  color: 'white',
  fontWeight: '500',
  fontSize: 16,
  letterSpacing: 1.5,
},
buttonIcon: {
  position: 'absolute',
  right: 20,
},



})