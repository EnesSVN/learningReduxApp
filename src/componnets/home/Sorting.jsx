const Sorting = ({ setSort }) => {
  return (
    <div
      className=" bg-gray-100 my-5 p-5 flex justify-end items-center
  "
    >
      <select
        className=" bg-gray-200 p-2 rounded-md"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="SEÇİNİZ" disabled>
          SEÇİNİZ
        </option>
        <option value="inc">Artan Fiyat</option>
        <option value="dec">Azalan Fiyat</option>
      </select>
    </div>
  );
};

export default Sorting;
