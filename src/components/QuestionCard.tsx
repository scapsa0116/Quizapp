import { View, Text, StyleSheet } from "react-native";
import AnswerOption from "../components/AnswerOption";
import { Question } from "../types";

//We add 2 tipes in case of any changes to avoid to change the whole application


type QuestionCard = {
  question: Question,
  
}

export default function QuestionCard ({question}: QuestionCard) {
  const SelectedOption = question.options[0]
 
  return (
    <View style = {styles.questionCard}>
      <Text style ={styles.question}>{question.title}</Text>
      <View style = {{gap: 10}}>
        <AnswerOption option = {question.options[0]} isSelected = {question.options[0] === SelectedOption}/>
        <AnswerOption option = {question.options[1]} isSelected = {question.options[1] === SelectedOption}/> 
        <AnswerOption option = {question.options[2]} isSelected = {question.options[2] === SelectedOption}/>
        <AnswerOption option = {question.options[3]} isSelected = {question.options[3] === SelectedOption}/>
      </View>      
    </View>
  );
}



 const styles = StyleSheet.create({
    questionCard:{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        paddingVertical: 40,
        gap:60,
        shadowColor: "#000",
        marginTop: 150,
        //shadow
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
        fontWeight: '500',
    },

    
})