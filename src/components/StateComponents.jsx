import UserInput from "./UserInput";
import Result from "./Result";
import { useState } from "react";
export default function StateComponents() {
  const [investInfo, setInvestInfo] = useState({});
  console.log("info", investInfo);
  return (
    <>
      <UserInput setInvestInfo={setInvestInfo} />
      <Result investInfo={investInfo} />
    </>
  );
}
