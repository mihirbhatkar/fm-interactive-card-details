import { useReducer } from "react";
import { useState } from "react";

function App() {
  const initialAlerts = {
    cvv: { status: false, msg: "" },
    number: { status: false, msg: "" },
    year: { status: false, msg: "" },
    month: { status: false, msg: "" },
  };

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  const [success, setSuccess] = useState(false);

  const reducer = (state, action) => {
    switch (action) {
      case "wrong cvv":
        return {
          ...state,
          cvv: { status: true, msg: "3 digit number required" },
        };

      case "clear alerts":
        return {
          ...initialAlerts,
        };

      case "wrong month":
        return {
          ...state,
          month: { status: true, msg: "2 digits req." },
        };

      case "wrong year":
        return {
          ...state,
          year: { status: true, msg: "2 digits req." },
        };

      case "wrong number":
        return {
          ...state,
          number: { status: true, msg: "16 digits required" },
        };
    }
  };

  const [alert, dispatch] = useReducer(reducer, { ...initialAlerts });

  function splitString(str, N) {
    const arr = [];
    for (let i = 0; i < str.length; i += N) {
      arr.push(str.substring(i, i + N));
    }
    const newString = arr.map((item) => `${item} `);
    return newString;
  }
  const cardDisplayNumber = splitString(number, 4);
  return (
    <>
      <div className="min-h-screen flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-rows-none lg:justify-items-center overflow-hidden relative">
        <img
          src="./images/bg-main-mobile.png"
          alt="mobile background"
          className="absolute top-0 z-[-100] lg:hidden transform scale-x-[5] h-1/3"
        />
        <img
          src="./images/bg-main-desktop.png"
          alt=""
          className="absolute left-0 min-h-screen hidden lg:block"
        />
        <div className="max-w-md flex flex-col items-center">
          <div className="top-8 left-8 lg:left-24 lg:top-60 lg:w-11/12 relative bg-img-card-back bg-cover bg-no-repeat w-3/4 z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.20)] rounded-xl">
            <img
              src="./images/bg-card-back.png"
              alt="card back"
              className="invisible"
            />
            <span className="absolute  top-[42.5%] right-[11%] lg:text-lg text-[0.9rem] text-white font-semibold">
              {cvv ? cvv : "000"}
            </span>
          </div>
          <div className="bottom-9 right-8 lg:w-11/12 lg:left-4 lg:bottom-64 relative w-3/4 bg-img-card-front bg-cover bg-no-repeat z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.20)] rounded-xl">
            <img
              src="./images/bg-card-back.png"
              alt="card back"
              className="invisible"
            />
            <div className="absolute text-white h-full flex flex-col justify-between w-full p-6 top-0">
              <img className="w-16" src="./images/card-logo.svg" alt="" />

              <div className="tracking-widest mt-8 text-lg lg:text-[26.5px]">
                {number ? cardDisplayNumber : "0000 0000 0000 0000"}
              </div>
              <div className="font-thin tracking-widest lg:text-[13px] text-[10px] mt-2 w-full flex justify-between">
                <span>{name ? name : "JANE APPLESEED"}</span>{" "}
                <span>
                  {month ? month : "00"}/{year ? year : "00"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <article className="relative p-4 w-full flex items-center justify-center">
          {success ? (
            <div className="flex flex-col w-full items-center max-w-sm gap-4">
              <img src="./images/icon-complete.svg" alt="tick" />
              <span className="font-bold text-xl tracking-widest">
                THANK YOU!
              </span>
              <span className="text-neu-dark-gray-violet mt-[-8px]">
                We've added your card details
              </span>
              <button
                onClick={() => setSuccess(false)}
                className="bg-neu-very-dark-violet w-full mt-6 p-4 text-center text-neu-white rounded-lg hover:opacity-80"
                type="submit"
              >
                Continue
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch("clear alerts");

                if (cvv.length !== 3) dispatch("wrong cvv");
                if (month.length !== 2) dispatch("wrong month");
                if (year.length !== 2) dispatch("wrong year");
                if (number.length !== 16) dispatch("wrong number");

                if (cvv.length == 3 && month.length == 2 && year.length == 2) {
                  setSuccess(true);
                }
              }}
              className="flex flex-col gap-4 max-w-sm"
            >
              <div className="space-y-1">
                <label htmlFor="name" className="font-semibold">
                  CARDHOLDER NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    if (e.target.value.length > 26) return;
                    return setName(e.target.value.toUpperCase());
                  }}
                  placeholder="e.g. JANE APPLESEED"
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
                  value={number}
                  onChange={(e) => {
                    const number = e.target.value;
                    if (number.at(-1) === " ") return;
                    if (isNaN(number)) return;
                    if (number.length > 16) return;
                    return setNumber(number);
                  }}
                  placeholder="e.g. 1234 5678 9123 4567"
                  className={`${
                    alert.number.status ? "border-red-600 border-2" : "border-2"
                  } w-full rounded-lg p-2 tracking-wider focus:border-violet-900 hover:cursor-pointer focus:outline-transparent`}
                />
                {alert.number.status && (
                  <span className="text-sm text-red-600 font-thin">
                    {alert.number.msg}
                  </span>
                )}
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
                      value={month}
                      onChange={(e) => {
                        const month = e.target.value;
                        if (month.at(-1) == " ") return;
                        if (isNaN(month)) return;
                        if (month.length > 2) return;
                        return setMonth(month);
                      }}
                      className={`${
                        alert.month.status
                          ? "border-red-600 border-2"
                          : "border-2"
                      } w-full rounded-lg p-2 tracking-wider focus:border-violet-900 hover:cursor-pointer focus:outline-transparent`}
                    />
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={year}
                      onChange={(e) => {
                        const year = e.target.value;
                        if (year.at(-1) == " ") return;
                        if (isNaN(year)) return;
                        if (year.length > 2) return;
                        return setYear(year);
                      }}
                      placeholder="YY"
                      className={`${
                        alert.year.status
                          ? "border-red-600 border-2"
                          : "border-2"
                      } w-full rounded-lg p-2 tracking-wider focus:border-violet-900 hover:cursor-pointer focus:outline-transparent`}
                    />
                    {(alert.month.status && (
                      <span className="text-sm text-red-600 font-thin">
                        2 digits req.
                      </span>
                    )) ||
                      (alert.year.status && (
                        <span className="text-sm text-red-600 font-thin">
                          2 digits req.
                        </span>
                      ))}
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
                    value={cvv}
                    onChange={(e) => {
                      const cvv = e.target.value;
                      if (cvv.at(-1) == " ") return;
                      if (isNaN(cvv)) return;
                      if (cvv.length > 3) return;
                      return setCvv(cvv);
                    }}
                    placeholder="CVV"
                    className={`w-full rounded-lg p-2 tracking-wider ${
                      alert.cvv.status ? "border-red-600 border-2" : "border-2"
                    } focus:border-violet-900 hover:cursor-pointer focus:outline-transparent`}
                  />
                  {alert.cvv.status && (
                    <span className="text-sm text-red-600 font-thin">
                      {alert.cvv.msg}
                    </span>
                  )}
                </div>
              </div>
              <button
                className="bg-neu-very-dark-violet hover:opacity-80 mt-2 p-4 text-center text-neu-white rounded-lg"
                type="submit"
              >
                Confirm
              </button>
            </form>
          )}
        </article>
      </div>
    </>
  );
}

export default App;
