import { useState } from "react"
import { EMAIL_REGEX_VALIDATE } from "../constants"

export const InputWithErrorMessage = () => {
  const [emailValue, setEmailValue] = useState('')
  return (
    <div className={`w-[384px] h-[134px] flex flex-col justify-center gap-1 bg-white px-8 py-4 text-sm ${emailValue === EMAIL_REGEX_VALIDATE || !emailValue ? "text-black" : "text-red-600"}`}>
      <label htmlFor="email-with-error">Email</label>
      <input id="email-with-error" type="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} placeholder="yourEmail@email.com"
        className={`peer border-[2px] outline-none px-3 py-1.5 rounded-md ${emailValue === EMAIL_REGEX_VALIDATE || !emailValue ? 'border-sky-500 text-black' : "border-red-600 text-red-600"}`} />
      <p className="invisible peer-invalid:visible">Please provide a valid email address</p>
    </div>
  )
}
