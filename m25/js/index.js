$(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });



$('#form_sub').hide();
$('[data-toggle="tooltip"]').tooltip(); 


$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

function showModal(id) {
      $(".modal").modal('hide');
      $("#" + id).modal();
    };
    

var typed = new Typed('#typed', {
  strings: ["Investing in Chicago, IL.", "Investing in Indianapolis,IN.","Investing in West Lafayette, IN.","Investing in Milwaukee, WI.","Investing in Pittsburgh, PA.","Investing in Grand Rapids, MI.", "Investing in Cincinnati, OH."],    
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 500,
  loop: true,
  loopCount: Infinity,
  shuffle: true
  });



var team = [

{name: "Victor Gutwein", title: "Managing Director & Board Member" ,desc: "Victor grew up in northwestern Indiana before moving to Chicago to study economics at the University of Chicago. Victor has a passionate history with startups, including a vending machine business and kick scooter company, along with being on the board of UChicago’s first student-run venture fund. A Kauffman Fellow (Class 22) and former leader in Hyde Park Angels, Victor founded M25 in 2015 and quickly grew it to become one of the most active venture firms in the region. Victor lives with his wife on the South Side of Chicago and loves staying active with running, biking, swimming, backpacking and any team sport you’ll let him join. If he can’t convince you to break a sweat with him though, he’ll usually succeed in getting you to try out a Euro-style board game (like Settlers of Catan) with his friends." ,twitter: "https://twitter.com/lalayak" ,medium: "https://medium.com/@lalayak" ,prev: "teamModal6" ,current: "teamModal1" ,next: "teamModal2" ,img: "img/team/victor.jpg"},
{name: "Mike Asem", title: "Director" ,desc: "While earning his B.A. at Purdue University, Mike championed The Anvil, which is now the largest student-run coworking space and startup incubator in the world. While at Purdue, Mike was also a Student Fellow for Chicago Ventures, and was the first and only student to be named OnePurdue Scholar for making the largest impact to the Purdue community by a single student. After graduating, Mike led business development at a nanotech startup born out of Purdue. Most recently, Mike served as Director of Collaborative Relationships for the Purdue Foundry, where he supported business development and talent related activities for startups in the Foundry’s portfolio. Aside from his passion for working with startups, Mike can often be found making fruit wine, rooting for Chicago sports, and hunting down great sushi." ,twitter: "https://twitter.com/DMikeAsem" ,medium: "https://medium.com/@dmikeasem" ,prev: "teamModal1" ,current: "teamModal2" ,next: "teamModal3" ,img: "img/team/mike.jpg"},
{name: "Abhinaya Konduru", title: "Analyst" ,desc: "Abhinaya attended University of Illinois at Chicago where she studied Finance and Mathematical Computer Science. While she was there, she led the finance student organization and co-founded the Portfolio Management Team which is now one of the largest organizations in the college. She was also a part of numerous programs to help increase digital literacy in the community by partnering with Google and Blue1647. When she finds a problem, she seeks to solve it by taking action. She started a YouTube series, Hustlepreneur, where she showcases up-and-coming entrepreneurs by documenting their day. She grew up in India and suburbs of Chicago. Currently, she lives in Little Italy where you can find her exploring this beautiful city with her camera." ,twitter: "https://twitter.com/itsabhinaya" ,medium: "https://medium.com/@itsabhinaya" ,prev: "teamModal2" ,current: "teamModal3" ,next: "teamModal4" ,img: "img/team/abhinaya.jpg"},
{name: "Katherine Schulman", title: "Associate" ,desc: "Katherine grew up in Chicago before moving to New York City to study comparative politics at Barnard College.  From there, she went on to join the fundraising team at The Earth Institute at Columbia University where she worked with individuals as well as institutional donors to fund scientific research in the clean energy space.  She is a recent graduate of the University of Chicago Booth School of Business, where she concentrated in entrepreneurship and finance.  While at Booth, she spent time working with a diverse array of food startups through The Hatchery, as well as in venture capital with the Clean Energy Trust.  In her free time, Katherine enjoys running and baking all sorts of cookies and cakes." ,twitter: "https://twitter.com/kpschulman" ,medium: "" ,prev: "teamModal3" ,current: "teamModal4" ,next: "teamModal5" ,img: "img/team/katherine.jpg"},
{name: "Paul Meier", title: "Associate" ,desc: "Paul earned his Bachelor of Business Administration degree from the University of Wisconsin-Madison, studying abroad at the Hong Kong University of Science and Technology. After graduating, he worked in an operational role for a travel industry start-up in Uruguay before returning to his native Milwaukee. There, he spent ten years in a variety of financial management roles with operators in the industrial automation and manufacturing industries before earning his MBA from The University of Chicago Booth School of Business. Most recently, Paul has supported business development activities for a hospitality ecommerce start-up. He and his wife Sara are intrepid travelers, and they live in Chicago’s Streeterville neighborhood with their beloved Boston Terrier, Lou. In his free time, Paul enjoys playing drums, snowboarding, history, film, and keeping up with Wisconsin sports teams." ,twitter: "https://twitter.com/paullmeier" ,medium: "" ,prev: "teamModal4" ,current: "teamModal5" ,next: "teamModal6" ,img: "img/team/paul.jpg"},
{name: "Jenny Shao", title: "Student Analyst" ,desc: "Jenny is an undergraduate student attending the University of Chicago for Economics and Visual Arts. On campus, she is a board member of Women in Business, participates in Prism Consulting’s pro-bono division, and plays cello in the University Symphony Orchestra. While in high school, she created and organized TEDxWestLafayetteHS, a TEDx conference, from scratch. In her downtime, Jenny can be found playing and arranging music or doodling absentmindedly." ,twitter: "" ,medium: "" ,prev: "teamModal5" ,current: "teamModal6" ,next: "teamModal1" ,img: "img/team/jenny.jpg"}
];


function getTeamDetails(team) {
  team_twitter = ""
  team_medium = ""

  if (team.twitter){
    team_twitter = `<span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x icon-twitter"></i>
                      <a href="${team.twitter}" target="_blank"><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></a>
                    </span>`
  }
  if(team.medium){
    team_medium = `<span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x icon-medium"></i>
                      <a href="${team.medium}" target="_blank"><i class="fa fa-medium fa-stack-1x fa-inverse"></i></a>
                    </span>`
  }

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
                    ${team_twitter}
                    ${team_medium}
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

{name: "Doug Drury", title: "<b>Board Member</b>" ,desc: "Doug Drury has had a range of experience in financial markets since 1987. In 2002, Doug became the principal owner of XR Trading, a Chicago based proprietary trading firm. Prior to that he was a CPA, receiving his Masters of Science in Tax from DePaul University and his Bachelors of Science in Business Administration from University of Louisville. Doug lives in Wheaton, IL where he enjoys spending time with his wife and four grown children, the Bible, technology, finance, and basketball." ,prev: "advisorModal14" ,current: "advisorModal1" ,next: "advisorModal2" ,img: "img/advisors/doug_drury.jpg"},
{name: "Stuart Gutwein", title: "<b>Board Member</b>" ,desc: "Stuart is a lawyer, active in real estate services and an angel investor.  Stuart is a co-founder of Gutwein Law, a business law firm with offices in Lafayette and Indianapolis, Indiana.  In his law practice, Stuart focuses on serving as outside general counsel to emerging and growing businesses, including formation, capital raising and other financing transactions, operational issues and mergers and acquisitions.  Stuart counsels clients in a variety of industries.  Together with Brent Gutwein, Stuart co-founded Boulder Group, LLC, a real estate capital and asset management company and Granite Student Living, a property management company.  Stuart is a member of the Alternative & Direct Investment Securities Association (ADISA).  Prior to founding Gutwein Law, Stuart was an associate in the business division of a large Indianapolis law firm. Stuart received a Bachelor of Science in Business Management from The Krannert School of Management of Purdue University and his law degree from The Indiana University School of Law – Indianapolis. Stuart is married to Alivia and they have four children, Ava, Hudson, Lukas and Mac. Stuart enjoys running, crossfit, baseball, and backpacking." ,prev: "advisorModal1" ,current: "advisorModal2" ,next: "advisorModal3" ,img: "img/advisors/stuart_gutwein.jpg"},
{name: "Brent Gutwein", title: "<b>Board Member</b>" ,desc: "Brent Gutwein currently lives in West Lafayette, Indiana and is the managing partner of real estate management company Granite Student Living. Prior to founding Granite, Brent owned AAG Venture, LLC, a row crop farming operation and grain elevator that sourced and serviced the commodity needs of Morning Song Wild Bird Food. In addition, he was the CEO of Fred Gutwein Family Citrus, LLC, a Florida based family citrus operation for 10 years. Brent managed the production and finances of the citrus operation for Fred Gutwein Family Citrus, LLC as well as the strategic liquidation of the underlying real estate. Brent is also co-founder and President of Boulder Group – a real estate capital management firm providing individuals and institutions with professional, dedicated and focused attention to real estate deals. Brent received his Bachelor of Science and Masters in Business Administration from the Krannert School of Management of Purdue University. He holds an Indiana real estate broker’s license. Brent is married with three children. He is an avid runner and recently achieved his goal of running the equivalent number of miles as jaunting around the equator, hence he has decided to turn around and head back home…" ,prev: "advisorModal2" ,current: "advisorModal3" ,next: "advisorModal4" ,img: "img/advisors/brent_gutwein.jpg"},
{name: "Nathan Huber", title: "Healthcare, Medicine" ,desc: "Nathan is a surgeon and a member of Unity Healthcare, a physician owned multi-specialty group. In his general surgery practice Nathan focuses on acute care and minimally invasive abdominal surgery. Nathan has participated in numerous areas of medical research including tissue engineering, medical device testing and clinical and basic science studies. Nathan received his Bachelor of Science in Chemical Engineering at Purdue University and his medical degree from The Indiana University School of Medicine. He completed general surgery residency at the University of Cincinnati including two years of dedicated research in the field of the immune response to traumatic injuries." ,prev: "advisorModal3" ,current: "advisorModal4" ,next: "advisorModal5" ,img: "img/advisors/nathan_huber.jpg"},
{name: "David Meiss", title: "Agriculture, Insurance" ,desc: "David resides on his family’s 4th generation Centennial Farm in Central Illinois. His first day at work was the day he began to walk as he tagged beside his father learning the life lessons that growing up on a farm provide. He was educated through his father’s example of hard work, experience, and perseverance. At the age of 18 he purchased the swine production enterprise from his father and just 2 years later invested in his first real estate purchase of farmland. David has served on the local school board helping to steer it through a consolidation process, serves on the local township board, and has been on church advisory councils. He is a Director of the joint Illinois Farm Bureau and Country Financial Board, which includes Country Trust Bank, and currently serves as the Audit Chairman. David and his wife Debbie have enjoyed 35 years together raising a family and farming. They are blessed with three children, two daughters in law, and three grandchildren. After years of basketball and hog farming David’s knees retired, so today his focus is on swimming, calisthenics, and bicycling. On a pleasant evening you will find him enjoying a relaxing cruise on the Harley around farm country." ,prev: "advisorModal4" ,current: "advisorModal5" ,next: "advisorModal6" ,img: "img/advisors/david_meiss.jpg"},
{name: "Daryl Starr", title: "Agriculture, SaaS, Startup Acceleration and Early Exits" ,desc: "Daryl is a serial entrepreneur and investor.  Daryl is the founder of LEV Capital Management, a friends and family hybrid fund based in Lafayette, Indiana. LEV invests in both high potential startups as well as traditional businesses with an enabling technology thesis across the country.  Daryl has operational experience as a serial founder, acquisition experience with minor roll ups, and national recognition in precision agriculture, including a successful exit in 2014.  Daryl also consults with Purdue Foundry and is involved with Purdue Ventures’ Ag-Celerator fund. Daryl also serves as treasurer for Bethesda Outreach Ministries International, a non-profit aimed at serving AIDS effected South African orphans.  Daryl was also cofounder of Crosswalk Commons, a non-profit organization focused on cross cultural, international student housing. Daryl double majored in Business Management from The Krannert School of Management and English Literature from Purdue University.  Daryl is married to Allison and they have three daughters, Anna, Alexa, and Gabrielle. Daryl enjoys audio books, boating and working." ,prev: "advisorModal5" ,current: "advisorModal6" ,next: "advisorModal7" ,img: "img/advisors/daryl_starr.jpg"},
{name: "Ron Whistler", title: "Real Estate, Construction" ,desc: "Ron Whistler is the owner and President of Land Quest Real Estate. His firm specializes in Land Development as well as  Commercial and Multi Family construction in and around the greater Lafayette Indiana area since 1988. Ron also owns a niche financial company called ROCIN Financial, where he loans capital to small business and beginning construction firms that could not otherwise find capital. He has been married for 38 years to Cindy and has 2 children and 6 grandchildren. His hobbies are boating on the Gulf of Mexico,  golf (which he is not very good at) and hanging out with all of his grand kids." ,prev: "advisorModal6" ,current: "advisorModal7" ,next: "advisorModal8" ,img: "img/advisors/ron_whistler.jpg"},
{name: "Mike Witteveen", title: "Engineering, Construction, Process and Operations" ,desc: "Michael J. Witteveen, an accredited LEED professional, has been a leader in the construction industry since 1981. As President of Tecton Construction Management, Inc. he oversees all operations of the company. Witteveen has created new management systems, and developed new technologies in the construction business, including his trademarked Tecton “Filtering™” system. Previously, during the 90s, he was hired as General Manager of an INC 500 Company to improve cash flow in preparation for its IPO. He reorganized the company, improving operations in every area. Prior to that, as General Manager of a large trade contractor, he supervised over 600 constructions jobs a year and 360 weekly maintenance contracts. In the 1980s Witteveen worked at Turner Construction Co., and was the youngest Division Manager in the entire country. Witteveen has put this expertise to use as an angel investor by developing the first privately-owned, business incubator, graduate facility in Purdue University’s High Technology Research Park. He is also an original angel investor in Griffin Analytical Technologies, a specialty instrument company. A graduate of Valparaiso University, Bachelors of Science in Civil Engineering. He is a past president of YMCA Board of Directors, Downtown Business Center, and a founding member of the task force that helped bring fiber optics to Tippecanoe County. He is an amateur woodworker, holds a black belt in Taekwondo and is a nationally ranked Masters swimmer. Witteveen lives in Lafayette, IN, with his wife Alice. They have four grown children." ,prev: "advisorModal7" ,current: "advisorModal8" ,next: "advisorModal9" ,img: "img/advisors/mike_witteveen.jpg"},
{name: "Tom Gutwein", title: "Healthcare, Medicine" ,desc: "Tom is a 1990 graduate of the Indiana University School of Medicine and 1993 class at IU/Methodist Hospital Residency in Emergency Medicine. An Emergency Physician since 1993, he has been practicing clinical medicine and adding administrative responsibility as President of Professional Emergency Physicians since 1998.  PEP is a group of 70 practicing physicians and 35 physician assistants covering 11 emergency departments in Northeast Indiana.   He is currently the Emergency Department Medical Director at Parkview Regional Medical Center in Fort Wayne Indiana, and is a past president of Indiana chapter of the American College of Emergency Physicians and Parkview Hospital Medical Staff.  He continues to serve as the service line clinical director for EMS/Emergency Medicine at Parkview Health which now sees over 200,000 emergency department patients annually.  Tom has lived in Fort Wayne Indiana for over 20 years, and loves to spend time with his wife Sally and 5 children aged 19-26 when he is able.  He also enjoys running, bicycle riding, triathalons, and serving as a volunteer and board member at another Matthew 25, a free health clinic for indigent people.  “To help others make the world a better place” is a key driving factor in why Tom participates in M25." ,prev: "advisorModal8" ,current: "advisorModal9" ,next: "advisorModal10" ,img: "img/advisors/tom_gutwein.jpg"},
{name: "Pat East", title: "Marketing" ,desc: "Pat has 20 years of experience in online marketing, sales management, and executive leadership. His professional background spans B2C and B2B and includes management positions during the hyper-growth years of Author Solutions (2000-2004) and his current role as CEO of Hanapin Marketing (since 2004). In various positions for Author Solutions, he was responsible for author promotions, product development, and corporate marketing including lead generation via pay per click advertising. As head of Hanapin Marketing, he has overseen 13 consecutive years of profitability and double-digit revenue growth in 12 of those years. The company is a five-time Indiana Best Places to Work winner and a three-time Inc 5000 honoree. He taught one of the nation’s first search marketing courses at a nationally ranked SLIS program (school of library and information science) at Indiana University, and he’s been awarded the Entrepreneur of the Year Award from the Small Business Development Center. He is an avid angel investor, advising startups with high-growth potential primarily in the web/tech industries. He graduated with a B.A. in English from Wabash College, where he serves as Class Agent and previously served two terms on the National Alumni Board." ,prev: "advisorModal9" ,current: "advisorModal10" ,next: "advisorModal11" ,img: "img/advisors/pat_east.jpg"},
{name: "Steve Cittadine", title: "Energy" ,desc: "Steve has over 30 years of experience in the natural gas and energy industry.  His background spans from engineering, marketing, trading, and business development to executive management.  He most recently served as President, Storage and Fuels, at Southern Company Gas.  Here he was responsible for two business units – underground natural gas storage and liquified natural gas.  He has successfully lead several start-ups within this space including companies in the trading, midstream, and liquified natural gas areas.  He graduated from Purdue University with a degree in Mechanical Engineering and has an MBA from the University of Chicago in Finance.  Steve and his wife Kay live in suburban Chicago and have three children." ,prev: "advisorModal10" ,current: "advisorModal11" ,next: "advisorModal12" ,img: "img/advisors/steve_cittadine.jpg"},
{name: "John Gorup", title: "Healthcare, Medicine" ,desc: "John is a fellowship trained, Orthopaedic Spinal surgeon living in West Lafayette, Indiana.   He is a founding member and the current President of Unity Healthcare, a 90 provider multi-specialty medical group with more than 600 employees.  Unity healthcare owns and operates its own ambulatory surgical, imaging, urgent care and occupational medicine centers.  He has presented nationally and internationally on various spinal topics.  He has numerous peer reviewed journal articles and has written several book chapters.  He is the recipient of the Russell A. Hibbs and John H. Moe awards.  John has had consulting relationships with some of the world’s largest medical implant companies including; Medtronic, Depuy-Synthes, Stryker and Biomet.  He holds several implant patents.  John received his Bachelors in Biology and Medical Doctorate from Tulane University in New Orleans.   He is married with four children.  His hobbies include travel, food and wine, fitness and reading." ,prev: "advisorModal11" ,current: "advisorModal12" ,next: "advisorModal13" ,img: "img/advisors/john_gorup.jpg"},
{name: "Cary Gutwein", title: "Consumer Products, Agriculture, Real Estate" ,desc: "Cary has senior management experience in consumer product, agricultural and real estate businesses. Currently he is a co-owner and President of Copper Moon Coffee, a specialty coffee roaster that markets to grocery and mass merchant retailers, foodservice distributors and independent coffee houses nationally. Additionally, Cary is also partner at Main Street Management, a growing real estate property management and services business based in Lafayette, Indiana. Prior to that he was a co-owner of Morning Song Wild Bird Food where his responsibilities involved overseeing the operations of six production facilities across four states. During his time with Morning Song the business grew by a multiple of 17x before being sold to a national CPG company in 2005. He received a Bachelor of Science in Business Administration from Valparaiso University. Cary is married to Wendy and they have four children." ,prev: "advisorModal12" ,current: "advisorModal13" ,next: "advisorModal14" ,img: "img/advisors/cary_gutwein.jpg"},
{name: "Stan Gutwein", title: "SaaS, Mobile, Software" ,desc: "Stan began his career as a mechanical engineer at Caterpillar, Inc in Lafayette, Indiana. He began by developing software to automate CAT’s 3600 engine series custom equipment department. He then used his entrepreneurial calling by starting Sun Squeeze, Inc. where he imported, modified and distributed commercial citrus juice extractors throughout Indiana and Chicagoland for 5+ years before moving to India. In 2001 he co-founded IT Hands, Inc.  (www.ithands.com) which specializes in building web software and mobile apps. He currently spends much of the year in India, but calls Lafayette home." ,prev: "advisorModal13" ,current: "advisorModal14" ,next: "advisorModal1" ,img: "img/advisors/stan_gutwein.jpg"}
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
  console.log("before");
	document.querySelector(".advisors-thumb").innerHTML += advisorsDetails;
    console.log("after");

}
advisors.map(getAdvisorDetails).forEach(showAdvisors);


var latestInvest = portfolio.slice(0,4);

function getLatestInvestDetails(investment) {
  return `<a href="${investment.url}" target="_blank">
              <img class="item ${investment.class} isotope-item" src="img/portfolio/${investment.img}.jpg" style="left: 0px; top: 0px; padding-left: 15px;">
            </a>`;

}

function showLatestInvest(latestInvestDetails) {
    console.log("lat before");

  document.querySelector(".latest-thumb").innerHTML += latestInvestDetails;
      console.log("lat after");

}

latestInvest.map(getLatestInvestDetails).forEach(showLatestInvest);



