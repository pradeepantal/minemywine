app.factory('DbService',['$cordovaSQLite','$ionicPlatform','$q',function($cordovaSQLite,$ionicPlatform,$q){
		var db;
		return {
			initDB:initDB,
			getLoginDetails: getLoginDetails
			
		}

		function initDB() {
		  $ionicPlatform.ready(function() {
		  	if (window.cordova) {
      			db = $cordovaSQLite.openDB({ name: "myapp.db", location : "default" }); //device
   			 }else{
      				db = window.openDatabase("myapp.db", '1', 'myapp', 1024 * 1024 * 100); // browser
    		}

			var queryCreate = "CREATE TABLE IF NOT EXISTS user ( id INTEGER PRIMARY KEY   AUTOINCREMENT, mobile varchar , role integer DEFAULT 0, name varchar)";
			runQuery(queryCreate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });

			var queryUpdate = "REPLACE INTO user VALUES (1, '9999999999',1,'user');";
			runQuery(queryUpdate,[],function(res) {
			
				   }, function (err) {
			   console.log(err);
			    });
			   

		  }.bind(this));
		}

		function getLoginDetails(id){
			var deferred = $q.defer();
			var query = "SELECT * from user where role = ?";
			console.log("Role is "+id);
			runQuery(query,[id],function(response){
				//Success Callback
				if(response.rows.length==0){
					deferred.reject();
				}else{
					console.log(response);
					deferred.resolve(response);
				}
			},function(error){
				//Error Callback
				console.log(error);
				deferred.reject(error);
			});

			return deferred.promise;
		}
		function runQuery(query,dataArray,successCb,errorCb)
		{
		  $ionicPlatform.ready(function() {		  
			    $cordovaSQLite.execute(db, query,dataArray).then(function(res) {
			      successCb(res);
			    }, function (err) {
			      errorCb(err);
			    });
		  }.bind(this));
		}

	}
]);