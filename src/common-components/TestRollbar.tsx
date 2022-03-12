const TestRollbar = () => {
  const throwError = () => {
    throw new Error("Random error occured");
  };

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={throwError}>Test Rollbar</button>
    </div>
  );
};

export default TestRollbar;
