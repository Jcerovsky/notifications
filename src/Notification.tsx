import "./helpers.css";

interface T {
  onDecision: (decision: "yes" | "no") => void;
  photoUrl: string;
  text: string;
  showFooter: boolean;
}

function Notification({ onDecision, photoUrl, text, showFooter }: T) {
  return (
    <div className="notification p-2">
      <div className="notification__header">
        <div
          className="notification__photo mr-4"
          style={{ backgroundImage: `url(${photoUrl})` }}
        />
        <div className="notification__text">{text}</div>
      </div>
      {showFooter && (
        <div className="notification__footer">
          <div className="notification__line my-2" />
          <div className="notification__buttons">
            <div
              className="notification__button py-2 px-3 mr-2"
              onClick={() => onDecision("yes")}
            >
              <div className="notification__button__text">Ano</div>
            </div>
            <div
              className="notification__button py-2 px-3 opacity-50"
              onClick={() => onDecision("no")}
            >
              <div className="notification__button__text">Nie</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
