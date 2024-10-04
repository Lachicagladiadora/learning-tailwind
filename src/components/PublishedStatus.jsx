export const PublishedStatus = () => {
  return (
    <div className='w-[448px] bg-white p-8 text-md text-gray-400'>
      <legend className="w-full border-b border-b-gray-400 text-gray-400 pb-2 font-semibold">Published status</legend>
      <input id='draft' type="radio" className="my-4 mr-2 peer/draft" name="status" checked /><label htmlFor="draft" className="text-gray-400 my-4 mr-8 peer-checked:/draft:text-sky-500">Draft</label>
      <input id='published' type="radio" className="my-4 mr-2 peer/published" name="status" /><label htmlFor="published" className="text-gray-400 my-4 mr-8 peer-checked:/published:text-sky-500">Published</label>
      <p className="text-sm text-gray-500 hidden peer-checked/draft:block">Drafts are only visible to administrators.</p>
      <p className="text-sm text-gray-500 hidden peer-checked/published:block">Your post will be publicly visible on your site.</p>
    </div >
  )
}
