try{
	
	document.addEventListener('keyup',function(){
		var input = document.getElementById('field_email').value;
		document.getElementById('input_email').innerHTML = input;

		});


		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_password').value;
		document.getElementById('input_password').innerHTML = input;
		});

		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_text').value;
		document.getElementById('input_text').innerHTML = input;
		});


		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_name').value;
		document.getElementById('input_name').innerHTML = input;
		});


		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_middle').value;
		document.getElementById('input_middle').innerHTML = input;
		});


		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_number').value;
		document.getElementById('input_number').innerHTML = input;
		});

 

		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_date').value;
		document.getElementById('select_date').innerHTML = input;
		});

		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_address').value;
		document.getElementById('input_address').innerHTML = input;
		});




		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_zip').value;
		document.getElementById('input_zip').innerHTML = input;
		});


		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_gender').value;
		document.getElementById('input_gender').innerHTML = input;
		});










		
	
}

catch(e){
	console.log(e);
}