import notifications from "./data/fakeData";
import { createContext, ReactNode, useState } from "react";

export interface NotificationProps {
  createdAt: number;
  decisions?: { text: string; url?: string }[];
  id: string;
  name: string;
  photoUrl: string;
  text: string;
}

export interface DecisionProps {
  text: string;
  url?: string | undefined;
}

interface ContextProps {
  sendNotification: (notificationData: NotificationProps) => void;
  deleteNotification: (id: string) => void;
  allNotifications: NotificationProps[];
}

const NotificationContext = createContext<ContextProps | null>(null);

function NotificationProvider({ children }: { children: ReactNode }) {
  const [allNotifications, setAllNotifications] =
    useState<NotificationProps[]>(notifications);

  const sendNotification = async (notificationData: NotificationProps) => {
    setAllNotifications((prevState) => [...prevState, notificationData]);
  };

  const deleteNotification = async (id: string) => {
    setAllNotifications((prevState) =>
      prevState.filter((item) => item.id !== id),
    );
  };

  return (
    <NotificationContext.Provider
      value={{ sendNotification, deleteNotification, allNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationContext, NotificationProvider };
