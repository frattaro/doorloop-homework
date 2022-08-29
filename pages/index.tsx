import {Box} from "@mui/material";
import {useState} from "react";
import type { NextPage } from "next";
import type { WordEntry } from "../types/types";
import Head from "next/head";

import Game from "../components/Game";

const Home: NextPage = () => {
  const [gameOver, setGameOver] = useState<Boolean>(false);
  const [correctWords, setCorrectWords] = useState<Number>(0);
  const [incorrectWords, setIncorrectWords] = useState<Number>(0);
  const [cpm, setCpm] = useState<Number>(0);
  const [wpm, setWpm] = useState<Number>(0);

  return (
    <div>
      <Head>
        <title>DoorLoop Homework</title>
      </Head>
      {!gameOver && (
        <Game onGameOver={(wordBank: Array<WordEntry>) => {
          setCorrectWords(wordBank.filter(x => x.state === "wordSuccess").length);
          setIncorrectWords(wordBank.filter(x => x.state === "wordFailure").length);
          const cpmCalc = wordBank.filter(x => ["wordSuccess", "wordFailure"].includes(x.state)).reduce((acc, item) => {
            acc += item.input.length + 1;
            return acc;
          }, 0);
          setCpm(cpmCalc);
          setWpm(cpmCalc / 5)

          setGameOver(true);
        }} />
      )}
      {gameOver && (
        <Box>
          <p>
            Correct words: {correctWords.toString()}
          </p>
          <p>
            Incorrect words: {incorrectWords.toString()}
          </p>
          <p>
            CPM: {cpm.toString()}
          </p>
          <p>
            WPM: {wpm.toString()}
          </p>
        </Box>
      )}
    </div>
  );
};

export default Home;
