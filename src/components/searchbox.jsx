const SearchBox = (props) => {
  return (
    <div className="hover:scale-105 ease-in duration-100">
      <input
        type="text"
        className="form-control w-80 md:w-[30rem] text-center h-9 rounded-md outline-0 mt-5 "
        placeholder="Browse Movies"
        value={props.value}
        onChange={(event) => props.setSearch(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
