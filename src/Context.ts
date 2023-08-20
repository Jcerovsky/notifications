import fakeData from "./data/fakeData";

export interface NotificationProps {
  createdAt: number;
  id: string;
  name: string;
  onDecision?: (decisionObj: DecisionProps) => void;
  photoUrl: string;
  text: string;
}

export interface DecisionProps {
  text: string;
  url?: string | undefined;
}

let notificationArray = fakeData;

const sendNotification = async (notificationData: NotificationProps) => {
  notificationArray.push(notificationData);
};

const deleteNotification = async (id: string) => {
  notificationArray = notificationArray.filter((item) => item.id !== id);
};

export { deleteNotification, sendNotification, notificationArray };
