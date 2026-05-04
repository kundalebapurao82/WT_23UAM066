function Filter({ setFilter }) {
  return (
    <div style={{ margin: '15px' }}>
      <label>Filter by Course: </label>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>CSE</option>
        <option>IT</option>
        <option>ENTC</option>
      </select>
    </div>
  );
}

export default Filter;