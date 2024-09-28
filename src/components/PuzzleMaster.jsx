import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Puzzle } from "lucide-react";

const puzzles = [
  { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "echo" },
  { question: "What has keys, but no locks; space, but no room; you can enter, but not go in?", answer: "keyboard" },
  { question: "What gets wet while drying?", answer: "towel" },
  { question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", answer: "map" },
  { question: "What has a head and a tail that are only made of digits?", answer: "coin" },
];

export const PuzzleMaster = ({ addPoints }) => {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [attempts, setAttempts] = useState(3);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * puzzles.length);
    setCurrentPuzzle(randomIndex);
    setAttempts(3);
    setSolved(false);
    setUserAnswer('');
  }, []);

  const handleSubmit = () => {
    if (userAnswer.toLowerCase().trim() === puzzles[currentPuzzle].answer) {
      setSolved(true);
      addPoints(50);
      toast.success("Correct! You earned 50 points!");
    } else {
      setAttempts(prev => prev - 1);
      if (attempts > 1) {
        toast.error(`Incorrect. ${attempts - 1} attempts left.`);
      } else {
        toast.error("Out of attempts. Try again tomorrow!");
      }
    }
    setUserAnswer('');
  };

  const handleNextPuzzle = () => {
    const randomIndex = Math.floor(Math.random() * puzzles.length);
    setCurrentPuzzle(randomIndex);
    setAttempts(3);
    setSolved(false);
    setUserAnswer('');
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
      <CardHeader className="bg-indigo-600 text-white p-6">
        <CardTitle className="text-2xl font-bold flex items-center">
          <Puzzle className="mr-2" />
          Puzzle Master
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-lg font-semibold mb-4">{puzzles[currentPuzzle].question}</p>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Your answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={solved || attempts === 0}
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Attempts left: {attempts}</span>
            {solved ? (
              <Button onClick={handleNextPuzzle} className="bg-green-500 hover:bg-green-600">
                Next Puzzle
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit} 
                disabled={attempts === 0 || userAnswer.trim() === ''}
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};