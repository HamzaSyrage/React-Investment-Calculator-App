function handleInput(e, setInvestInfo) {
  console.log(e.target.value);
  console.log(e.target.name);
  let camelCase = e.target.name;
  camelCase = camelCase
    .toLowerCase()
    .split(" ")
    .map((ele, index) => {
      return index !== 0 ? ele.charAt(0).toUpperCase() + ele.slice(1) : ele;
    })
    .join("");
  setInvestInfo((prev) => {
    return { ...prev, [camelCase]: parseInt(e.target.value) };
  });
}
function InputGroup({ name, setInvestInfo }) {
  return (
    <div id="user-input">
      <label htmlFor={name}>{name}</label>
      <input
        min={0}
        type="number"
        name={name}
        id={name}
        onInput={(e) => handleInput(e, setInvestInfo)}
      />
    </div>
  );
}

export default function UserInput({ setInvestInfo }) {
  return (
    <div className="input-group">
      <InputGroup name="initial investment" setInvestInfo={setInvestInfo} />
      <InputGroup name="annual investment" setInvestInfo={setInvestInfo} />
      <InputGroup name="expected return" setInvestInfo={setInvestInfo} />
      <InputGroup name="duration" setInvestInfo={setInvestInfo} />
    </div>
  );
}
