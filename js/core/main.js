$(document).ready(function(){
	//global variables 
	var loggedIn, 
		firstN, 
		lastN, 
		hours, 
		minutes, 
		seconds, 
		checkInTime, 
		checkOutTime,
		difference;

	//declare reference to firebase
	var timestamp = new Firebase("https://timestamp.firebaseio.com");

	//jQuery buttons
	var $checkIn = $("#check-in");
	var $checkOut = $("#check-out");

	//when we check in, get our person and update his information
	$checkIn.click(function(){
		//turn this into an event later 
		//validateInput(); 

		firstN = $("#first-name").val();
		lastN = $("#last-name").val(); 

		if(timestamp).on('value', function(snapshot){

		});

		//callback that retrieves our data
		timestamp.child(firstN).on('value', function(snapshot){
			console.log(snapshot.val());
		}, function(errorObject){
			console.log('Something went wrong- oops!');
		});
	});
});
