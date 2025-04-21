import SubscribeForm from "remoteSubsribeForm/subscribe-form";
import ClickButton from "remoteButton/click-button";
import Subscribers from "remoteSubscribers/subscribers";

import SubscribeCounter from "./subscribe-counter/subscribe-counter.jsx";

const HostApp = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold">Host Application</h1>
      <p className="italic">
        This application host a a couple of Federated components
      </p>
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg mt-4">
        <ClickButton />
      </div>
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg mt-4">
        <SubscribeCounter />
      </div>
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg mt-4">
        <SubscribeForm />
      </div>
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg mt-4">
        <Subscribers />
      </div>
    </div>
  );
};

export default HostApp;
