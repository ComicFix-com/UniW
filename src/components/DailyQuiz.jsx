import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const DailyQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSubmit = () => {
    // Handle quiz submission
    console.log("Submitted answer:", selectedAnswer);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Today's Quiz Question</h2>
      <p className="mb-4">What is the capital of France?</p>
      <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} className="mb-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paris" id="paris" />
          <Label htmlFor="paris">Paris</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="london" id="london" />
          <Label htmlFor="london">London</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="berlin" id="berlin" />
          <Label htmlFor="berlin">Berlin</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="madrid" id="madrid" />
          <Label htmlFor="madrid">Madrid</Label>
        </div>
      </RadioGroup>
      <Button onClick={handleSubmit} disabled={!selectedAnswer}>Submit Answer</Button>
    </div>
  );
};