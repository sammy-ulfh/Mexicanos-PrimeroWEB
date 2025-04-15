const SearchBar = () => {
  return (
    <section className='font-montserrat font-bold text-xl bg-white w-[100%] h-[10vh] flex flex-col items-center justify-center'>
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full py-2 pl-4 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <img src="/src/client/assets/other/lupa.png" alt="Buscar" className="absolute right-4 top-2.5 w-5 h-5"/>
      </div>
    </section>
  );
};

export default SearchBar;
