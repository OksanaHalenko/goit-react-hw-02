import css from "./Feedback.module.css";

function Feedback({
  valueGood,
  valueNeutral,
  valueBad,
  valueTotal,
  percentPositive,
}) {
  return (
    <div className={css.wrapper}>
      <p className={css.inscription}>
        {"Good: "} {valueGood}
      </p>
      <p className={css.inscription}>
        {"Neutral: "} {valueNeutral}
      </p>
      <p className={css.inscription}>
        {"Bad: "} {valueBad}
      </p>
      <p className={css.inscription}>
        {"Total: "} {valueTotal}
      </p>
      <p className={css.inscription}>
        {"Positive: "} {percentPositive}
        {"%"}
      </p>
    </div>
  );
}

export default Feedback;
