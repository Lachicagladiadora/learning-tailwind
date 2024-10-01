export const Profile = () => {
  return (
    <div className="py-5">
      <div className="bg-white w-[385px] h-[131px] rounded-lg flex items-center gap-8">
        <div className="ps-8">
          <img
            src="https://tailwindcss.com/img/erin-lindford.jpg"
            alt=""
            className="h-24 w-24 rounded-full"
          />
        </div>
        <div>
          <div className="h-24 flex flex-col justify-between">
            <p className="text-lg font-medium">Erin Lindford</p>
            <p className="text-slate-800  opacity-50 text-base">
              Product Engineer
            </p>
            <button className="border border-opacity-25 border-purple-600 text-sm text-purple-600 px-4 py-1 rounded-full -m-1 hover:-m-1 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
