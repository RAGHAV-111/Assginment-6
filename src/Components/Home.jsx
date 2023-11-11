import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />

      <div>
        <div className="p-8">
          <div className="flex felx-col items-center justify-center">
            <span className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm">
              Insight
            </span>
          </div>
          <h1 className="text-4xl font-medium text-gray-700 text-center mt-6">
            Full-Funnel Social Analytics
          </h1>
          <p className="text-center mt-6 text-lg font-light text-gray-500">
            The time is now for it to be okay to be great. For being a bright
            color. For standing out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-8">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl"></div>
            <h2 className="uppercase mt-6 text-indigo-500 font-medium mb-3">
              Social conversations
            </h2>
            <p className="font-light text-sm text-gray-500 mb-3">
              We get insulted by others, lose trust for those others. We get
              back stabbed by friends. It becomes harder for us to give others a
              hand.
            </p>
            <a
              className="text-indigo-500 flex items-center hover:text-indigo-600"
              href="/"
            >
              More about us icon
            </a>
          </div>

          <div className="p-8">
            <div className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"></div>
            <h2 className="uppercase mt-6 text-green-500 font-medium mb-3">
              Social conversations
            </h2>
            <p className="font-light text-sm text-gray-500 mb-3">
              We get insulted by others, lose trust for those others. We get
              back stabbed by friends. It becomes harder for us to give others a
              hand.
            </p>
            <a
              className="text-green-500 flex items-center hover:text-green-600"
              href="/"
            >
              More about us icon
            </a>
          </div>
          <div className="p-8">
            <div className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl"></div>
            <h2 className="uppercase mt-6 text-red-500 font-medium mb-3">
              Social conversations
            </h2>
            <p className="font-light text-sm text-gray-500 mb-3">
              We get insulted by others, lose trust for those others. We get
              back stabbed by friends. It becomes harder for us to give others a
              hand.
            </p>
            <a
              className="text-red-500 flex items-center hover:text-red-600"
              href="/"
            >
              More about us icon
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
