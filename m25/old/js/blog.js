$(function () {
	var $content = $('#m25Blog');
	var data = {
		rss_url: 'https://medium.com/feed/m25-vc'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
		if (response.status == 'ok') {
			var output = '';
			$.each(response.items, function (k, item) {
				var visibleSm;
				if(k < 2){
					visibleSm = '';
				} else {
					visibleSm = ' visible-sm';
				}
				output += '<div class="card" style="width: 20rem;">';
				// output += '<div class="card-deck"><div class="col-lg-4 col-md-4 col-sm-6 col-xs-6' + visibleSm + '"><div class="card" style="width: 20rem;">';
				var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
				var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
				var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
				var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
				var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
				output += '<a class = "" href="'+ item.link + '"><img class="card-img-top" src="' + src + '" alt="Card image cap"><div class="card-block pt-2 px-1">';
				output += '<h5 class="card-title">' + "<span class = 'color_two'>&#8627; </span>"+item.title + '</a></h5>';
				// output += '</div></div></div></div>';
				// var today = new Date();
				// var date = new Date(item.pubDate).toISOString().slice(0, 10);

				// var date_diff_indays = function(date1, date2) {
				// 	dt1 = new Date(date1);
				// 	dt2 = new Date(date2);
				// 	return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
				// }
				// output += '<h6 class="name_two">'+date_diff_indays(date,today)+' days ago</h6>'
				output += '</div></div>';
				return k < 2;
			});
			$content.html(output);
		}
	});
});