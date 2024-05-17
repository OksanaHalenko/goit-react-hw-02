import css from "./Options.module.css";

function Options({ onClickBtn, feedbackValue, handleClick }) {
  return (
    <div className={css.wrapper}>
      <button
        className={css.button}
        onClick={() => {
          onClickBtn("good");
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => {
          onClickBtn("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => {
          onClickBtn("bad");
        }}
      >
        Bad
      </button>
      {feedbackValue !== 0 && (
        <button className={css.button} onClick={handleClick}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
