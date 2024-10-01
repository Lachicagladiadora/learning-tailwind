//make manual the render data


export const ContactsList = ({ contactsData }) => {
  return (
    <ul className="h-auto w-[500px] p-5 bg-neutral-50 text-neutral-800 mx-auto">
      {contactsData.length > 0 && contactsData.map((cur, idx) => (
        <li key={idx} className="flex gap-3 text-md font-light border-b border-b-neutral-300 last:border-b-0">
          <div className="p-3 pr-0 flex items-center justify-center">
            <img src={cur.imgSrc} alt="" className="w-10 h-10 rounded-full" />
          </div>
          <div className="p-3 pl-0 flex flex-col justify-center text-sm">
            <p className="text-black font-medium">{cur.name}</p>
            <p className="text-slate-400">{cur.email}</p>
          </div>
        </li>
      )
      )}
    </ul>
  )
}
