interface Props {
  onDecision: (decision: "yes" | "no") => void;
}

function Buttons({ onDecision }: Props) {
  const buttonClass = `card__button card__button--style py-2 px-4`;

  return (
    <div className="card__button">
      <div className={buttonClass} onClick={() => onDecision("yes")}>
        Ano
      </div>
      <div
        className={`${buttonClass} fade-50`}
        onClick={() => onDecision("no")}
      >
        Nie
      </div>
    </div>
  );
}

export default Buttons;
