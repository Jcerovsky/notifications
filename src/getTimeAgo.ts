function getTimeAgo(notificationTimestamp: number) {
  const currentTime = new Date();
  const notificationTime = new Date(notificationTimestamp * 1000);
  const timeDifference = +currentTime - +notificationTime;

  if (timeDifference < 60000) {
    return "práve teraz";
  } else if (timeDifference < 3600000) {
    const minutes = Math.round(timeDifference / 60000);
    return `pred ${minutes} min`;
  } else if (timeDifference < 86400000) {
    const hours = Math.round(timeDifference / 3600000);
    return `pred ${hours} hod`;
  } else {
    const days = Math.round(timeDifference / 86400000);
    return days === 1 ? `pred ${days} dňom` : `pred ${days} dňami`;
  }
}

export default getTimeAgo;
