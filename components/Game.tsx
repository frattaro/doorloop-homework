import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import useInterval from "../hooks/useInterval";
import type { Nullable, WordEntry } from "../types/types";
import generateWordBank from "../utils/generateWordBank";
import Timer from "./Timer";

const Game: React.FC<{onGameOver: Function}> = ({onGameOver}) => {
  const [wordBank, setWordBank] = useState<Array<WordEntry>>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [useIntervalPeriod, setUseIntervalPeriod] =
    useState<Nullable<number>>(null);
  const [time, setTime] = useState<number>(60);
  const [inputValue, setInputValue] = useState<string>("");

  useInterval(() => {
    const timeLeft = 60 - Math.floor((new Date().getTime() - startTime) / 1000);
    if (timeLeft <= 0) {
      onGameOver(wordBank);
    };

    setTime(timeLeft);
  }, useIntervalPeriod);

  useEffect(() => {
    const newWordBank = generateWordBank();
    newWordBank[0].state = "wordCurrent";
    setWordBank(newWordBank);
  }, [])

  return (
    <Box>
      <Card>
        <CardHeader title={<>
          <Timer time={time} /></>} />
        <CardContent>
          {wordBank.map((x, index) => (
            <Typography key={index} variant={x.state}>
              {x.word}
            </Typography>
          ))}
        </CardContent>
        <CardActions>
          <TextField
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (!startTime) {
                setStartTime(new Date().getTime());
                setUseIntervalPeriod(1000);
              }

              if (e.key === " ") {
                e.preventDefault();
                const currentIndex = wordBank.findIndex(x => x.state === "wordCurrent");
                wordBank[currentIndex].state = inputValue === wordBank[currentIndex].word ? "wordSuccess" : "wordFailure";
                wordBank[currentIndex].input = inputValue;
                wordBank[currentIndex + 1].state = "wordCurrent";
                setWordBank(wordBank);
                setInputValue("");
              }
            }}
            value={inputValue}
          />
        </CardActions>
      </Card>
    </Box>
  );
};

export default Game;
