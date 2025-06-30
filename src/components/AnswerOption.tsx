import { View, Text, StyleSheet, Pressable } from "react-native"

type AnswerOption = {
    option: string;
    isSelected: boolean;
    onPress: () => void;
}

export default function AnswerOption({option, isSelected, onPress}: AnswerOption){
    console.log(onPress)
   

    return(
        <Pressable onPress={onPress}>
            
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