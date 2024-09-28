import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  }
];

export const DailyQuiz = ({ addPoints }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAnswered) {
        nextQuestion();
      }
    }, 3000); // Change question after 3 seconds

    return () => clearTimeout(timer);
  }, [isAnswered]);

  const handleSubmit = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(prevScore => prevScore + 1);
      addPoints(10);
    }
    setIsAnswered(true);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCurrentQuestion((prevQuestion) => 
      (prevQuestion + 1) % quizQuestions.length
    );
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
  };

  const currentQuizQuestion = quizQuestions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Question {currentQuestion + 1} of {quizQuestions.length}</h2>
      <p className="mb-4 text-lg">{currentQuizQuestion.question}</p>
      <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} className="mb-4 space-y-2">
        {currentQuizQuestion.options.map((option, index) => (
          <div key={index} className={`flex items-center space-x-2 p-2 rounded ${isAnswered ? (option === currentQuizQuestion.correctAnswer ? 'bg-green-100' : selectedAnswer === option ? 'bg-red-100' : '') : 'hover:bg-gray-100'}`}>
            <RadioGroupItem value={option} id={`option-${index}`} disabled={isAnswered} />
            <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
              {option}
            </Label>
            {isAnswered && option === currentQuizQuestion.correctAnswer && (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            )}
            {isAnswered && selectedAnswer === option && option !== currentQuizQuestion.correctAnswer && (
              <AlertCircle className="h-5 w-5 text-red-500" />
            )}
          </div>
        ))}
      </RadioGroup>
      {!isAnswered ? (
        <Button onClick={handleSubmit} disabled={!selectedAnswer}>Submit Answer</Button>
      ) : (
        <p className="text-lg font-semibold">Next question in 3 seconds...</p>
      )}
      <p className="mt-4 text-xl font-bold">Current Score: {score}/{quizQuestions.length}</p>
      <Button onClick={resetQuiz} className="mt-4">Restart Quiz</Button>
    </div>
  );
};