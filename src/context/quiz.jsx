import { createContext, useReducer } from "react";
import questions from '../data/questions';

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0
}

const quizReducer = (state, action) => {

    switch(action.type) {
        
        case "START_GAME":
            let quizQuestions = null;

            state.questions.forEach(question => {
                if (question.category === action.payload) {
                    quizQuestions = question.questions;
                }
            })

            return {
                ...state,
                questions: quizQuestions,
                gameStage: STAGES[1],
            }

        case "REORDER_QUESTIONS":
            const reorderedQuestions = state.questions.sort(() => {
                return Math.random() - 0.5;
            })
        
            return {
                ...state,
                questions: reorderedQuestions,
            }

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;

            if(!state.questions[nextQuestion]) {
                endGame = true
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage
            }

        default:
            return state
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};