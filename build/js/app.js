(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

$("#card1").click(function(){
  $("#card1").toggle();
  $("#showCard1").toggle();
  $("#showCard1").css("padding", "1px");
  $("#showCard1").css("border", "5px solid #ffff00");
  card1 += 1;
  if (card1 === card3){
    $("#showCard1").delay("fast").fadeOut();
    $("#showCard3").delay("fast").fadeOut();
  }
  // if (card3 != 1){
  //   $("#card1").delay(500).fadeToggle();
  //   $("#showCard1").delay(500).fadeToggle();
  // }
});

$("#showCard1").click(function(){
  $("#card1").toggle();
  $("#showCard1").toggle();
});

$("#card2").click(function(){
  $("#card2").toggle();
  $("#showCard2").toggle();
  card2 = 1;
  if ((card2 === 1) && (card4 === 1)){
    $("#showCard2").delay("fast").fadeOut();
    $("#showCard4").delay("fast").fadeOut();
  }
});

$("#showCard2").click(function(){
  $("#card2").toggle();
  $("#showCard2").toggle();
});

$("#card3").click(function(){
  $("#card3").toggle();
  $("#showCard3").toggle();
  card3 += 1;
  if (card1 === card3){
    $("#showCard3").delay("fast").fadeOut();
    $("#showCard1").delay("fast").fadeOut();
  }
});

$("#showCard3").click(function(){
  $("#card3").toggle();
  $("#showCard3").toggle();
});

$("#card4").click(function(){
  $("#card4").toggle();
  $("#showCard4").toggle();
  card4 = 1;
  if ((card2 === 1) && (card4 === 1)){
    $("#showCard2").delay("fast").fadeOut();
    $("#showCard4").delay("fast").fadeOut();
  }
});

$("#showCard4").click(function(){
  $("#card4").toggle();
  $("#showCard4").toggle();
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{}]},{},[1]);
