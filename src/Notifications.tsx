import { useContext } from "react";
import { NotificationContext } from "./Context";
import Notification from "./Notification";

function Notifications() {
  const context = useContext(NotificationContext);

  return (
    <div>
      {context?.allNotifications.map((item) => (
        <div key={item.id}>
          <Notification
            createdAt={item.createdAt}
            name={item.name}
            photoUrl={item.photoUrl}
            text={item.text}
            id={item.id}
            decisions={item.decisions}
          />
        </div>
      ))}
    </div>
  );
}

export default Notifications;
