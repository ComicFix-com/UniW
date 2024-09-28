import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Rewards = () => {
  const userPoints = 750;
  const nextRewardThreshold = 1000;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Rewards</h2>
      <div className="mb-4">
        <p className="mb-2">Total Points: {userPoints}</p>
        <Progress value={(userPoints / nextRewardThreshold) * 100} className="w-full" />
        <p className="text-sm text-gray-500 mt-1">{nextRewardThreshold - userPoints} points until next reward</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Badges Earned</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Quick Thinker</Badge>
          <Badge variant="secondary">Puzzle Master</Badge>
          <Badge variant="secondary">Quiz Whiz</Badge>
        </div>
      </div>
    </div>
  );
};