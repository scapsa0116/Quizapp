import { View, Text, StyleSheet, Pressable } from "react-native"
import { useQuizContext } from "../providers/QuizProvider";

type AnswerOption = {
    option: string;
   
}

export default function AnswerOption({option}: AnswerOption){
    const {selectedOption, setSelectedOption} = useQuizContext()
    const isSelected = option === selectedOption;
   
   

    return(
        <Pressable onPress={() => setSelectedOption(option)}>
            
        <View style = {[
            styles.container, 
            isSelected && {backgroundColor: 'lightgreen'}]}>
            <Text>{option}</Text>
        </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
container:{
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 20,
    borderRadius: 100
}

})