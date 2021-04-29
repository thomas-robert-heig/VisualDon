const xlsx = require("xlsx");
const file = xlsx.readFile("data.xlsx");
const json = xlsx.utils.sheet_to_json(file.Sheets["data"]);

let data = json.filter((item) => item.Kanton == "VD");
data = data.map((item) => ({
	ville: item.Bahnhof_Haltestelle,
	dtv: item.DTV_2018,
}));

console.log(JSON.stringify(data));
