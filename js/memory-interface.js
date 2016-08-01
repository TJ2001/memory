
$("#card1").click(function(){
  $("#card1").toggle();
  $("#showCard1").toggle();
  $("#showCard1").css("padding", "1px");
  $("#showCard1").css("border", "5px solid #ffff00");
  card1 += 1;
  if ((card1 === 1) && (card3 === 1)){
    $("#showCard1").delay("fast").fadeOut();
    $("#showCard3").delay("fast").fadeOut();
  }
  if (card3 != 1){
    $("#card1").delay(500).fadeToggle();
    $("#showCard1").delay(500).fadeToggle();
  }
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
  card3 = 1;
  if ((card1 === 1) && (card3 === 1)){
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
