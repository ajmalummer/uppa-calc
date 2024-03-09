import React from "react";

function Form({
  inputNumber,
  setInputNumber,
  percentage,
  setPercentage,
  changablePercentage,
  setChangablePercentage,
}) {
  const inputHandler = (event) => {
    setInputNumber(event.target.value);
  };

  const selectionHandler = (event) => {
    setPercentage(event.target.value);
  };

  const changablePercentageHandler = (event) => {
    setChangablePercentage(event.target.value);
  };
  return (
    <form action="">
      {/* <label htmlFor="inputText">amount</label> */}
      <div className="form-wrapper">
        <select
          name="mySelect"
          id=""
          onChange={selectionHandler}
          className="selector"
        >
          <option value="add">add</option>
          <option value="sub">sub</option>
        </select>
        {/* <label htmlFor="percentage">%</label> */}
        <input
          type="number"
          name="percentage"
          id=""
          onChange={changablePercentageHandler}
          placeholder="enter your %"
          className="percentage"
        />
          </div>
        <input
          type="number"
          name="inputText"
          id=""
          onChange={inputHandler}
          placeholder="Enter your amount"
          className="inputbox"
        />
    </form>
  );
}

export default Form;
