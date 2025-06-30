import { View, Text, StyleSheet, SafeAreaView, Pressable,} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import questions from '../questions';


const question = questions[0]

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.page}>
   <View style={styles.container}>

        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* Body */}
        <View>
	        <QuestionCard question = {question}/>
	        <Text style={styles.timer}>20 sec</Text>
        </View>


        {/* Footer */}
        
        
    
       
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







