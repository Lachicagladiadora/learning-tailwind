import { useState } from "react"

export const PublishedStatus = () => {
  const [draft, setDraft] = useState(false)
  return (
    <div className='bg-white p-4 '>
      <header>Published status</header>
      <section>
        <div><label htmlFor="draft">Draft</label> <input id='draft' type="checkbox" value={draft} onChange={e => setDraft(e.target.value)} /></div>
        <div><label htmlFor="published">Published</label> <input id='published' type="checkbox" value={!draft} /></div>
      </section>
      {draft && <p>Drafts are only visible to administrators.</p>}
      {!draft && <p>Your post will be publicly visible on your site.
      </p>}
    </div>
  )
}
