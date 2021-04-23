import L, { featureGroup } from "leaflet";
import bus from "./bus.json";

const map = L.map("map").setView([46.52382, 6.63759], 17);

L.tileLayer(
	"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",
	{
		attribution:
			'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: "abcd",
		minZoom: 0,
		maxZoom: 20,
		ext: "png",
	}
).addTo(map);

const icon = L.icon({
	iconUrl:
		"https://icons.iconarchive.com/icons/icons8/windows-8/48/Transport-Bus-2-icon.png",
	iconSize: [30, 30],
	iconAnchor: [15, 30],
});

L.geoJSON(bus, {
	pointToLayer: (feature, latlng) => L.marker(latlng, { icon }),
	onEachFeature: (feature, layer) => {
		layer.bindPopup(
			feature.properties.name ||
				feature.properties["addr:street"] ||
				feature.properties.uid
		);
	},
}).addTo(map);
