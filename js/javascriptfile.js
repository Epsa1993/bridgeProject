function validate(){
		var name = document.getElementById("name").value;
		var password = document.getElementById("psw");
		
		console.log("tyversio");
		$.ajax({
					type: 'GET',
					url: 'http://delivery-api.1bridge.in/api/v1/accounts/login',
					data: {'email':"admin@jaarvistech.com", 'password':"ecomobxi2017"},
					success: function (msg) {
					alert("success");
					console.log("success");
				},
					error: function (request, status, error) {
					alert("error");
				}

			});
		
	}
