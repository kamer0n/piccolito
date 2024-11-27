import { createContext, useContext, useState, ReactNode } from "react";

export interface ScoreContextType {
  score: number;
  updateScore: (isCorrect: boolean, restart?: boolean) => void;
}

export const ScoreContext = createContext<ScoreContextType>({
  score: 0,
  updateScore: () => {},
});

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);

  const updateScore = (isCorrect: boolean, restart: boolean = false) => {
    if (restart) {
      setScore(0);
    } else {
      setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
    }
  };

  return (
    <ScoreContext.Provider value={{ score, updateScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
