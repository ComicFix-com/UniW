import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GameOfTheDay } from '@/components/GameOfTheDay';
import { DailyQuiz } from '@/components/DailyQuiz';
import { Leaderboard } from '@/components/Leaderboard';
import { Rewards } from '@/components/Rewards';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-primary">Welcome to UniW</h1>
        <p className="text-xl text-center text-gray-600">Your Daily Dose of Fun and Engagement</p>
      </header>

      <Tabs defaultValue="game" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="game">Game of the Day</TabsTrigger>
          <TabsTrigger value="quiz">Daily Quiz</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>
        <TabsContent value="game">
          <Card>
            <CardHeader>
              <CardTitle>Game of the Day</CardTitle>
            </CardHeader>
            <CardContent>
              <GameOfTheDay />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="quiz">
          <Card>
            <CardHeader>
              <CardTitle>Daily Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <DailyQuiz />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leaderboard">
          <Card>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <Leaderboard />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rewards">
          <Card>
            <CardHeader>
              <CardTitle>Your Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <Rewards />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;