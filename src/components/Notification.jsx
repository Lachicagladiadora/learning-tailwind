// import Bubble from "./Icons/Bubble";

export const Notification = () => {
  return (
    <div className="py-5">
      <div className="bg-gray-50 max-w-sm mx-auto flex items-center rounded-lg p-6 shadow-lg">
        <div className="w-12 h-12 flex-shrink-2 shadow-sm">
          {/* <Bubble /> */}
        </div>
        <div className="ml-6 pt-1">
          <p className="text-xl leading-5 text-black">ChitChat</p>
          <p className="text-slate-500 text-base leading-6">
            You have a new message!
          </p>
        </div>
      </div>
    </div>
  );
};
