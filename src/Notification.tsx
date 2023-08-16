import TopSection from "./TopSection";
import Buttons from "./Buttons";

function Notification() {
  const onDecision = (decision: "yes" | "no") => {
    console.log(`Decision: ${decision} `);
  };

  const photoUrl =
    "https://media.licdn.com/dms/image/D5603AQHAqDtVl2bdfw/profile-displayphoto-shrink_800_800/0/1681970286455?e=2147483647&v=beta&t=_yNs-pSFgUUZMpZrrugrrtriyuG5wnlBvMhBu2d00Ks";
  return (
    <div className="card p-2">
      <TopSection
        photoUrl={photoUrl}
        text={"Marek ma 8cm od zeme, je to pravda?"}
      />
      <div className="py-2">
        <div className="card__line"></div>
      </div>
      <Buttons onDecision={onDecision} />
    </div>
  );
}

export default Notification;
