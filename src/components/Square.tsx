interface Props {
  number: number;
  selected: boolean;
  onClick: () => void;
  winningNumbers: number[];
}
const Square: React.FC<Props> = ({number, selected, onClick})  => {

  return (
    <div style={{width: "50px", height: "50px", border: `1px solid ${selected ? "red" : "grey"}`, display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={onClick}>
      {number}
    </div>
  )
}

export default Square