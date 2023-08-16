interface Props {
  photoUrl: string;
  text?: string;
}

function TopSection({ text, photoUrl }: Props) {
  const imageUrl = {
    background: `url(${photoUrl}`,
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

export default TopSection;