import { View, Text, StyleSheet, SafeAreaView, Pressable,} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import questions from '../questions';
import CustomButton from '../components/CustomButton';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';



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
        <CustomButton 
        title = "Next" 
        onPress = {() => console.warn('I am pressed')}
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







