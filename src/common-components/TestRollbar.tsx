const TestRollbar = () => {
  const throwError = () => {
    throw new Error("Random error occured");
  };

  const throwPromise = () => {
    Promise.reject("Rejected Promise XXXXX")
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={throwError}>Random Error</button>
      <button onClick={throwPromise}>Promise Rejection</button>
    </div>
  );
};

export default TestRollbar;
