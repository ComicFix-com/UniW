import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const GameOfTheDay = ({ addPoints }) => {
  const [gameState, setGameState] = useState('idle');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    let timer;
    if (gameState === 'playing') {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setGameState('finished');
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(30);
  };

  const handleClick = () => {
    if (gameState === 'playing') {
      setScore(prevScore => prevScore + 1);
    }
  };

  const finishGame = () => {
    setGameState('finished');
    addPoints(score);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Clicker Challenge</h2>
      <p className="mb-4">Click as fast as you can in 30 seconds!</p>
      <div className="bg-indigo-100 w-64 h-64 mx-auto mb-4 flex items-center justify-center rounded-lg shadow-inner">
        {gameState === 'idle' && (
          <Button onClick={startGame}>Start Game</Button>
        )}
        {gameState === 'playing' && (
          <Button onClick={handleClick} className="w-full h-full text-4xl font-bold">
            {score}
          </Button>
        )}
        {gameState === 'finished' && (
          <div>
            <p className="text-2xl font-bold mb-2">Game Over!</p>
            <p className="text-xl">Your score: {score}</p>
          </div>
        )}
      </div>
      {gameState === 'playing' && (
        <div className="mb-4">
          <Progress value={(timeLeft / 30) * 100} className="w-full" />
          <p className="text-sm text-gray-600 mt-1">Time left: {timeLeft}s</p>
        </div>
      )}
      {gameState === 'finished' && (
        <Button onClick={startGame}>Play Again</Button>
      )}
    </div>
  );
};