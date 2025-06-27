import { View, Text, StyleSheet } from "react-native";
import AnswerOption from "../components/AnswerOption";



export default function QuestionCard() {
  return (
    <View style = {styles.questionCard}>
      <Text style ={styles.question}>What is React native?</Text>
      <View style = {{gap: 10}}>
        <AnswerOption/>
        <AnswerOption/>
        <AnswerOption/>
        <AnswerOption/>

      </View>

      
    </View>
  );
}



 const styles= StyleSheet.create({
    questionCard:{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        paddingVertical: 40,
        gap:20,
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 5,

    },
    question:{
        fontSize: 24,
        fontWeight: '500'

    }
})