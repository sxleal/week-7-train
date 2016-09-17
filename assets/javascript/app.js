//Initialize firebase
  var config = {
    apiKey: "AIzaSyCh6tYG6R2tiL-TcJUJ5sb16uwhWvWlw-U",
    authDomain: "trainschedule-c2036.firebaseapp.com",
    databaseURL: "https://trainschedule-c2036.firebaseio.com",
    storageBucket: "trainschedule-c2036.appspot.com",
    messagingSenderId: "563705555062"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //Button to add a train on the schedule
  $("#addTrainBtn").on("click",function() {

  	//Grab user input
  	var trainName = $("#trainNameInput").val().trim();
  	var trainDestination = $("#destinationInput").val().trim();
  	var startTime = $("#startInput").val().trim();
  	var frequency = $("#rateInput").val().trim();

  	//Creates local "temp" object for holding train data
  	var newTrain = {
  		name:trainName,
  		destination:trainDestination,
  		start:startTime,
  		rate:frequency
  	}

  	//Uploads train data to the database
  	database.ref().push(newTrain);

  	//Logs everything to the console
  	console.log(newTrain.name);
  	console.log(newTrain.destination);
  	console.log(newTrain.start);
  	console.log(newTrain.rate);

  	//Clears all the text boxes
  	$("#trainNameInput").val("");
  	$("#destinationInput").val("");
  	$("#startInput").val("");
  	$("#rateInput").val("");

  	//Prevents moving to new pagec
  	return false;

  });

  //Create Firebase event for adding trains to DB and a row in html when user hits 'submit'
  database.ref().on("child_added",function (childSnapshot, prevChildkey) {

  	console.log(childSnapshot.val());

  	//Store everything in a vairable
  	var trainName = childSnapshot.val().name;
  	var trainDestination = childSnapshot.val().destination;
  	var startTime = childSnapshot.val().start;
  	var frequency = childSnapshot.val().rate;

  	//Train info
  	console.log(trainName);
  	console.log(trainDestination);
  	console.log(startTime);
  	console.log(frequency);

  	//Add each train's data into the table
  	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + startTime + "</td><td>" + frequency + "</tr>");
  });

  










