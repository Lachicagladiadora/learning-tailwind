// eslint-disable-next-line react/prop-types
export const Categories = ({ categories }) => {
  return (
    <div className="w-[448px] bg-[#1e293b] text-slate-50 p-5 text-sm">
      <h3>Categories</h3>
      <ul className="w-full *:rounded-full *:px-2 *:py-0.5 *:border-[2px] *-border-sky-100 *:bg-sky-50 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 *:inline flex flex-wrap gap-2 items-center">
        {/* eslint-disable-next-line react/prop-types */}
        {categories.map((c, i) => (
          <li key={i} className="w-auto rounded-full px-3 py-0.5 text-center text-xs font-medium border border-sky-500 bg-sky-500/20 flex items-center justify-center">{c}</li>
        ))}
      </ul>
    </div>
  )
}
