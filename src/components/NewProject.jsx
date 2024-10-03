export const NewProject = () => {
  return (
    <a href="https://github.com/Lachicagladiadora/learning-tailwind" className="group w-[320px] h-[108px] rounded-md bg-slate-50 p-4 text-sm flex flex-col gap-3 hover:bg-sky-500">
      <div className="flex gap-3 font-bold group-hover:text-white">
        <div className="h-4 w-5  fill-sky-500 group-hover:fill-white">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="fill-current">
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
            </g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
            </g>
            <g id="SVGRepo_iconCarrier">
              <path d="m 3 1 c -1.644531 0 -3 1.355469 -3 3 v 8 c 0 1.644531 1.355469 3 3 3 h 3 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -3 c -0.5625 0 -1 -0.4375 -1 -1 v -7 h 11 c 0.5625 0 1 0.4375 1 1 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -1.644531 -1.355469 -3 -3 -3 h -3.585938 l -1.707031 -1.707031 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 2 h 3.585938 l 1 1 h -5.585938 c 0 -0.5625 0.4375 -1 1 -1 z m 8 5 v 3 h -3 v 2 h 3 v 3 h 2 v -3 h 3 v -2 h -3 v -3 z m 0 0" fill="#f5f5f50">
              </path>
            </g>
          </svg>
        </div>
        <h3>New project</h3>
      </div>
      <div className="text-neutral-500 group-hover:text-white">
        <p>Create a new project from a variety of starting templates.</p>
      </div>
    </a>
  )
}
