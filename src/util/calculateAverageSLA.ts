export function calculateAverageSLA(filteredRows: any) {
  let serviceLevelValues = [];
  for (let row of filteredRows) {
    let serviceLevelVaue = Number(row.values.serviceLevel.replace("%", ""));
    serviceLevelValues.push(serviceLevelVaue);
  }
  let sumOfSLV = serviceLevelValues.reduce(
    (acumulator, serviceLevel) => acumulator + serviceLevel
  );
  let averageSLA = Math.floor(sumOfSLV / serviceLevelValues.length);
  return averageSLA;
}
