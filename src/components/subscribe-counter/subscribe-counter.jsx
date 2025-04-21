import useCount from "remoteSubsribeForm/store";

const SubscribeCounter = () => {
  const [count] = useCount(0);

  return (
    <div className="subscribe-counter">
      <h2>Number of subscribers</h2>
      <p>Amount: {count}</p>
    </div>
  );
};

export default SubscribeCounter;
