import bb, { bar } from "billboard.js";

const data = [
	{ ville: "Aigle", dtv: 6800 },
	{ ville: "Allaman", dtv: 3400 },
	{ ville: "Avenches", dtv: 700 },
	{ ville: "Arnex", dtv: 190 },
	{ ville: "Bavois", dtv: 180 },
	{ ville: "Bex", dtv: 1800 },
	{ ville: "Bossière", dtv: 210 },
	{ ville: "Bretonnières", dtv: 70 },
	{ ville: "Burier", dtv: 1200 },
	{ ville: "Bussigny", dtv: 3500 },
	{ ville: "Concise", dtv: "<50" },
	{ ville: "Châtillens", dtv: 250 },
	{ ville: "Yverdon-Champ Pittet", dtv: 110 },
	{ ville: "Chavornay", dtv: 2100 },
	{ ville: "Chexbres-Village", dtv: 380 },
	{ ville: "Clarens", dtv: 1900 },
	{ ville: "Corcelles-Nord", dtv: 160 },
	{ ville: "Coppet", dtv: 6400 },
	{ ville: "Corseaux-Cornalles", dtv: 70 },
	{ ville: "Cossonay-Penthalaz", dtv: 3100 },
	{ ville: "Croy-Romainmôtier", dtv: 380 },
	{ ville: "Corcelles-Sud", dtv: 330 },
	{ ville: "Cully", dtv: 1600 },
	{ ville: "La Conversion", dtv: 710 },
	{ ville: "Le Day", dtv: 880 },
	{ ville: "Denges-Echandens", dtv: 350 },
	{ ville: "Eclépens", dtv: 260 },
	{ ville: "Ependes", dtv: 100 },
	{ ville: "Epesses", dtv: 160 },
	{ ville: "Essert-Pittet", dtv: "<50" },
	{ ville: "Etoy", dtv: 1300 },
	{ ville: "Faoug", dtv: 150 },
	{ ville: "Gland", dtv: 5500 },
	{ ville: "Granges-Marnand", dtv: 390 },
	{ ville: "Grandson", dtv: 710 },
	{ ville: "Grandvaux", dtv: 530 },
	{ ville: "Henniez", dtv: 50 },
	{ ville: "Lonay-Préverenges", dtv: 300 },
	{ ville: "Lausanne", dtv: 89200 },
	{ ville: "La Sarraz", dtv: 920 },
	{ ville: "Lutry", dtv: 1200 },
	{ ville: "Lucens", dtv: 880 },
	{ ville: "Moudon", dtv: 1100 },
	{ ville: "Mies", dtv: 590 },
	{ ville: "Morges", dtv: 17000 },
	{ ville: "Moreillon", dtv: 70 },
	{ ville: "Montreux", dtv: 15800 },
	{ ville: "Nyon", dtv: 15900 },
	{ ville: "Oron", dtv: "<50" },
	{ ville: "Palézieux", dtv: 4000 },
	{ ville: "Palézieux-Village", dtv: 120 },
	{ ville: "Payerne", dtv: 4500 },
	{ ville: "Prilly-Malley", dtv: 3100 },
	{ ville: "Pully", dtv: 2100 },
	{ ville: "Puidoux-Chexbres", dtv: 1400 },
	{ ville: "Pully-Nord", dtv: 690 },
	{ ville: "Renens VD", dtv: 18300 },
	{ ville: "Rivaz", dtv: 210 },
	{ ville: "Roche VD", dtv: "<50" },
	{ ville: "Rolle", dtv: 3700 },
	{ ville: "Morges-St-Jean", dtv: 500 },
	{ ville: "St-Prex", dtv: 1300 },
	{ ville: "St-Saphorin", dtv: 190 },
	{ ville: "Tannay", dtv: 420 },
	{ ville: "Territet", dtv: 230 },
	{ ville: "La Tour-de-Peilz", dtv: 2100 },
	{ ville: "Vallorbe", dtv: 830 },
	{ ville: "Veytaux-Chillon", dtv: 120 },
	{ ville: "Villeneuve", dtv: 2100 },
	{ ville: "Villette VD", dtv: 120 },
	{ ville: "Vufflens-la-Ville", dtv: 420 },
	{ ville: "Vevey", dtv: 21000 },
	{ ville: "Vevey-Funi", dtv: 70 },
	{ ville: "Yvonand", dtv: 640 },
	{ ville: "Yverdon-les-Bains", dtv: 16800 },
];

bb.generate({
	bindto: "#graph",
	data: {
		type: bar(),
		json: {
			2018: data.map((i) => i.dtv),
		},
	},
	axis: {
		rotated: true,
		x: {
			type: "category",
			categories: data.map((i) => i.ville),
		},
	},
	bar: {
		width: 1,
	},
});
