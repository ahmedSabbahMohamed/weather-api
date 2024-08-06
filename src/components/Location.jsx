function Location({ location }) {
  return (
    <h1 className="text-cyan-800 font-extrabold text-3xl text-center sm:text-left w-full lg:w-2/3 mx-auto">
      {location?.name}, {location?.country}
    </h1>
  );
}

export default Location