import { View, Text, StyleSheet } from "react-native"
import QuestionCard from "../components/QuestionCard"


export default function QuizScreen() {
  return (
    
    <View 
    style={styles.container}
    >
      
      <QuestionCard/>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        backgroundColor: '#FDFEF4',
        justifyContent:'center',
        padding: 20,
        alignItems: 'center',
        gap:10,
        marginTop: 100, 

      }
})