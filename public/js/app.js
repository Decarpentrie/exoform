      $("#empty").hide();
      $("#empty2").hide();
      $("#empty3").hide();
      $("#empty4").hide();



function surligne(champ, erreur){

   if(erreur){
      champ.style.borderColor = "red";
  	 
   
   }	
   else{
      champ.style.borderColor = "";
   }
}

function verifName(champ){

   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      $("#empty").show();
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifLastName(champ){
   if(champ.value.length < 2 || champ.value.length > 25)
      {
         surligne(champ, true);
         $("#empty2").show();
         return false;
      }
      else
      {
         surligne(champ, false);
         return true;
      }

}

function verifMail(champ) {
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
       $("#empty3").show();
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifPass(champ) {
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
       $("#empty4").show();
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(event){

    var errors= {};

   if(validator.isEmpty("" + $('#prenom').val())){
    errors.gender ="error";
 }

 if(validator.isEmpty("" + $('#lastName').val())){
    errors.gender ="error";
 }

 if(validator.isEmpty("" + $('#mail').val())){
    errors.gender ="error";
 }

 return {errors: errors, isValid : $.isEmptyObject(errors)};

}



// $("button").on( 'click',function (event) {

//    var resultValid =  verifForm();
//    console.log(resultValid);
//    if(! resultValid.isValid){
//       event.preventDefault();
//       // alert("veuillez verifier les champs en rouge")
//    }
// })