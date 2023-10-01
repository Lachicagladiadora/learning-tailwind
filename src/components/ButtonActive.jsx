export const ButtonActive = () => {
  return (
    <div className="py-5">
      <div className="flex items-center justify-center text-zinc-50 text-sm">
        <button className="w-32 py-2 px-5 rounded-full bg-purple-400 hover:bg-indigo-600 active:bg-purple-900 focus:outline-none focus:bg-pink-500 focus:ring focus:ring-orange-500 dark:md:hover:bg-yellow-300">
          Save Changes
        </button>
      </div>
    </div>
  );
};
