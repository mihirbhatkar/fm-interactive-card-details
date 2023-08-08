function App() {
  return (
    <>
      <div className="min-h-screen overflow-hidden flex flex-col">
        <div className="bg-img-mobile bg-cover bg-no-repeat relative flex flex-col items-center">
          <img className="invisible" src="./images/bg-main-mobile.png" alt="" />

          <div className="absolute font-semibold w-10/12 text-white flex flex-col items-center">
            <div className="w-11/12 absolute top-10 right-[-12px]">
              <img
                className="shadow-2xl rounded-[8px]"
                src="./images/bg-card-back.png"
                alt=""
              />
              <div className="absolute top-16 right-8">000</div>
            </div>
            <div className="w-11/12 absolute top-32 left-[-12px]">
              <img
                className="shadow-2xl rounded-[8px]"
                src="./images/bg-card-front.png"
                alt=""
              />
              <div className="absolute h-full flex flex-col justify-between w-full p-4 top-0">
                <img className="w-16" src="./images/card-logo.svg" alt="" />

                <div className="tracking-widest mt-8 text-lg">
                  0000 0000 0000 0000
                </div>

                <div className="font-thin tracking-widest text-[10px] mt-2 w-full flex justify-between">
                  <span>JANE APPLESEED</span> <span>00/00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-8 flex flex-col tracking-widest justify-between">
          <div className="invisible"></div>
          <form className="flex flex-col gap-4">
            <div className="space-y-1">
              <label htmlFor="name" className="font-semibold">
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Jane Appleseed"
                className="border-2 w-full rounded-lg p-2 tracking-wider"
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
                className="border-2 w-full rounded-lg p-2 tracking-wider"
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
                    className="border-2 w-full rounded-lg p-2 tracking-wider"
                  />
                  <input
                    type="text"
                    id="year"
                    name="year"
                    placeholder="YY"
                    className="border-2 w-full rounded-lg p-2 tracking-wider"
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
                  className="border-2 w-full rounded-lg p-2 tracking-wider"
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
        </div>
      </div>
    </>
  );
}

export default App;
