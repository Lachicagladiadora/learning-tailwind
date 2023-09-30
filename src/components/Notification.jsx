import Bubble from "./Icons/Bubble";

export const Notification = () => {
  return (
    <div className="bg-gray-50 max-w-sm mx-auto flex items-center rounded-lg p-6 shadow-lg ">
      <div className="w-12 h-12 flex-shrink-2 shadow-sm">
        <Bubble className="h-12 w-12" />
      </div>
      <div className="ml-6 pt-1">
        <h4 className="text-xl leading-5 text-black">ChitChat</h4>
        <p className="text-slate-500  text-base leading-6">
          You have a new message!
        </p>
      </div>
    </div>
  );
};
