function Summary({ crops, budget }) {
  const minBudget = 2000;
  const numericBudget = Number(budget);

  if (!budget) {
    return (
      <p style={{ color: "blue", fontWeight: "bold" }}>
        Enter your budget to see crop suggestions
      </p>
    );
  }

  // Budget too low
  if (numericBudget < minBudget) {
    return (
      <p style={{ color: "red", fontWeight: "bold" }}>
        Please enter a minimum budget of ₹2000!!!
      </p>
    );
  }

  //No crops after filtering
  if (crops.length === 0) {
    return <p>No suitable crops found</p>;
  }

  const totalProduction = crops.reduce((sum, c) => sum + c.production, 0);
  const bestCrop = crops[0];

  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
      <h3>Summary</h3>

      <p>Total Crops: {crops.length}</p>
      <p>Total Production: {Math.round(totalProduction)} kg</p>
      <p>
        Best Crop: <strong>{bestCrop.name}</strong>
      </p>
    </div>
  );
}

export default Summary;