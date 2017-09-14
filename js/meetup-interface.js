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
      $('#js-meetup-list').append(`<h3> <a target="_blank" href="${bodyResults[i].event_url}">${bodyResults[i].group.name}: ${bodyResults[i].name}</a></h3>`);
      $('#js-meetup-list').append(`<li> RSVP: ${bodyResults[i].yes_rsvp_count} </li>`);
      $('#js-meetup-list').append(`<li> Waitlist: ${bodyResults[i].waitlist_count} </li>`);
      let date = new Date(bodyResults[i].time);
      $('#js-meetup-list').append('<li>' + dateFormat(date, "dddd, mmmm dS, yyyy, h:MM TT") + '</li>');
      if(bodyResults[i].venue !== undefined){
        $('#js-meetup-list').append(`<li> ${bodyResults[i].venue.name}, ${bodyResults[i].venue.address_1}, ${bodyResults[i].venue.city} </li>`);
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

  let promise5 = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.meetup.com/2/events?key=${apiKey}&sign=true&photo-host=public&group_urlname=NewTechSeattle&page=3`;

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

  promise5.then(function(response) {
    let body = JSON.parse(response);
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
  }, function(error) {
    $('#results').text(`There was an error processing your request: ${error.message}`);
  });

});
