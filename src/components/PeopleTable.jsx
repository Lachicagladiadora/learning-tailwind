
// eslint-disable-next-line react/prop-types
export const PeopleTable = ({ peopleList }) => {
  return (
    <table className="mx-auto font-medium">
      <thead className="p-2 bg-zinc-50 border-b border-b-slate-800/10">
        <tr>
          <th className="py-3 px-4 text-justify">Name</th>
          <th className="py-3 px-4 text-justify">Title</th>
          <th className="py-3 px-4 text-justify">Email</th>
        </tr>
      </thead>
      <tbody>
        {/* eslint-disable-next-line react/prop-types */}
        {peopleList.map((c, i) => (
          <tr className='p-2 odd:bg-zinc-50 even:bg-zinc-100' key={i}>
            <td className="p-4 text-justify  text-black">{c.name}</td>
            <td className="p-4 text-justify font-light text-zinc-500">{c.title}</td>
            <td className="p-4 text-justify font-light text-zinc-500">{c.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
