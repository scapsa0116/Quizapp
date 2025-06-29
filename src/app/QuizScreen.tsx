import { View, Text, StyleSheet, SafeAreaView, Pressable,} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
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
        <Pressable onPress={() => console.warn('Pressed')} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
  <FontAwesome6
    name="arrow-right-long"
    size={16}
    color="white"
    style={styles.buttonIcon}
  />
        </Pressable>
        
    
       
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

  button: {
  backgroundColor: '#005055',
  padding: 20,
  borderRadius: 100,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 30
},
buttonText: {
  color: 'white',
  fontWeight: '500',
  fontSize: 16,
  letterSpacing: 1.5,
},
buttonIcon: {
  position: 'absolute',
  right: 20,
},
});







