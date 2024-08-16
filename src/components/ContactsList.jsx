//make a array with contacts data





// const Contact = (imgSrc, name, email) => {
//   return (
//     <>

//     </>)
// }

export const ContactsList = (contactsData) => {
  console.log({ contactsData })
  return (
    <div>
      hello
      {contactsData.lenght > 0 && contactsData.map((cur, idx) => (
        <div key={idx} className="border border-red-700">
          <div className="h-50px">
            <img src={cur.imgSrc} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <strong>{cur.name}</strong>
            <p className="text-slate-400">{cur.email}</p>
          </div>
        </div>
      )
      )}
    </div>
  )
}
