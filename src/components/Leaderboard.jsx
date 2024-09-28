import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const leaderboardData = [
  { rank: 1, name: "Alice", points: 1000 },
  { rank: 2, name: "Bob", points: 950 },
  { rank: 3, name: "Charlie", points: 900 },
  { rank: 4, name: "David", points: 850 },
  { rank: 5, name: "Eve", points: 800 },
];

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

export const Leaderboard = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Player</TableHead>
            <TableHead className="text-right">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboardData.map((player) => (
            <TableRow key={player.rank} className="hover:bg-gray-50">
              <TableCell className="font-medium">
                {player.rank === 1 && <Trophy className="inline-block mr-2 text-yellow-400" />}
                {player.rank === 2 && <Trophy className="inline-block mr-2 text-gray-400" />}
                {player.rank === 3 && <Trophy className="inline-block mr-2 text-orange-400" />}
                {player.rank}
              </TableCell>
              <TableCell className="flex items-center">
                <Avatar className="w-8 h-8 mr-2">
                  <AvatarFallback>{getInitials(player.name)}</AvatarFallback>
                </Avatar>
                {player.name}
              </TableCell>
              <TableCell className="text-right font-semibold">{player.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};