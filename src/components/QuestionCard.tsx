import { View, Text, StyleSheet } from "react-native";
import AnswerOption from "../components/AnswerOption";



export default function QuestionCard (props) {
  console.log(props)
  return (
    <View style = {styles.questionCard}>
      <Text style ={styles.question}>{props.question.title}</Text>
      <View style = {{gap: 10}}>
        <AnswerOption option = {props.question.options[0]}/>
        <AnswerOption option = {props.question.options[1]}/> 
        <AnswerOption option = {props.question.options[2]}/>
        <AnswerOption option = {props.question.options[3]}/>
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