function SeasonSelector({ season, setSeason }) {
  return (
    <div>
      <h3>Select Season:</h3>

      <select value={season} onChange={(e) => setSeason(e.target.value)}>
        <option value="Kharif">Kharif</option>
        <option value="Rabi">Rabi</option>
        <option value="Summer">Summer</option>
      </select>
    </div>
  );
}

export default SeasonSelector;