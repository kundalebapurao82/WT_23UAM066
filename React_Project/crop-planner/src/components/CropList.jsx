import CropItem from "./CropItem";

function CropList({ crops }) {
  return (
    <div>
      <h3>Recommended Crops:</h3>

      {crops.map((crop, index) => (
        <CropItem key={index} crop={crop} index={index} />
      ))}
    </div>
  );
}

export default CropList;