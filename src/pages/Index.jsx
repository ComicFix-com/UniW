import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GameOfTheDay } from '@/components/GameOfTheDay';
import { DailyQuiz } from '@/components/DailyQuiz';
import { Leaderboard } from '@/components/Leaderboard';
import { Rewards } from '@/components/Rewards';

const Index = () => {
  const [points, setPoints] = useState(0);

  const addPoints = (amount) => {
    setPoints(prevPoints => prevPoints + amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-4 font-sans">
      <header className="mb-8 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-2">Welcome to UniW</h1>
        <p className="text-xl text-center text-indigo-100">Your Daily Dose of Fun and Engagement</p>
      </header>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <Tabs defaultValue="game" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-indigo-100">
            <TabsTrigger value="game" className="data-[state=active]:bg-white">Game of the Day</TabsTrigger>
            <TabsTrigger value="quiz" className="data-[state=active]:bg-white">Daily Quiz</TabsTrigger>
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-white">Leaderboard</TabsTrigger>
            <TabsTrigger value="rewards" className="data-[state=active]:bg-white">Rewards</TabsTrigger>
          </TabsList>
          <TabsContent value="game">
            <Card>
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-2xl text-indigo-800">Game of the Day</CardTitle>
              </CardHeader>
              <CardContent>
                <GameOfTheDay addPoints={addPoints} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="quiz">
            <Card>
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-2xl text-indigo-800">Daily Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <DailyQuiz addPoints={addPoints} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="leaderboard">
            <Card>
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-2xl text-indigo-800">Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <Leaderboard />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="rewards">
            <Card>
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-2xl text-indigo-800">Your Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <Rewards points={points} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;