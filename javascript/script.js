/*function send() {
    
    alert("thank you for contacting us");
}*/

var email = document.getElementById("email");
var fname = document.getElementById("name");
var message = document.getElementById("area");



document.getElementById("sendbutton").addEventListener("click", function () { 
    
  //alert('Hello ' + fname.value  +' thank you for contacting us');
  if (fname.value == "")                                  
  { 
      window.alert("Please enter your name."); 
      name.focus(); 
      return false; 
  }
       
  else if(email.value == "")                                   
  { 
      window.alert("Please enter a valid e-mail address."); 
      email.focus(); 
      return false; 
  } 
   else {
  document.getElementById("message").innerHTML='Hello ' + fname.value  +' ! thank you for contacting us.';
}
 
  
})



$(document).ready(function() {
    $(".designer,.design").click(function() {
      $("#designer").toggle();

      $(".design").toggle();
    });
    $(".dvlpmnt,.dvlpmt").click(function() {
      $("#dvlpmnt").toggle();
        $(".dvlpmt").toggle();
      });
      $(".management,.mngmt").click(function() {
        $("#management").toggle();
        $(".mngmt").toggle();
      });
      $('.lay').hide();
      $('#im').animate({
          opacity:1
          
      });
  
      $('#im').hover(function() {
          $(this).stop().animate({opacity:.3},100);
          $('.lay').fadeIn();
  
      }, function() {
          $(this).stop().animate({opacity:1},500)
          $('.lay').fadeOut();
      });
      $('.layi').hide();
      $('#ima').animate({
          opacity:1
          
      });
  
      $('#ima').hover(function() {
          $(this).stop().animate({opacity:.4},200);
          $('.layi').fadeIn();
  
      }, function() {
          $(this).stop().animate({opacity:1},500)
          $('.layi').fadeOut();
      });
  
      $('.laya').hide();
      $('#imaa').animate({
          opacity:1
          
      });
  
      $('#imaa').hover(function() {
          $(this).stop().animate({opacity:.4},200);
          $('.laya').fadeIn();
  
      }, function() {
          $(this).stop().animate({opacity:1},500)
          $('.laya').fadeOut();
      });
      $('.layo').hide();
      $('#imag').animate({
          opacity:1
          
      });
  
      $('#imag').hover(function() {
          $(this).stop().animate({opacity:.4},200);
          $('.layo').fadeIn();
  
      }, function() {
          $(this).stop().animate({opacity:1},500)
          $('.layo').fadeOut();
      });
      $('.laye').hide();
      $('#pi').animate({
          opacity:1
          
      });
  
      $('#pi').hover(function() {
          $(this).stop().animate({opacity:.4},200);
          $('.laye').fadeIn();
  
      }, function() {
          $(this).stop().animate({opacity:1},500)
          $('.laye').fadeOut();
      });
      $('.layu').hide();
      $('#pic').animate({
          opacity:1
          
      });
  
      $('#pic').hover(function() {
          $(this).stop().animate({opacity:.4},200);
          $('.layu').fadeIn();
  
      }, function() {
          $(this).stop().animate({opacity:1},500)
          $('.layu').fadeOut();
      });
      $('.layx').hide();
      $('#pict').animate({
          opacity:1
          
      });
  
      $('#pict').hover(function() {
          $(this).stop().animate({opacity:.4},200);
          $('.layx').fadeIn();
  
      }, function() {
          $(this).stop().animate({opacity:1},500)
          $('.layx').fadeOut();
      });
      $('.layz').hide();
      $('#pictu').animate({
          opacity:1
          
      });
  
      $('#pictu').hover(function() {
          $(this).stop().animate({opacity:.4},200);
          $('.layz').fadeIn();
  
      }, function() {
          $(this).stop().animate({opacity:1},500)
          $('.layz').fadeOut();
      });
  });
 