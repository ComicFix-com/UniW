import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Gift } from "lucide-react";

export const Rewards = ({ points }) => {
  const nextRewardThreshold = 1000;
  const progress = (points / nextRewardThreshold) * 100;

  const badges = [
    { name: "Quick Thinker", icon: "🧠", unlocked: points >= 100 },
    { name: "Puzzle Master", icon: "🧩", unlocked: points >= 500 },
    { name: "Quiz Whiz", icon: "📚", unlocked: points >= 1000 },
  ];

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Your Points</h3>
        <div className="flex items-center mb-2">
          <Gift className="mr-2 text-indigo-500" />
          <span className="text-2xl font-bold">{points}</span>
        </div>
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-gray-500 mt-1">{nextRewardThreshold - points} points until next reward</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Badges Earned</h3>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant={badge.unlocked ? "default" : "secondary"}
              className={`text-lg py-1 px-3 ${badge.unlocked ? 'bg-indigo-500' : 'bg-gray-200 text-gray-500'}`}
            >
              {badge.icon} {badge.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};