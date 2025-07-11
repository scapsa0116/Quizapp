import { View, Text, StyleSheet } from "react-native";
import AnswerOption from "../components/AnswerOption";
import { Question } from "../types";
import Card from "./Card";

//We add 2 tipes in case of any changes to avoid to change the whole application


type QuestionCard = {
  question: Question,

  
}

export default function QuestionCard ({question}: QuestionCard) {
 
  
 
 
  return (
    
      <Card title = {question.title}>
      <View style = {{gap: 10}}>
        {question.options.map((option) => (
          <AnswerOption key={option} option = {option}/>))}
      </View> 
      </Card>     
   
  );
}



 