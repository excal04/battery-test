// script not yet working, fix later

navigator.getBattery().then(function() {
	
	// update initially
	updateBatteryStatus();
	
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
});

function updateBatteryStatus() {
	document.getQuerySelector("#charging").textContent = battery.charging ? "Yes" : "No";
	document.getQuerySelector("#level").textContent = battery.level * 100 +"%";
	document.getQuerySelector("#chargingTime").textContent = battery.chargingTime + " seconds";
	document.getQuerySelector("#dischargingTime").textContent = battery.dischargingTime + " seconds";

}



