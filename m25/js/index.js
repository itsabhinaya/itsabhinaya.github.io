$(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });


function showModal(id) {
      $(".modal").modal('hide');
      $("#" + id).modal();
    };
    

var typed = new Typed('#typed', {
  strings: ["Invest in Midwest", "A Diverse Portfolio", "Reinventing VC"],    
  typeSpeed: 30,
  backSpeed: 30,
  startDelay: 500,
  loop: true,
  loopCount: Infinity,
  shuffle: true
  });



var team = [
    {name: "Victor Gutwein", title: "Managing Director & Board Member" ,desc: "Victor grew up in northwestern Indiana before moving to Chicago to study economics at the University of Chicago. Victor has a passionate history with startups, including a vending machine business and kick scooter company, along with being on the board of UChicago’s first student-run venture fund. A Kauffman Fellow (Class 22) and former leader in Hyde Park Angels, Victor founded M25 in 2015 and quickly grew it to become one of the most active venture firms in the region. Victor lives with his wife on the South Side of Chicago and loves staying active with running, biking, swimming, backpacking and any team sport you’ll let him join. If he can’t convince you to break a sweat with him though, he’ll usually succeed in getting you to try out a Euro-style board game (like Settlers of Catan) with his friends." ,twitter: "https://twitter.com/lalayak" ,medium: "https://medium.com/@lalayak" ,prev: "teamModal6" ,current: "teamModal1" ,next: "teamModal2" ,img: "img/team/victor.jpg"},
{name: "Mike Asem", title: "Director" ,desc: "While earning his B.A. at Purdue University, Mike championed The Anvil, which is now the largest student-run coworking space and startup incubator in the world. While at Purdue, Mike was also a Student Fellow for Chicago Ventures, and was the first and only student to be named OnePurdue Scholar for making the largest impact to the Purdue community by a single student. After graduating, Mike led business development at a nanotech startup born out of Purdue. Most recently, Mike served as Director of Collaborative Relationships for the Purdue Foundry, where he supported business development and talent related activities for startups in the Foundry’s portfolio. Aside from his passion for working with startups, Mike can often be found making fruit wine, rooting for Chicago sports, and hunting down great sushi." ,twitter: "https://twitter.com/DMikeAsem" ,medium: "https://medium.com/@dmikeasem" ,prev: "teamModal1" ,current: "teamModal2" ,next: "teamModal3" ,img: "img/team/mike.jpg"},
{name: "Thomas Eggleston", title: "Senior Associate" ,desc: "After finishing high school in Indianapolis, Thomas attended the University of Pennsylvania to play basketball. Before graduating at Penn, he transitioned to football as a wide receiver. His Indiana roots brought him back to the Midwest, where he worked as Director of National Accounts for Real Property Management, handling a $100MM portfolio of Fannie Mae and Freddie Mac rental homes throughout the Midwest. He then moved to CEB, a consulting firm in Chicago that represents 90% of the Fortune 500. From there he shifted to a real estate investment firm, where he revamped the property management strategy, sourced deals and acquisitions, and managed the hard money loan portfolio. Thomas lives on the North side of Chicago and in his free time enjoys staying active by playing sports." ,twitter: "https://twitter.com/T3ggleston" ,medium: "https://medium.com/@T3ggleston" ,prev: "teamModal2" ,current: "teamModal3" ,next: "teamModal4" ,img: "img/team/thomas.jpg"},
{name: "Abhinaya Konduru", title: "Analyst" ,desc: "Abhinaya attended University of Illinois at Chicago where she studied Finance and Mathematical Computer Science. While she was there, she led the finance student organization and co-founded the Portfolio Management Team which is now one of the largest organizations in the college. She was also a part of numerous programs to help increase digital literacy in the community by partnering with Google and Blue1647. When she finds a problem, she seeks to solve it by taking action. She started a YouTube series, Hustlepreneur, where she showcases up-and-coming entrepreneurs by documenting their day. She grew up in India and suburbs of Chicago. Currently, she lives in Little Italy where you can find her exploring this beautiful city with her camera." ,twitter: "https://twitter.com/itsabhinaya" ,medium: "https://medium.com/@itsabhinaya" ,prev: "teamModal3" ,current: "teamModal4" ,next: "teamModal5" ,img: "img/team/abhinaya.jpg"},
{name: "Katherine Schulman", title: "Associate" ,desc: "Katherine grew up in Chicago before moving to New York City to study comparative politics at Barnard College.  From there, she went on to join the fundraising team at The Earth Institute at Columbia University where she worked with individuals as well as institutional donors to fund scientific research in the clean energy space.  She is a recent graduate of the University of Chicago Booth School of Business, where she concentrated in entrepreneurship and finance.  While at Booth, she spent time working with a diverse array of food startups through The Hatchery, as well as in venture capital with the Clean Energy Trust.  In her free time, Katherine enjoys running and baking all sorts of cookies and cakes." ,twitter: "https://twitter.com/kpschulman" ,medium: "https://medium.com/@kpschulman" ,prev: "teamModal4" ,current: "teamModal5" ,next: "teamModal6" ,img: "img/team/katherine.jpg"}
];


function getTeamDetails(team) {
	return `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 text-center team-item">
          <a href="#${team.current}" class="team-link" data-toggle="modal" data-target="#${team.current}">
            <img src="${team.img}" class="rounded-circle" alt="">
          </a>
          <div class="team-caption">
            <h4>${team.name}</h4>
            <p class="text-muted">${team.title}</p>
          </div>
          <!-- Modal -->
          <div class="modal" id="${team.current}" tabindex="-1" role="dialog" aria-labelledby="teamModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="teamModalLabel">${team.name}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-left">
                  <h6 class="font-weight-bold">${team.title}</h6>
                  <p>${team.desc}
                  </p>
                  <p>
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x icon-twitter"></i>
                      <a href="${team.twitter}" target="_blank"><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></a>
                    </span>
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x icon-medium"></i>
                      <a href="${team.medium}" target="_blank"><i class="fa fa-medium fa-stack-1x fa-inverse"></i></a>
                    </span>
                  </p>
                </div>
                <div class="modal-footer">
                 <button type="button" class="btn btn-gray" onclick="showModal('${team.prev}')"><</button>
                 <button type="button" class="btn btn-gray" onclick="showModal('${team.next}')">></button>
                 <button type="button" class="btn btn-m25" data-dismiss="modal">Close</button>
               </div>
             </div>
           </div>
         </div>
        </div>`;

}
function showTeam(teamDetails) {
	document.querySelector(".team-thumb").innerHTML += teamDetails;
}
team.map(getTeamDetails).forEach(showTeam);


var advisors = [
	{name: "Steve Cittadine", title: "Energy" ,desc: "Steve has over 30 years of experience in the natural gas and energy industry.  His background spans from engineering, marketing, trading, and business development to executive management.  He most recently served as President, Storage and Fuels, at Southern Company Gas.  Here he was responsible for two business units – underground natural gas storage and liquified natural gas.  He has successfully lead several start-ups within this space including companies in the trading, midstream, and liquified natural gas areas.  He graduated from Purdue University with a degree in Mechanical Engineering and has an MBA from the University of Chicago in Finance.  Steve and his wife Kay live in suburban Chicago and have three children." ,prev: "advisorModal6" ,current: "advisorModal1" ,next: "advisorModal2" ,img: "img/advisors/steve.jpg"},
{name: "Pat East", title: "Marketing" ,desc: "Pat has 20 years of experience in online marketing, sales management, and executive leadership. His professional background spans B2C and B2B and includes management positions during the hyper-growth years of Author Solutions (2000-2004) and his current role as CEO of Hanapin Marketing (since 2004). In various positions for Author Solutions, he was responsible for author promotions, product development, and corporate marketing including lead generation via pay per click advertising. As head of Hanapin Marketing, he has overseen 13 consecutive years of profitability and double-digit revenue growth in 12 of those years. The company is a five-time Indiana Best Places to Work winner and a three-time Inc 5000 honoree. He taught one of the nation’s first search marketing courses at a nationally ranked SLIS program (school of library and information science) at Indiana University, and he’s been awarded the Entrepreneur of the Year Award from the Small Business Development Center. He is an avid angel investor, advising startups with high-growth potential primarily in the web/tech industries. He graduated with a B.A. in English from Wabash College, where he serves as Class Agent and previously served two terms on the National Alumni Board." ,prev: "advisorModal1" ,current: "advisorModal2" ,next: "advisorModal3" ,img: "img/advisors/pat.jpg"},
{name: "John Gorup", title: "Healthcare, Medicine" ,desc: "John is a fellowship trained, Orthopaedic Spinal surgeon living in West Lafayette, Indiana.   He is a founding member and the current President of Unity Healthcare, a 90 provider multi-specialty medical group with more than 600 employees.  Unity healthcare owns and operates its own ambulatory surgical, imaging, urgent care and occupational medicine centers.  He has presented nationally and internationally on various spinal topics.  He has numerous peer reviewed journal articles and has written several book chapters.  He is the recipient of the Russell A. Hibbs and John H. Moe awards.  John has had consulting relationships with some of the world’s largest medical implant companies including; Medtronic, Depuy-Synthes, Stryker and Biomet.  He holds several implant patents.  John received his Bachelors in Biology and Medical Doctorate from Tulane University in New Orleans.   He is married with four children.  His hobbies include travel, food and wine, fitness and reading." ,prev: "advisorModal2" ,current: "advisorModal3" ,next: "advisorModal4" ,img: "img/advisors/john.jpg"},
{name: "Cary Gutwein", title: "Consumer Products, Agriculture, Real Estate" ,desc: "Cary has senior management experience in consumer product, agricultural and real estate businesses. Currently he is a co-owner and President of Copper Moon Coffee, a specialty coffee roaster that markets to grocery and mass merchant retailers, foodservice distributors and independent coffee houses nationally. Additionally, Cary is also partner at Main Street Management, a growing real estate property management and services business based in Lafayette, Indiana. Prior to that he was a co-owner of Morning Song Wild Bird Food where his responsibilities involved overseeing the operations of six production facilities across four states. During his time with Morning Song the business grew by a multiple of 17x before being sold to a national CPG company in 2005. He received a Bachelor of Science in Business Administration from Valparaiso University. Cary is married to Wendy and they have four children." ,prev: "advisorModal3" ,current: "advisorModal4" ,next: "advisorModal5" ,img: "img/advisors/cary.jpg"},
{name: "Stan Gutwein", title: "SaaS, Mobile, Software" ,desc: "Stan began his career as a mechanical engineer at Caterpillar, Inc in Lafayette, Indiana. He began by developing software to automate CAT’s 3600 engine series custom equipment department. He then used his entrepreneurial calling by starting Sun Squeeze, Inc. where he imported, modified and distributed commercial citrus juice extractors throughout Indiana and Chicagoland for 5+ years before moving to India. In 2001 he co-founded IT Hands, Inc.  (www.ithands.com) which specializes in building web software and mobile apps. He currently spends much of the year in India, but calls Lafayette home." ,prev: "advisorModal4" ,current: "advisorModal5" ,next: "advisorModal6" ,img: "img/advisors/stan.jpg"}
];


function getAdvisorDetails(advisor) {
	return `<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 text-center advisors-item">
            <a href="#${advisor.current}" class="advisors-link" data-toggle="modal" data-target="#${advisor.current}">
              <img src="${advisor.img}" class="rounded-circle" alt="">
            </a>
            <div class="advisors-caption">
              <h4>${advisor.name}</h4>
              <p class="text-muted">${advisor.title}</p>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="${advisor.current}" tabindex="-1" role="dialog" aria-labelledby="advisorsModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="text-center" id="advisorsModalLabel">${advisor.name}</h5><br>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-left">
                    <h6 class="font-weight-bold">${advisor.title}</h6>
                    <p>${advisor.desc}</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-gray" onclick="showModal('${advisor.prev}')"><</button>
                    <button type="button" class="btn btn-gray" onclick="showModal('${advisor.next}')">></button>
                    <button type="button" class="btn btn-m25" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

}
function showAdvisors(advisorsDetails) {
	document.querySelector(".advisors-thumb").innerHTML += advisorsDetails;
}
advisors.map(getAdvisorDetails).forEach(showAdvisors);




