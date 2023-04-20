import { generateWinningNumbers } from "@/utils";
import { useState } from "react";
import Square from "./Square";

interface Props {
  winningNumbers: number[];
  choice: number;
}

const Dashboard: React.FC<Props> = ({winningNumbers, choice}) => {
  const squares = Array(40).fill(null);
  const [selectedSquare, setSelectedSquare] = useState<number>(-1);

  const handleClick = (i: number) => {
    setSelectedSquare(i);
  }

  return (
    <div>
      {squares.map((square, i) => (
        <Square
          key={i}
          number={i+1}
          selected={i === selectedSquare}
          onClick={() => handleClick(i)}
          winningNumbers={winningNumbers}
        />
      ))}
      <br />
      {/* <button onClick={handleShow}>Mostrar</button>
      <button onClick={handleShowAll}>Mostrar Todo</button>
      <button onClick={handleShuffle}>Barajar</button> */}
    </div>
  )
}

export default Dashboard