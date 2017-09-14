var apiKey = require('./../.env').apiKey;
var dateFormat = require('dateformat');


$(function() {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.meetup.com/2/events?key=${apiKey}&sign=true&photo-host=public&group_urlname=seattlejs&page=3`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);
    let bodyResults = body.results;
    console.log(bodyResults);
    for(let i = 0; i < bodyResults.length; i++) {
      $('#js-meetup').append(`<h3> <a target="_blank" href="${bodyResults[i].event_url}">${bodyResults[i].group.name}: ${bodyResults[i].name}</a> </h3>`);
      let date = new Date(bodyResults[i].time);
      $('#js-meetup').append('<li>' + dateFormat(date, "dddd, mmmm dS, yyyy, h:MM TT") + '</li>');
      $('#js-meetup').append(`<li> RSVP: ${bodyResults[i].yes_rsvp_count} </li>`);
      $('#js-meetup').append(`<li> Waitlist: ${bodyResults[i].waitlist_count} </li>`);
      if(bodyResults[i].venue !== undefined){
        $('#js-meetup').append(`<li> ${bodyResults[i].venue.name}, ${bodyResults[i].venue.address_1}, ${bodyResults[i].venue.city} </li>`);
      }

    }
  }, function(error) {
    $('#results').text(`There was an error processing your request: ${error.message}`);
  });

  let promise1 = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.meetup.com/2/events?key=${apiKey}&sign=true&photo-host=public&group_urlname=NET-Developers-Association-Eastside&page=3`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise1.then(function(response) {
    let body = JSON.parse(response);
    let bodyResults = body.results;
    console.log(bodyResults);
    for(let i = 0; i < bodyResults.length; i++) {
      $('#net-meetup').append(`<h3> <a target="_blank" href="${bodyResults[i].event_url}">${bodyResults[i].group.name}: ${bodyResults[i].name}</a> </h3>`);
      let date = new Date(bodyResults[i].time);
      $('#net-meetup').append('<li>' + dateFormat(date, "dddd, mmmm dS, yyyy, h:MM TT") + '</li>');
      $('#net-meetup').append(`<li> RSVP: ${bodyResults[i].yes_rsvp_count} </li>`);
      $('#net-meetup').append(`<li> Waitlist: ${bodyResults[i].waitlist_count} </li>`);
      if(bodyResults[i].venue !== undefined){
        $('#net-meetup').append(`<li> ${bodyResults[i].venue.name}, ${bodyResults[i].venue.address_1}, ${bodyResults[i].venue.city} </li>`);
      }
    }
  }, function(error) {
    $('#results').text(`There was an error processing your request: ${error.message}`);
  });

  let promise2 = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.meetup.com/2/events?key=${apiKey}&sign=true&photo-host=public&group_urlname=seajug&page=3`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise2.then(function(response) {
    let body = JSON.parse(response);
    let bodyResults = body.results;
    console.log(bodyResults);
    for(let i = 0; i < bodyResults.length; i++) {
      $('#java-meetup').append(`<h3> <a target="_blank" href="${bodyResults[i].event_url}">${bodyResults[i].group.name}: ${bodyResults[i].name}</a> </h3>`);
      let date = new Date(bodyResults[i].time);
      $('#java-meetup').append('<li>' + dateFormat(date, "dddd, mmmm dS, yyyy, h:MM TT") + '</li>');

      $('#java-meetup').append(`<li> RSVP: ${bodyResults[i].yes_rsvp_count} </li>`);
      $('#java-meetup').append(`<li> Waitlist: ${bodyResults[i].waitlist_count} </li>`);
      if(bodyResults[i].venue !== undefined){
        $('#java-meetup').append(`<li> ${bodyResults[i].venue.name}, ${bodyResults[i].venue.address_1}, ${bodyResults[i].venue.city} </li>`);
      }
    }
  }, function(error) {
    $('#results').text(`There was an error processing your request: ${error.message}`);
  });

  let promise3 = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.meetup.com/2/events?key=${apiKey}&sign=true&photo-host=public&group_urlname=Seattle-DAML&page=3`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise3.then(function(response) {
    let body = JSON.parse(response);
    let bodyResults = body.results;
    console.log(bodyResults);
    for(let i = 0; i < bodyResults.length; i++) {
      $('#data-meetup').append(`<h3> <a target="_blank" href="${bodyResults[i].event_url}">${bodyResults[i].group.name}: ${bodyResults[i].name}</a> </h3>`);
      let date = new Date(bodyResults[i].time);
      $('#data-meetup').append('<li>' + dateFormat(date, "dddd, mmmm dS, yyyy, h:MM TT") + '</li>');
      $('#data-meetup').append(`<li> RSVP: ${bodyResults[i].yes_rsvp_count} </li>`);
      $('#data-meetup').append(`<li> Waitlist: ${bodyResults[i].waitlist_count} </li>`);
      if(bodyResults[i].venue !== undefined){
        $('#data-meetup').append(`<li> ${bodyResults[i].venue.name}, ${bodyResults[i].venue.address_1}, ${bodyResults[i].venue.city} </li>`);
      }
    }
  }, function(error) {
    $('#results').text(`There was an error processing your request: ${error.message}`);
  });

  let promise4 = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.meetup.com/2/events?key=${apiKey}&sign=true&photo-host=public&group_urlname=techinterviews&page=10`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise4.then(function(response) {
    let body = JSON.parse(response);
    let bodyResults = body.results;
    console.log(bodyResults);
    for(let i = 0; i < bodyResults.length; i++) {
      if(bodyResults[i].yes_rsvp_count < 40) {
      $('#int-meetup').append(`<h3> <a target="_blank" href="${bodyResults[i].event_url}">${bodyResults[i].group.name}: ${bodyResults[i].name}</a> </h3>`);
      let date = new Date(bodyResults[i].time);
      $('#int-meetup').append('<li>' + dateFormat(date, "dddd, mmmm dS, yyyy, h:MM TT") + '</li>');
      $('#int-meetup').append(`<li> RSVP: ${bodyResults[i].yes_rsvp_count} </li>`);
      $('#int-meetup').append(`<li> Waitlist: ${bodyResults[i].waitlist_count} </li>`);
      if(bodyResults[i].venue !== undefined){
        $('#int-meetup').append(`<li> ${bodyResults[i].venue.name}, ${bodyResults[i].venue.address_1}, ${bodyResults[i].venue.city} </li>`);
      }
    }
  }
  }, function(error) {
    $('#results').text(`There was an error processing your request: ${error.message}`);
  });

  // let promise5 = new Promise(function(resolve, reject) {
  //   let request = new XMLHttpRequest();
  //   let url = `https://api.meetup.com/2/events?key=${apiKey}&sign=true&photo-host=public&group_urlname=NewTechSeattle&page=3`;
  //
  //   request.onload = function() {
  //     if (this.status === 200) {
  //       resolve(request.response);
  //     } else {
  //       reject(Error(request.statusText));
  //     }
  //   }
  //   request.open("GET", url, true);
  //   request.send();
  // });

  // promise5.then(function(response) {
  //   console.log(response);
  let response =
   {"results":[{"utc_offset":-25200000,"venue":{"country":"us","localized_country_name":"USA","city":"Seattle","address_1":"111 S. Jackson St.","name":"Galvanize","lon":-122.333664,"id":23866922,"state":"WA","lat":47.599174,"repinned":false},"headcount":0,"visibility":"public","waitlist_count":0,"created":1500068448000,"maybe_rsvp_count":0,"description":"<p><a href=\"https:\/\/www.newtechnorthwest.com\/new-tech-job-fair\/\">REGISTER HERE<\/a><\/p> <p>If you’ve ever been to a New Tech Northwest event and experienced our vibrant community, then you already know that this is going to be a great job and training fair. Grab an early ticket!<\/p> <p>You'll benefit from meeting companies of all sizes hiring tech, sales, marketing, operations people and more. There will be:<\/p> <p>- a large area with hiring companies and coding schools<br\/>- a large area for you to meet recruiters  <br\/>- a room for you to have professional recruiters review your resume and help you optimize it<br\/>- workshops to help you with your interview skills and resume building<\/p> <p>Participating companies include T-Mobile, General Assembly, Vancouver (BC) Economic Commission, ebay, Quantum, Affirma, BECU, Prime8 Consulting, HCL, Microsoft and others.<\/p> <p><a href=\"https:\/\/www.newtechjobfair.com\/jobs\/\">See a sample of the open job roles here<\/a> and at the bottom of this event description to help you connect with people who can help you to find your next great career opportunity.<\/p> <p><b>Agenda<\/b><\/p> <p><b>2:00 PM<\/b> – Registration Check-in begins – Event Opens; please come to registration at the hour you sign up for to ensure a flow of everyone getting in without having a long wait in line.<\/p> <p>Career Fair Employers will be in The Underground at Galvanize. Go here to meet area employers who currently have jobs to fill.<\/p> <p>If you are looking for a professional recruiter to help you find other great career options, go to the Recruiters’ Lounge on the main floor above The Underground.<\/p> <p><b>2:15 PM<\/b> – <i>First Workshop – How to Get the Most Out of the Job Fair<\/i><\/p> <p><b>3:15 PM <\/b>– <i>Second Workshop –Why You Should Really Consider a Developer Bootcamp<\/i><\/p> <p><b>4:15 PM<\/b> – <i>Third Workshop – Resumes &amp; Cover Letters<\/i><\/p> <p><b>5:15 PM <\/b>– <i>Fourth Workshop – Interviewing with Grace to Get the Offer<\/i><\/p> <p><b>6:00 PM <\/b>– <i>Event Closes.<\/i><\/p> <p>To get advance information as we add it, please <a href=\"http:\/\/newtechjobfair.us11.list-manage1.com\/subscribe?u=8ae4fbc46ed675f0f3eb5435c&amp;id=6ef8ca369f\">join the mailing list<\/a>!<\/p> <p>When you attend a New Tech event you agree to abide by <a href=\"https:\/\/www.newtechnorthwest.com\/code-of-conduct\/\">our code of conduct policy<\/a>.<\/p> <p><b>Want to have an employer recruiting table at this event? <a href=\"https:\/\/www.newtechnorthwest.com\/contact-us\/\">Contact us<\/a>!<\/b><\/p> <p><b>FEATURED JOBS<\/b><\/p> <p><b>eBay<\/b><br\/>Director, Marketing Data Science<br\/>Manager, Software Development<br\/>MTS 1, Software Engineer<br\/>Software Development Engineer Web<br\/>Applied Researcher \/ Data Scientist<\/p> <p><b>affirma<br\/><\/b>Software Engineer<br\/>Senior Software Engineer<br\/>Technical Project Manager<br\/>BI Developer<br\/>Senior BI Developer<br\/>Digital Marketing Specialist<br\/>Bi-lingual Mandarin\/English Support Analyst<\/p> <p><b>T-Mobile<br\/><\/b>Sr. Product Manager<br\/>Sr. UX Designer<br\/>Director, Product<br\/>Project Manager<br\/>Sales Assistant<br\/>Junior Python Developer<\/p> <p><b>General Assembly<br\/><\/b><a href=\"https:\/\/generalassemb.ly\/education\/web-development-immersive\">Web Development Immersive<br\/><\/a><a href=\"https:\/\/generalassemb.ly\/education\/user-experience-design-immersive\">User Experience Design Immersive<br\/><\/a><a href=\"https:\/\/generalassemb.ly\/education\/data-science-immersive\">Data Science Immersive<\/a><\/p> <p><b>BECU<br\/><\/b><a href=\"https:\/\/external-becu.icims.com\/jobs\/6948\/sr-quality-assurance-software-tester\/job?in_iframe=1\">Sr Quality Assurance Software Tester<\/a><br\/><a href=\"https:\/\/external-becu.icims.com\/jobs\/6946\/sr-enterprise-architect\/job?in_iframe=1\">Sr Enterprise Architect<\/a><br\/><a href=\"https:\/\/external-becu.icims.com\/jobs\/6933\/systems-engineer\/job?in_iframe=1\">Systems Engineer<\/a><br\/><a href=\"https:\/\/external-becu.icims.com\/jobs\/6920\/sr-information-security-program-engineer\/job?in_iframe=1\">Sr Information Security Program Engineer<\/a><br\/><a href=\"https:\/\/external-becu.icims.com\/jobs\/6850\/sr-domain-architect\/job?in_iframe=1\">Sr Cloud Architect<\/a><br\/><a href=\"https:\/\/external-becu.icims.com\/jobs\/6830\/information-security-program-engineer\/job?in_iframe=1\">Information Security Program Engineer<\/a><br\/><a href=\"https:\/\/external-becu.icims.com\/jobs\/6822\/systems-engineer\/job?in_iframe=1\">Systems Engineer (Applications Development)<\/a><br\/><a href=\"https:\/\/external-becu.icims.com\/jobs\/6730\/software-developer\/job?in_iframe=1\">Software Developer (full stack with a front end focus)<\/a><\/p>","event_url":"https:\/\/www.meetup.com\/NewTechSeattle\/events\/241730354\/","yes_rsvp_count":96,"duration":14400000,"name":"New Tech Job Fair","id":"241730354","time":1506114000000,"updated":1505423441000,"group":{"join_mode":"open","created":1304705301000,"name":"New Tech Seattle","group_lon":-122.33999633789062,"id":1825966,"urlname":"NewTechSeattle","group_lat":47.630001068115234,"who":"New Techies and Friends"},"status":"upcoming"},{"utc_offset":-25200000,"venue":{"country":"us","localized_country_name":"USA","city":"Seattle","address_1":"220 2nd Ave S, Seattle, WA 98104","name":"Impact Hub","lon":-122.331177,"id":24605254,"state":"WA","lat":47.60054,"repinned":false},"headcount":0,"visibility":"public","waitlist_count":0,"created":1481148570000,"maybe_rsvp_count":0,"description":"<p><a href=\"http:\/\/newtechnorthwest.com\">Purchase Your Ticket Now at NewTechNorthwest.com<\/a>. Tickets are $10 before the event and $20 at the door. RSVPing on this meetup page will not register you for the event.<\/p> <p><i>Be sure to <a href=\"https:\/\/www.newtechseattle.com\/subscribe-to-our-newsletter\/\">join our newsletter<\/a> for additional Seattle area tech info, event discounts and more!<\/i><\/p> <p><b>+ the crowd: <\/b><br\/>The Northwest’s smart, fun, creative, innovative tech community – software and application developers, company owners, startup founders, recruiters, hackers, job seekers, executives, investors, community leaders, and people who are new to the area.<\/p> <p><b>+ the speakers:<br\/><\/b>Founders, leaders &amp; innovators sharing their passion &amp; new tech through 5 minute presentations &amp; 3 minutes of your Q&amp;A. Presenters flow from early stage startups to enterprise companies.<\/p> <p><b>+ the format:<br\/><\/b>Connecting, food &amp; drinks &gt;community building &gt;community shoutouts &gt;sponsor shoutouts &gt;presentations &gt;afterparty<\/p> <p><b>+ the vibe:<br\/><\/b>Neighborhood block party – fun, friendly &amp; relaxed with complementary food &amp; a no host bar. You’ll laugh, smile, and have a fun night out with 350-500 Seattleites, 100-150 Eastsiders or 100 Tacomans.<\/p> <p><b>+ the experience:<br\/><\/b>Discover innovative, creative and inspirational new technology (or smarter use of old tech). Could be VR, IoT, Apps, Fintech, Mobiletech, Healthtech, Cloudtech… you get the idea.<\/p> <p><b>+the afterpary <br\/><\/b>Continue connecting to fantastic people in our community at <br\/><a href=\"http:\/\/www.fuelseattle.com\/menu\/\">Fuel Bar<\/a> after the show ends around 7:30pm.<\/p> <p><a href=\"http:\/\/newtechnorthwest.com\/\">Register Now at NewTechNorthwest.com<\/a><\/p> <p>======================================== <br\/><b>Thank You to Our Powered By Sponsor:<\/b><\/p> <p><a href=\"http:\/\/t-mobile.com\/\"><b>T-Mobile<\/b><\/a>: Wireless rule-breaker, proudly sponsoring New Tech Northwest.<\/p> <p>======================================== <br\/><b>Thank You to Our Terabyte Sponsors:<\/b><\/p> <p><a href=\"http:\/\/www.northeastern.edu\/\"><b>Northeastern University<\/b><\/a> ========================================<\/p> <p>Links to connect with New Tech Seattle:<\/p> <p><a href=\"https:\/\/www.newtechnorthwest.com\/\">Website<\/a><br\/><a href=\"https:\/\/www.newtechnorthwest.com\/the-story\/press\/\">Press<\/a><br\/><a href=\"http:\/\/twitter.com\/newtechnw\">Twitter<\/a><br\/><a href=\"https:\/\/www.facebook.com\/groups\/newtechnorthwest\">Facebook<\/a><br\/><a href=\"https:\/\/www.linkedin.com\/company\/seattle-tech-meetup\">LinkedIn<\/a><\/p> <p>========================================<\/p> <p>**If you would like to SPONSOR New Tech Seattle, Eastside, Tacoma or Portland <a href=\"https:\/\/www.newtechnorthwest.com\/contact-us\/\">contact us <\/a>!<\/p> <p><a href=\"http:\/\/newtechnorthwest.com\/\">Purchase Your Ticket Now at NewTechNorthwest.com<\/a><\/p>","how_to_find_us":"http:\/\/newtechnorthwest.com","event_url":"https:\/\/www.meetup.com\/NewTechSeattle\/events\/241389344\/","yes_rsvp_count":21,"name":"New Tech Seattle","id":"ltrcjmywnbnb","time":1507680000000,"updated":1503682929000,"group":{"join_mode":"open","created":1304705301000,"name":"New Tech Seattle","group_lon":-122.33999633789062,"id":1825966,"urlname":"NewTechSeattle","group_lat":47.630001068115234,"who":"New Techies and Friends"},"status":"upcoming"},{"utc_offset":-28800000,"venue":{"country":"us","localized_country_name":"USA","city":"Seattle","address_1":"220 2nd Ave S, Seattle, WA 98104","name":"Impact Hub","lon":-122.331177,"id":24605254,"state":"WA","lat":47.60054,"repinned":false},"headcount":0,"visibility":"public","waitlist_count":0,"created":1481148570000,"maybe_rsvp_count":0,"description":"<p><a href=\"http:\/\/newtechnorthwest.com\">Purchase Your Ticket Now at NewTechNorthwest.com<\/a>. Tickets are $10-$15 before the event and $20 at the door. RSVPing on this meetup page will not register you for the event.<\/p> <p><i>Be sure to <a href=\"https:\/\/www.newtechseattle.com\/subscribe-to-our-newsletter\/\">join our newsletter<\/a> for additional Seattle area tech info, event discounts and more!<\/i><\/p> <p>Join us to discover how Seattle organizations and companies like Microsoft are creating stronger and more productive workforces through diversity programs. You'll also hear how the City of Seattle, local organizations and the author of Women in Tech are helping minorities, women, their allies and companies that need them to build better futures together.<\/p> <p>+ the crowd:<br\/>The Northwest’s smart, fun, creative, innovative tech community – software and application developers, company owners, startup founders, recruiters, hackers, job seekers, executives, investors, community leaders, and people who are new to the area.<\/p> <p>+ the speakers:<br\/>Founders, leaders &amp; innovators sharing their passion &amp; new tech through 5 minute presentations &amp; 3 minutes of your Q&amp;A. Presenters flow from early stage startups to enterprise companies.<\/p> <p>+ the format:<br\/>Connecting, food &amp; drinks &gt;community building &gt;community shoutouts &gt;sponsor shoutouts &gt;presentations &gt;afterparty<\/p> <p>+ the vibe:<br\/>Neighborhood block party – fun, friendly &amp; relaxed with complementary food &amp; a no host bar. You’ll laugh, smile, and have a fun night out with 350-500 Seattleites, 100-150 Eastsiders or 100 Tacomans.<\/p> <p>+ the experience:<br\/>Discover innovative, creative and inspirational new technology (or smarter use of old tech). Could be VR, IoT, Apps, Fintech, Mobiletech, Healthtech, Cloudtech… you get the idea.<\/p> <p>+the afterpary<br\/>Continue connecting to fantastic people in our community at <a href=\"http:\/\/www.flatstickpub.com\/\">Flatstick Pub<\/a> after the show ends around 7:30pm.<\/p> <p><a href=\"http:\/\/newtechnorthwest.com\">Register Now at NewTechNorthwest.com<\/a><\/p> <p>========================================<br\/>Thank You to Our Terabyte Sponsors:<\/p> <p><a href=\"http:\/\/www.goldencompassrecruiting.com\/\">Golden Compass Recruiting<\/a><\/p> <p>========================================<\/p> <p>Links to connect with New Tech Seattle:<\/p> <p><a href=\"https:\/\/www.newtechnorthwest.com\/\">Website<\/a><br\/><a href=\"https:\/\/www.newtechnorthwest.com\/the-story\/press\/\">Press<\/a><br\/><a href=\"http:\/\/twitter.com\/newtechnw\">Twitter<\/a><br\/><a href=\"https:\/\/www.facebook.com\/groups\/newtechnorthwest\">Facebook<\/a><br\/><a href=\"https:\/\/www.linkedin.com\/company\/seattle-tech-meetup\">LinkedIn<\/a><\/p> <p>========================================<\/p> <p>**If you would like to SPONSOR New Tech Seattle, Eastside, Tacoma or Portland <a href=\"https:\/\/www.newtechnorthwest.com\/contact-us\/\">contact us <\/a>!<\/p> <p><a href=\"http:\/\/newtechnorthwest.com\/\">Purchase Your Ticket Now at NewTechNorthwest.com<\/a><\/p>","how_to_find_us":"http:\/\/newtechnorthwest.com","event_url":"https:\/\/www.meetup.com\/NewTechSeattle\/events\/242828587\/","yes_rsvp_count":4,"name":"New Tech Seattle","id":"ltrcjmywpbsb","time":1510707600000,"updated":1503683068000,"group":{"join_mode":"open","created":1304705301000,"name":"New Tech Seattle","group_lon":-122.33999633789062,"id":1825966,"urlname":"NewTechSeattle","group_lat":47.630001068115234,"who":"New Techies and Friends"},"status":"upcoming"}],"meta":{"next":"https:\/\/api.meetup.com\/2\/events?offset=1&sign=True&format=json&limited_events=False&group_urlname=NewTechSeattle&photo-host=public&page=3&fields=&key=b5311623334695830595d20386d7d57&order=time&desc=false&status=upcoming","method":"Events","total_count":4,"link":"https:\/\/api.meetup.com\/2\/events","count":3,"description":"Access Meetup events using a group, member, or event id. Events in private groups are available only to authenticated members of those groups. To search events by topic or location, see [Open Events](\/meetup_api\/docs\/2\/open_events).","lon":"","title":"Meetup Events v2","url":"https:\/\/api.meetup.com\/2\/events?offset=0&sign=True&format=json&limited_events=False&group_urlname=NewTechSeattle&photo-host=public&page=3&fields=&key=b5311623334695830595d20386d7d57&order=time&desc=false&status=upcoming","signed_url":"https:\/\/api.meetup.com\/2\/events?offset=0&format=json&limited_events=False&group_urlname=NewTechSeattle&photo-host=public&page=3&fields=&order=time&desc=false&status=upcoming&sig_id=196299896&sig=1155e9b4d10c37dfd62259073f1cef40e535e099","id":"","updated":1505423441000,"lat":""}};

  let promise5 = function(response) {
    // let body = JSON.parse(response);
    let body = response;
    let bodyResults = body.results;
    console.log(bodyResults);
    for(let i = 0; i < bodyResults.length; i++) {
      $('#tech-meetup').append(`<h3> <a target="_blank" href="${bodyResults[i].event_url}">${bodyResults[i].group.name}: ${bodyResults[i].name}</a> </h3>`);
      let date = new Date(bodyResults[i].time);
      $('#tech-meetup').append('<li>' + dateFormat(date, "dddd, mmmm dS, yyyy, h:MM TT") + '</li>');
      $('#tech-meetup').append(`<li> RSVP: ${bodyResults[i].yes_rsvp_count} </li>`);
      $('#tech-meetup').append(`<li> Waitlist: ${bodyResults[i].waitlist_count} </li>`);
      if(bodyResults[i].venue !== undefined){
        $('#tech-meetup').append(`<li> ${bodyResults[i].venue.name}, ${bodyResults[i].venue.address_1}, ${bodyResults[i].venue.city} </li>`);
      }
    }
  }
  promise5(response);
  // }, function(error) {
  //   $('#results').text(`There was an error processing your request: ${error.message}`);
  // });

});
