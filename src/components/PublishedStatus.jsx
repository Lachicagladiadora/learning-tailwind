export const PublishedStatus = () => {
  return (
    <div className='w-[448px] bg-white p-8 text-md text-gray-400'>
      <legend className="w-full border-b border-b-gray-400 text-gray-400 pb-2 font-semibold has-[:checked]:ring-sky-200">Published status</legend>

      <input id='draft' type="radio" className="w-4 h-4 my-4 mr-2 border-slate-300 peer/draft checked:border-sky-500" name="status" checked onChange={() => console.log('hello')} />
      <label htmlFor="draft" className="text-gray-400 my-4 mr-8 peer-checked/draft:text-sky-500">Draft</label>

      <input id='published' type="radio" className="w-4 h-4  my-4  mr-2 peer/published text-sky-500 has-[:checked]:ring-sky-500" name="status" />
      <label htmlFor="published" className="text-gray-400 my-4 mr-8 peer-checked/published:text-sky-500">Published</label>

      <p className="text-sm text-gray-500 hidden peer-checked/draft:block">Drafts are only visible to administrators.</p>
      <p className="text-sm text-gray-500 hidden peer-checked/published:block">Your post will be publicly visible on your site.</p>
    </div >
  )
}
