function getportfolioDetails(portfolio) {
	return `<a href="${portfolio.url}" target="_blank">
              <img class="item ${portfolio.class} isotope-item" src="img/portfolio/${portfolio.img}.jpg" style="position: absolute; left: 0px; top: 0px;">
            </a>`;

}
function showportfolio(portfolioDetails) {
	  console.log("p before");

	document.querySelector(".portco-thumb").innerHTML += portfolioDetails;
		  console.log("p after");

}
portfolio.map(getportfolioDetails).forEach(showportfolio);




