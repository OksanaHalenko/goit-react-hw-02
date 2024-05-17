import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const updateClicks = (variant) => {
    setClicks({
      ...clicks,
      [variant]: clicks[variant] + 1,
    });
  };
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);
  const clickResetBtn = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);
  return (
    <>
      <Description
        title={"Sip Happens Café"}
        text={
          "Please leave your feedback about our service by selecting one of the options below."
        }
      />
      <Options
        onClickBtn={updateClicks}
        feedbackValue={totalFeedback}
        handleClick={clickResetBtn}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          valueGood={clicks.good}
          valueNeutral={clicks.neutral}
          valueBad={clicks.bad}
          valueTotal={totalFeedback}
          percentPositive={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
