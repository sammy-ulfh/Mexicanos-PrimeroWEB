const SearchBar = ({search, setSearch}) => {
  return (
    <section className='absolute -top-6 font-montserrat font-bold text-xl bg-white w-[100%] min-h-[10vh] flex flex-col items-center justify-center'>
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder='Realiza una busqueda...'
          value={search}
          className="w-full py-2 pl-4 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearch(e.target.value) }
        />
        
        <button
          type="submit"
          aria-label="Buscar"
          className="absolute right-3 top-3.5 w-5 h-5 bg-[url(/src/client/assets/other/lupa.png)] bg-no-repeat bg-contain bg-cover hover:bg-gray-200 scale-210 rounded-r-sm"
        >
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
