let arr = [];
function perform() {
    var data = document.getElementById("data").value;
    var name = document.getElementById("data1").value;
    var price = document.getElementById("data2").value;
    if (isNaN(data) == true || isNaN(price)) {
        alert("Input can not be a text");
    }
    else
        var obj = { "data": data, "name": name, "price": price };
    arr.push(obj);
    // console.log(data);
    // console.log(name);
    // console.log(price);
    // console.log(arr[0].price);
    var dat = "";
    arr.forEach(element => {
        dat += "<tr><td>" + (element.data) + "</td><td>" + (element.name) + "</td><td>" + (element.price) + "</td></tr>";
    }
    );
    document.getElementById("demo").innerHTML = dat;
}