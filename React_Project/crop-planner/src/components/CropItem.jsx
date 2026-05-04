function CropItem({ crop, index }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h4>
        {crop.name} {index === 0 && "⭐ Recommended"}
      </h4>

      <p>Soil: {crop.soil}</p>
      <p>Cost: ₹{crop.cost}</p>
      <p>
        Govt Yield: {crop.yield} kg/hectare 
        <br />
        <small>(Based on national data)</small>
        </p>

        <p>
        Your Expected Output: {Math.round(crop.production)} kg
        <br />
        <small>(Based on your land size)</small>
       </p>
    </div>
  );
}

export default CropItem;