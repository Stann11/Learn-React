const ErrorExample = () => {
  let count = 0;
  const increase = (e) => {
    e.preventDefault();
    count += 1;
    console.log(count);
    return count;
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={increase}>Increase the count</button>
    </>
  );
};

export default ErrorExample;
