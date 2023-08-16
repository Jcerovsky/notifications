interface Props {
  photoUrl: string;
  text?: string;
}

function Notification({ text, photoUrl }: Props) {
  const imageUrl = {
    background: `#bfbfbf no-repeat center url(${photoUrl})`,
    backgroundSize: "cover",
  };

  return (
    <div className="card__top-section">
      <div className="card__image" style={imageUrl}></div>
      <div className="card__text">
        <div>{text}</div>
      </div>
    </div>
  );
}

export default Notification;
