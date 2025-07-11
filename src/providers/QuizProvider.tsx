import { View, Text } from "react-native"
import { createContext, useContext } from "react"
import {PropsWithChildren, useState } from "react"
import questions from "../questions"
import { Question } from "../types"
 
type QuizContext ={
    question?: Question;
    questionIndex: number;
    onNext:() => void;
    selectedOption?: string;
    setSelectedOption: (newOption: string) => void;
    score: number;
    totalQuestions: number
}

const QuizContext = createContext<QuizContext>({
    questionIndex: 0,
    onNext: () => {},
    setSelectedOption: () => {},
    score: 0,
    totalQuestions: 0,
    
})
export default function QuizProvider ({ children }: PropsWithChildren){

  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];
  const [selectedOption, setSelectedOption] = useState<string | undefined>()
  const [score, setScore] = useState(0)
  const isFinished = questionIndex > questions.length;
  const restart = () => {
    setQuestionIndex(0)
    setSelectedOption('')
    setScore(0)
  }

    const onNext =() => {
        if(isFinished){
            restart();
            return;

        }
        if (selectedOption === question?.correctAnswer){
            setScore((currScore) => currScore + 1)
        }
    setQuestionIndex((currValue) => currValue +1)
  }

  
  return(
        <QuizContext.Provider value ={{
            question, 
            questionIndex, 
            onNext, 
            selectedOption, 
            setSelectedOption,
            score,
            totalQuestions: questions.length
        }}
        >
            {children}
        </QuizContext.Provider>
    )
}

export const useQuizContext = () => useContext(QuizContext)
