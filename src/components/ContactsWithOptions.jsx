// eslint-disable-next-line react/prop-types
export const ContactsWithOptions = ({ contactsData }) => {
  return (
    <ul className="w-[448px] bg-white p-2 flex flex-col">
      {/* eslint-disable-next-line react/prop-types */}
      {contactsData.map((c, i) => (
        <li key={i} className="h-20 flex group/item gap-3 p-5 rounded-md hover:bg-gray-100">
          <div className="h-12 w-12">
            <img src={c.src} alt={c.name} className="rounded-full" />
          </div>
          <div className="flex-1 text-sm">
            <h3 className="font-bold">{c.name}</h3>
            <p className="text-gray-400 font-light">{c.title}</p>
          </div>
          <div>
            <button className="px-4 py-2 rounded-full flex group/edit invisible gap-3 text-gray-500 fill-gray-400 group-hover/item:visible hover:bg-slate-200">
              <span className="group-hover/edit:text-gray-700">Call</span>
              <div className="h-5 w-5 group-hover/edit:text-gray-500 fill-invisible group-hover/edit:translate-x-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
