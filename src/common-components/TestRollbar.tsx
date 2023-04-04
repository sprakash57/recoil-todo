const TestRollbar = () => {
  const throwError = () => {
    throw new Error("Random error occured");
  };

  const throwPromise = () => {
    Promise.reject("Promise is unhandled");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={throwError}>Throw Error</button>
      <br />
      <button onClick={throwPromise}>Promise Rejection</button>
    </div>
  );
};

export default TestRollbar;
