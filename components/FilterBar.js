import { useState } from "react";

function FilterBar({setFacultyValue, setStageValue ,setYearValue }) {

  const handleFacultyInput = (event) => {
    let input = event.target.value;
    setFacultyValue(input);
  };

  const handleStageInput = (event) => {
    let input = event.target.value;
    setStageValue(input);
  };

  const handleYearInput = (event) => {
    let input = event.target.value;
    setYearValue(input);
  };

  return (
    <div>
      <span>
        <label>Faculty</label>
            <select onChange={handleFacultyInput}>
                <option value="Art">Art</option>
                <option value="Commerce">Commerce</option>
                <option value="Engineering">Engineering</option>
                <option value="Law">Law</option>
            </select>
        <label>Stage</label>
            <select onChange={handleStageInput}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        <label>Year</label>
            <select onChange={handleYearInput}>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
            </select>
      </span>
    </div>
  );
}

export default FilterBar;