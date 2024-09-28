import React from 'react';
import { Button } from "@/components/ui/button";

export const GameOfTheDay = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Puzzle Master</h2>
      <p className="mb-4">Solve the daily puzzle and earn points!</p>
      <div className="bg-gray-200 w-64 h-64 mx-auto mb-4 flex items-center justify-center">
        <span className="text-gray-500">Game Placeholder</span>
      </div>
      <Button>Start Game</Button>
    </div>
  );
};