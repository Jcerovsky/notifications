import "./helpers.css";
import getTimeAgo from "./getTimeAgo";
import { NotificationProps } from "./Context";

function Notification({
  name,
  photoUrl,
  text,
  createdAt,
  onDecision,
}: NotificationProps) {
  return (
    <div className="notification p-2 my-2">
      <div className="notification__header d-flex">
        <div
          className="notification__photo mr-4"
          style={{ backgroundImage: `url(${photoUrl})` }}
        />
        <div className="notification__content">
          <div className="d-flex">
            <div className="notification__title font-700">{name}</div>
            <div className="notification__time opacity-50 font-100">
              {getTimeAgo(createdAt)}
            </div>
          </div>
          <div className="notification__text">{text}</div>
        </div>
      </div>
      {onDecision && (
        <div className="notification__footer">
          <div className="notification__line my-2" />
          <div className="notification__buttons d-flex">
            <div className="notification__button py-2 px-3 mr-2">
              <div className="notification__button__text">Ano</div>
            </div>
            <div className="notification__button py-2 px-3 opacity-50">
              <div className="notification__button__text">Nie</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
