import { View, Pressable, Text, StyleSheet, PressableProps} from "react-native"

type CustomButton = {
  title: string;
  rightIcon?: React.ReactNode;
  onPress: () => void;
  onLongPress: () => void;
} & PressableProps;

export default function CustomButton ({title, rightIcon, ...PressibleProps}: CustomButton){

    return(
        <View>
          <Pressable style={styles.button} {...PressibleProps}>
          <Text style={styles.buttonText}>{title}</Text>
          <View style={styles.rightIcon}>{rightIcon}</View>
  
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
rightIcon: {
  position: 'absolute',
  right: 20,
},



})