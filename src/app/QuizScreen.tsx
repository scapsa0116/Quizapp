import { View, Text, StyleSheet, SafeAreaView, Pressable,} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import CustomButton from '../components/CustomButton';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import Card from '../components/Card';
import { useQuizContext } from '../providers/QuizProvider';
import { useEffect, useState, useRef } from 'react';
import { useTimer } from '../hooks/useTimer';








  


export default function QuizScreen() {
  const { question, questionIndex, onNext, score, totalQuestions, bestScore } = useQuizContext()


  const { time, startTimer, clearTimer } = useTimer(20);

  useEffect(() => {
    startTimer();

    return () => {
      clearTimer();
    };
  }, [question]);

  useEffect(() => {
    if (time <= 0) {
      onNext();
    }
  }, [time]);

  

  

  return (
    <SafeAreaView style={styles.page}>
   <View style={styles.container}>

        <View>
          <Text style={styles.title}>Question {questionIndex +1}/{totalQuestions}</Text>
        </View>

        {/* Body */}
        {question ? (
        <View>
	          <QuestionCard question = {question}/>
	          <Text style={styles.timer}>{time}</Text>
        </View>) : (
          <Card title = "WellDone!">
            <Text>"Correct Answer: {score}/{totalQuestions}"</Text>)
            <Text>Best score: {bestScore}</Text>
          </Card>
        )}




        {/* Footer */}
        <CustomButton 
        title = "Next" 
        onPress = {onNext}
        onLongPress = {() => console.warn('ON LONG PRESS')}
        rightIcon = {<FontAwesome6 name="arrow-right-long" size={16} color="white"
        />}/>
        
        
    
       
    </View>
    </SafeAreaView>
  )
}
  
    
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FDFEF4',
   
  
    
  },
  container: {
        backgroundColor: '#FDFEF4',
        justifyContent: 'center',
        padding: 20, 
        
  },
  title: {
    textAlign: 'center',
    color: '#005055',
  },
  timer: {
    marginVertical: 15,
    textAlign: 'center',
    color: '#005055',
    fontWeight: 'bold',
  },

  
});







