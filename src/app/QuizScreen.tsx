import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import QuestionCard from '../components/QuestionCard';

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* Body */}
        <View>
	        <QuestionCard />
	        <Text style={styles.timer}>20 sec</Text>
        </View>


        {/* Footer */}
        <View>
          <Text>Next</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FDFEF4',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
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

  button:{
      backgroundColor:  "#005055",
      padding:20,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center'
    },

    buttonText:{
        color: 'white',
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: 1.5,
    }
});