
// Disable form submissions if there are invalid fields


   $(document).ready(function(){
	 $('#imag1').waypoint(function(direction){
		 $('#imag1').addClass('animated fadeInLeft')
		 
	 },{
		 offset:'20%'
	 })
	 
	   
	 $('#imag2').waypoint(function(direction){
		 $('#imag2').addClass('animated fadeInRight')
		 
	 },{
		 offset:'20%'
	 })
	 
	   
	 $('#imag3').waypoint(function(direction){
		 $('#imag3').addClass('animated fadeInLeft')
		 
	 },{
		 offset:'20%'
	 })
	 
	 
	   
	 $('#imag4').waypoint(function(direction){
		 $('#imag4').addClass('animated fadeInRight')
		 
	 },{
		 offset:'20%'
	 })
	 
	 $('#demo').waypoint(function(direction){
		 $('#demo').addClass('animated jackInTheBox')
		 
	 })
	 
	 $('.new').waypoint(function(direction){
		 $('.new').addClass('animated rollIn')
		 
	 },{
		 offset:'40%'
	 })
	 
	 $('.jumb').waypoint(function(direction){
		 $('.jumb').addClass('animated rotateInDownLeft')
		 
	 },{
		 offset:'40%'
	 })
	 
	 
	 $('.jumb2').waypoint(function(direction){
		 $('.jumb2').addClass('animated rotateInDownRight')
		 
	 },{
		 offset:'40%'
	 })
	 
	  
	 $('#test').waypoint(function(direction){
		 $('#test').addClass('animated fadeInLeft')
		 
	 },{
		 offset:'50%'
	 })
	  });
              function ValidateForm(frm) {
	
if (frm.Name.value === "")
{ alert('Name is required.'); 
 frm.Name.focus();
 return false;}
	
if (frm.PhoneNumber.value === "") 
{ alert('Email address is required.'); 
 frm.FromEmailAddress.focus();
 return false; }
	
if 
	(frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) 
{ alert('Please enter a valid email address.'); 
 frm.FromEmailAddress.focus();
 return false; }
	
if 
	(frm.Comments.value ==="") 
{ alert('Please enter comments or questions.');
 frm.Comments.focus(); return false; }
return true; }
 
