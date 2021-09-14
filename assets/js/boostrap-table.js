// Add products to <table>
function productsAdd() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }

    // Append product to the table
    $("#productTable tbody").append("<tr>" +
        "<td>Extending Bootstrap with CSS, JavaScript and jQuery</td>" +
        "<td>6/11/2015</td>" +
        "<td>http://bit.ly/1SNzc0i</td>" +
        "</tr>");

    $("#productTable tbody").append("<tr>" +
        "<td>Build your own Bootstrap Business Application Template in MVC</td>" +
        "<td>1/29/2015</td>" +
        "<td>http://bit.ly/1I8ZqZg</td>" +
        "</tr>");
}

function setInfo(){

    //var testObject = [{ 'AssetName': '5', 'DeviceImage': 100, 'AssetTag': '16:00' }];
    //localStorage.setItem('testObject', JSON.stringify(testObject));
    
    
    var retrievedObject = JSON.parse(localStorage.getItem('test1'));
    
    var tbody = document.getElementById('tbody');
    
    for (var i = 0; i < retrievedObject.length; i++) {
    //   var tr = "<tr>";
    //   tr += "<td>" + retrievedObject[i].AssetName + "</td>";
    //   tr += "<td>" + retrievedObject[i].SerialNumber + "</td>>";
    //   tr += "<td>" + retrievedObject[i].modelinput + "</td>";
    //   tr += "<td>" + retrievedObject[i].Serial + "</td>";
    //   tbody.innerHTML += tr;
    //   "</tr>";

      $("#productTable tbody").append("<tr>" +
       "<td>" + retrievedObject[i].AssetTag + "</td>"+
       "<td>" + retrievedObject[i].SerialNumber + "</td>>"+
        "<td>" + retrievedObject[i].modelinput + "</td>"+
        "<td>" + retrievedObject[i].statusinput + "</td>"+
        "<td>" + retrievedObject[i].AssetName + "</td>" +
        "<td>" + retrievedObject[i].PurchaseDate + "</td>" +
        "<td>" + retrievedObject[i].Supplier + "</td>" +
        "<td>" + retrievedObject[i].OrderNum + "</td>" +
        "<td>" + retrievedObject[i].PurchasedCost + "</td>"+
      "</tr>");
      
    }
}
