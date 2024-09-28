import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";

// Generate 5000 quiz questions
const generateQuizQuestions = () => {
  const questions = [];
  for (let i = 1; i <= 5000; i++) {
    questions.push({
      question: `Question ${i} of 5000: What is ${i} + ${i}?`,
      options: [`${i * 2}`, `${i * 2 - 1}`, `${i * 2 + 1}`, `${i * 2 + 2}`],
      correctAnswer: `${i * 2}`
    });
  }
  return questions;
};

const quizQuestions = generateQuizQuestions();

export const DailyQuiz = ({ addPoints }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Get the current day of the year (1-366)
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);

    // Set the current question based on the day of the year
    setCurrentQuestion(day % 5000);
  }, []);

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
      (prevQuestion + 1) % 5000
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
      <h2 className="text-2xl font-semibold mb-4">Question {currentQuestion + 1} of 5000</h2>
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
      <p className="mt-4 text-xl font-bold">Current Score: {score}/5000</p>
      <Button onClick={resetQuiz} className="mt-4">Restart Quiz</Button>
    </div>
  );
};