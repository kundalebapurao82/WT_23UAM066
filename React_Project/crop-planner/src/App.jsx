import { useState } from "react";
import { cropsData } from "./data";
import SeasonSelector from "./components/SeasonSelector";
import CropList from "./components/CropList";
import Summary from "./components/Summary";
import FarmForm from "./components/FarmForm";

function App() {
  const [season, setSeason] = useState("Kharif");
  const [soil, setSoil] = useState("");
  const [budget, setBudget] = useState("");
  const [area, setArea] = useState("");

  const minBudget = 2000;
  const numericBudget = Number(budget);

  // convert acres → hectare
  const areaInHectare = area ? area / 2.47 : 1;

  let crops = [];

  //Only calculate when budget is valid
  if (budget && numericBudget >= minBudget) {
    let filteredCrops = cropsData[season];

    // filter by soil
    if (soil) {
      filteredCrops = filteredCrops.filter(
        (crop) => crop.soil === soil
      );
    }

    crops = filteredCrops
      .map((crop) => {
        const production = crop.yield * areaInHectare;

        const budgetScore = Math.min(numericBudget / crop.cost, 1);

        const finalScore = production * 0.7 + budgetScore * 1000;

        return {
          ...crop,
          production,
          budgetScore,
          finalScore,
        };
      })
      .sort((a, b) => b.finalScore - a.finalScore)
      .slice(0, 2);
  }

  return (
    <div>
      <h1>Crop Planner</h1>

      <SeasonSelector season={season} setSeason={setSeason} />

      <FarmForm
        soil={soil}
        setSoil={setSoil}
        budget={budget}
        setBudget={setBudget}
        area={area}
        setArea={setArea}
      />

      <h2>Selected Season: {season}</h2>

      <Summary crops={crops} budget={budget} />

      <CropList crops={crops} />
    </div>
  );
}

export default App;