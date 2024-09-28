import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "Alice", points: 1000 },
    { rank: 2, name: "Bob", points: 950 },
    { rank: 3, name: "Charlie", points: 900 },
    { rank: 4, name: "David", points: 850 },
    { rank: 5, name: "Eve", points: 800 },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Rank</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaderboardData.map((player) => (
          <TableRow key={player.rank}>
            <TableCell className="font-medium">{player.rank}</TableCell>
            <TableCell>{player.name}</TableCell>
            <TableCell className="text-right">{player.points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};