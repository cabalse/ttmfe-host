import ClickButton from "remoteButton/click-button";

const HostAppSimpler = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold">Simple Host Application</h1>
      <p className="italic">
        This simple application host one module via Federation
      </p>
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg mt-4">
        <ClickButton />
      </div>
    </div>
  );
};

export default HostAppSimpler;
