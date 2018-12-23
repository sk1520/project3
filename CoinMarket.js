$(document).ready(function(){
 	function refresh(){ //function refresh to keep refreshing the div so new info can be loaded in
 	 $.ajax({
	type: 'GET',
	url: 'https://api.coinmarketcap.com/v1/ticker/', //api link
	cache: true,
	success: function(data){
		console.log("success"); // logs success to see if the divs refresh
 		$('#example1').empty(); //empties the div so when div is refreshed by setinterval it wont add the new data at the bottom of the page
		$.each(data, function(i,name){ //loops through the JSON data 
			if (data[i].percent_change_1h <0){ //checks if a percentage is negative or positive then based on that use bootstrap classes to highlight red or green i.e class="bg-danger" || class="bg-success"
				$('#example1').append('<tr class="bg-danger">'+ //appends or puts in the data inside the table row and table data 
				'<td>'+data[i].rank+ '</td>'+ 
				'<td>'+data[i].name+'</td>'+
				'<td>$ '+data[i].price_usd+'</td>'+
				'<td class="text-center">'+data[i].percent_change_1h+'%</td>'+
				'</tr');
				}//if ends here

			else{	//if the percentage is negative then we make background green for <tr>
				$('#example1').append('<tr class="bg-success">'+
				'<td>'+data[i].rank+ '</td>'+
				'<td>'+data[i].name+'</td>'+
				'<td>$ '+data[i].price_usd+'</td>'+
				'<td class="text-center">'+data[i].percent_change_1h+'%</td>'+
				'</tr');
			}//else ends here
		}) // $.each ends here
	}//sucess function ends here
}); //ajax ends here
};//refresh ends here
 	
 	refresh();//call function right away before setInterval starts refreshing 
    setInterval(refresh, 5000); //refreshes ajax every 5 seconds to update the prices of crypto currency
});


