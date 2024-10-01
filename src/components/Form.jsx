import { useState } from "react"

export const Form = () => {
  const [passwordValue, setPasswordValue] = useState('12345')
  return (
    <form action="" className="w-[384px] bg-white p-5 font-light flex flex-col justify-center gap-5">
      <div className="w-full flex flex-col justify-center gap-1">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" disabled
          placeholder="Write a username"
          value="I'm a disabled"
          onChange={(e) => console.log(e.target.value)}
          className="py-2 px-3 text-neutral-900/60 outline-none rounded-md border border-neutral-200 shadow-md disabled:text-neutral-400 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:shadow-none" />
      </div>
      <div className="w-full flex flex-col justify-center gap-1">
        <label htmlFor="email">Email</label>
        <input id="email" type="email"
          placeholder="your@example.com"
          onChange={(e) => console.log(e.target.value)}
          className="py-2 px-3 text-neutral-900/60 outline-none rounded-md border border-neutral-200 shadow-md focus:border-orange-500 active:border-amber-400 focus:ring focus:ring-lime-500 invalid:text-red-600 invalid:font-bold invalid:border-red-600 invalid:ring-red-600 invalid:focus:border-red-600 invalid:focus:ring-red-600" />
      </div>
      <div className="w-full flex flex-col justify-center gap-1">
        <label htmlFor="password">Password</label>
        <input id="password" type="password"
          placeholder="Write a password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          className="py-2 px-3 text-neutral-900/60 outline-none rounded-md border border-neutral-200 shadow-md focus:border-orange-500 active:border-amber-400 focus:ring focus:ring-lime-500" />
      </div>
      <div className="w-full flex justify-end">
        <button type="submit" className="bg-cyan-500 px-8 py-2 rounded-md text-neutral-50">Save changes</button>
      </div>
    </form>
  )
}
