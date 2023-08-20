function App() {
  return (
    <>
      <div className="h-screen grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none place-content-center overflow-hidden relative">
        <img
          src="./images/bg-main-mobile.png"
          alt="mobile background"
          className="absolute top-0 z-0 lg:hidden transform scale-x-[5] h-1/3"
        />
        <img
          src="./images/bg-main-desktop.png"
          alt=""
          className="absolute left-0 w-1/3 min-h-screen hidden lg:block"
        />
        <div className="relative flex items-center justify-center ">
          <img
            src="./images/bg-card-back.png"
            alt="card back"
            className="absolute z-10 right-8 top-12 lg:right-8 lg:bottom-0 max-w-md w-3/4"
          />

          <img
            src="./images/bg-card-front.png"
            alt="card front"
            className="absolute z-20 left-8 bottom-14 lg:left-8 lg:top-0 max-w-md w-3/4"
          />
        </div>

        <article className="relative p-4 grid place-content-center">
          <form className="flex flex-col gap-4 max-w-md">
            <div className="space-y-1">
              <label htmlFor="name" className="font-semibold">
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Jane Appleseed"
                className="border-2 w-full rounded-lg p-2 tracking-wider focus:border-violet-900 hover:cursor-pointer focus:outline-transparent"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="number" className="font-semibold">
                CARD NUMBER
              </label>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="e.g. 1234 5678 9123 4567"
                className="border-2 w-full rounded-lg p-2 tracking-wider focus:border-violet-900 hover:cursor-pointer focus:outline-transparent"
              />
            </div>

            <div className="grid grid-cols-[2fr_3fr] gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="month" className="font-semibold">
                  EXP.DATE(MM/YY)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="month"
                    name="month"
                    placeholder="MM"
                    className="border-2 w-full rounded-lg p-2 tracking-wider focus:border-violet-900 hover:cursor-pointer focus:outline-transparent"
                  />
                  <input
                    type="text"
                    id="year"
                    name="year"
                    placeholder="YY"
                    className="border-2 w-full rounded-lg p-2 tracking-wider focus:border-violet-900 hover:cursor-pointer focus:outline-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="cvv" className="font-semibold">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="CVV"
                  className="border-2 w-full rounded-lg p-2 tracking-wider focus:border-violet-900 hover:cursor-pointer focus:outline-transparent"
                />
              </div>
            </div>
            <button
              className="bg-neu-very-dark-violet p-4 text-center text-neu-white rounded-lg"
              type="submit"
            >
              Confirm
            </button>
          </form>
        </article>
      </div>
    </>
  );
}

export default App;
