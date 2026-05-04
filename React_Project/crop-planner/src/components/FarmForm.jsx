function FarmForm({ soil, setSoil, budget, setBudget, area, setArea }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Farm Details</h3>

      <label>Soil Type: </label>
      <select value={soil} onChange={(e) => setSoil(e.target.value)}>
        <option value="">Select</option>
        <option value="Clay">Clay</option>
        <option value="Loamy">Loamy</option>
        <option value="Black">Black</option>
        <option value="Sandy">Sandy</option>
        <option value="Alluvial">Alluvial</option>
      </select>

      <br /><br />

      <label>Budget (₹): </label>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <br /><br />

      <label>Farm Area (acres): </label>
      <input
        type="number"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />
    </div>
  );
}

export default FarmForm;