
export const PaymentMethod = () => {
  return (
    <div className='w-[480px] bg-white rounded-md p-5'>
      <h3 className='text-gray-400 font-bold'>PaymentMethod</h3>
      <div>
        <div className='flex items-center justify-between p-5 rounded-xl border border-white checked:border-violet-300 checked:bg-violet-300 hover:border-gray-200 hover:bg-gray-200'>
          <label htmlFor="google" className='flex items-center justify-center gap-3'>Google Pay</label>
          <input type="radio" name="google" id="google" className='checked:border-indigo-500' />
        </div>
        <div>
          <label htmlFor="apple" className='flex items-center justify-center gap-3'>Apple Pay</label>
          <input type="radio" name="apple" id="apple" />
        </div>
        <div>
          <label htmlFor="credit-card" className='flex items-center justify-center gap-3'>
            <div className='h-5 w-5' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
            </div>
            Credit Card
          </label>
          <input type="radio" name="credit-card" id="credit-card" />
        </div>
      </div>
    </div>
  )
}
