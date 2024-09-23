import { calculateInvestmentResults, formatter } from "../util/investment";

function check({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  return initialInvestment && annualInvestment && expectedReturn && duration
    ? true
    : false;
}
export default function Result({ investInfo }) {
  let helperArray = calculateInvestmentResults(investInfo);
  return (
    <table id="result">
      <thead>
        {check(investInfo) ? (
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest </th>
          </tr>
        ) : (
          <tr>
            <th>enter valid info</th>
          </tr>
        )}
      </thead>
      <tbody>
        {/* <th>{check(investInfo)}</th> */}
        {check(investInfo)
          ? helperArray.map((ele) => {
              console.log(ele);
              return (
                <tr key={ele.year}>
                  <th>{ele.year}</th>
                  <th>{ele.annualInvestment}</th>
                  <th>{formatter.format(ele.interest)}</th>
                  <th>{formatter.format(ele.valueEndOfYear)}</th>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}
