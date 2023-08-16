interface T {
  onDecision: (decision: "yes" | "no") => void;
  photoUrl: string;
  text: string;
}

function Notification({ onDecision, photoUrl, text }: T) {
  const imageUrl = {
    backgroundImage: `url(${photoUrl})`,
  };

  return (
    <div className="notification p-2">
      <div className="notification__header">
        <div className="notification__image" style={imageUrl}></div>
        <div>{text}</div>
      </div>
      <div className="notification__line my-2"></div>
      <div className="notification__button">
        <div
          className="notification__button_style py-2 px-3"
          onClick={() => onDecision("yes")}
        >
          Ano
        </div>
        <div
          className="notification__button_style py-2 px-3 fade-50"
          onClick={() => onDecision("no")}
        >
          Nie
        </div>
      </div>
    </div>
  );
}

export default Notification;
