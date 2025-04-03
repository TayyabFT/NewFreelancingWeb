// components/Cta.js
const Cta = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-green-900 flex justify-center items-center py-10 m-10 rounded-xl">
      <div className="max-w-xl text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          Supercharge Your Affiliate Marketing Today!
        </h2>
        <a
          href="#"
          className="inline-block bg-green-500 text-black font-semibold py-2 px-4 rounded shadow hover:bg-white transition duration-200"
        >
          Sign up today!
        </a>
      </div>
    </div>
  );
};

export default Cta;
