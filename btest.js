// script not yet working, fix later

var battery = navigator.battery;

// navigator.getBattery does not seem to be working
// ran this on firefox
// navigator.getBattery().then(function() {

	// update initially
	updateBatteryStatus(navigator.battery);

	// event listeners for page update when battery status changes
	battery.addEventListener('chargingchange', function() {
		console.log("charging change event!! <" + this.charging + ">");
		updateBatteryStatus();
	});

	// another way to attach a listener
	battery.onlevelchange = function() {
		console.log("level change event!! <" + this.level + ">");
		updateBatteryStatus();
	};

	battery.addEventListener('chargingtimechange', function() {
		updateBatteryStatus();
	});

	battery.addEventListener('dischargingtimechange', function() {
		updateBatteryStatus();
	});
// });

function updateBatteryStatus() {
	var elem = document.querySelector("#charging");
	if (elem)
		elem.textContent = (battery.charging ? "Yes" : "No");
	elem = document.querySelector("#level");
	if (elem)
		elem.textContent = battery.level * 100 +"%";
	elem = document.querySelector("#chargingTime");
	if (elem)
		elem.textContent = battery.chargingTime + " seconds";
	elem = document.querySelector("#dischargingTime");
	if (elem)
		elem.textContent = battery.dischargingTime + " seconds";

}
