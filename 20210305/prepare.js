const data = require("./data.json");

const totalEligibleVoters = item => item.eligible_voters
const totalVoters = item => (item.nays + item.yeas)

absentationVoters = item => totalEligibleVoters(item) - totalVoters(item)

const percentage = (nominator, denominator) => Math.ceil((nominator / denominator) * 100)

const results = data.map(item => ({
	name: item.name,
	abstention: percentage(absentationVoters(item), totalEligibleVoters(item))
})).sort((a, b) => a.name - b.name)

console.log(JSON.stringify(results));