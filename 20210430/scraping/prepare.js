import fs from "fs";
import $ from "cheerio";

const htmlFile = fs.readFileSync("products.html", "utf-8");

let data = [];

$(".thumbnail", htmlFile).each((index, element) => {
	let title = $(".title", element).text();
	let price = $(".price", element).text();
	let stars = $("p[data-rating]", element).attr("data-rating");

	data.push({
		product: title,
		prix: price,
		etoiles: stars,
	});
});

console.log(data);
// fs.writeFileSync("data.json", JSON.stringify(data), "utf-8");
