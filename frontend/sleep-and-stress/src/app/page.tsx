"use client";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [predictions, setPredictions] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sleepQualityRef = useRef<HTMLInputElement>(null);
  const sleepDurationRef = useRef<HTMLInputElement>(null);

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const sleepQuality = sleepQualityRef.current?.value;
    const sleepDuration = sleepDurationRef.current?.value;

    const data = await fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sleepQuality, sleepDuration }),
    });

    const predictions = await data.json();
    setPredictions(predictions);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <main className="w-full flex flex-col p-12 gap-6">
      <section className="flex justify-center">
        <div className="flex flex-col align-center items-center justify-center p-12 border-8 border-indigo-700 rounded-md gap-8 bg-indigo-400">
          <h1 className="font-serif font-extrabold text-3xl text-white">
            Predict Your Stress From Sleep!
          </h1>
          <div className="w-full flex flex-col justify-center">
            <form className="flex flex-col gap-8" onSubmit={formHandler}>
              <div className="flex flex-col gap-2">
                <label htmlFor="Sleep Quality" className="text-lg text-white">
                  Sleep Quality
                </label>
                <input
                  type="text"
                  name="Sleep Quality"
                  ref={sleepQualityRef}
                  placeholder="Level: 1-10"
                  required
                  className="outline-none border-2 border-yellow-600 rounded-md py-2 px-2 bg-yellow-100 shadow-md shadow-yellow-400 transition-colors ease-in-out duration-100 placeholder:text-black focus:placeholder:text-gray-500 focus:border-sky-600 focus:bg-white focus:shadow-sky-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="Sleep Duration" className="text-lg text-white">
                  Sleep Duration
                </label>
                <input
                  type="text"
                  name="Sleep Duration"
                  ref={sleepDurationRef}
                  placeholder="Rating: 1-10"
                  required
                  className="outline-none border-2 border-yellow-600 rounded-md py-2 px-2 bg-yellow-100 shadow-md shadow-yellow-300 transition-colors ease-in-out duration-100 placeholder:text-black focus:placeholder:text-gray-500 focus:border-sky-600 focus:bg-white focus:shadow-sky-300"
                />
              </div>
              <button
                type="submit"
                className="w-1/2 bg-black text-white py-2 px-8 rounded-lg active:bg-gray-600 transition-colors ease-in-out duration-100"
              >
                Predict
              </button>
            </form>
          </div>
        </div>
        <Image src="/hero.jpg" width={700} height={500} alt="hero" />
      </section>
      <section className="flex flex-col justify-center items-center gap-12 p-12">
        <h1 className="font-black text-5xl">Model Predictions</h1>
        {isLoading ? (
          <section>
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </section>
        ) : predictions ? (
          <section>
            <ul className="flex justify-center flex-wrap gap-3">
              {predictions?.prediction?.data.map((item: JSON) => {
                const model = Object.keys(item)[0];
                const pred = Object.values(item)[0];

                return (
                  <li className="flex flex-col justify-center items-center gap-3 basis-1/3 bg-orange-400 border-4 border-red-500 rounded-xl p-4">
                    <h1 className="text-purple-700 text-2xl font-extrabold">
                      {model}
                    </h1>
                    <p className="text-4xl font-semibold">{pred}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : (
          <section className="text-2xl font-bold text-red-600">
            Please fill in the form above!
          </section>
        )}
      </section>
    </main>
  );
}
