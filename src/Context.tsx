import notifications from "./data/fakeData";
import { createContext, ReactNode } from "react";

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
}

let notificationArray = notifications;

const sendNotification = async (notificationData: NotificationProps) => {
  notificationArray.push(notificationData);
};

const deleteNotification = async (id: string) => {
  notificationArray = notificationArray.filter((item) => item.id !== id);
};

const NotificationContext = createContext<ContextProps | null>(null);

function NotificationProvider({ children }: { children: ReactNode }) {
  return (
    <NotificationContext.Provider
      value={{ sendNotification, deleteNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationContext, NotificationProvider, notificationArray };
