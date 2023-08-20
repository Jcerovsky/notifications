import { useEffect, useState } from "react";
import { notificationArray, NotificationProps } from "./Context";
import Notification from "./Notification";

function Notifications() {
  const [allNotifications, setAllNotifications] = useState<NotificationProps[]>(
    [],
  );

  useEffect(() => {
    setAllNotifications(notificationArray);
  }, []);

  return (
    <div>
      {allNotifications.map((item) => (
        <div key={item.id}>
          <Notification
            createdAt={item.createdAt}
            name={item.name}
            photoUrl={item.photoUrl}
            text={item.text}
            id={item.id}
          />
        </div>
      ))}
    </div>
  );
}

export default Notifications;
