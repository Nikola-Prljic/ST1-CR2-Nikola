

function mylogic() {
    
    
    
    var a = document.getElementById("in").value;
    try {
        if(a == "")  throw  "Input is Empty";
       if( isNaN(a)) throw "Not a number";
       if(a > 10)   throw "Input is too high";
        if(a == 0)   throw  "0 0*1=0";
        if(a < 0)   throw  "Input is to low";
    }
   catch(err) {
       alert(err);
       return false;
   }
   
    
    var number = a;

    var tbl = document.getElementById("myTable");
    var tblBody = document.createElement("tbody");
    //creating a multiplication table
    for (var i = 1; i <= 10; i++) {

        // multiply i with number
        result = i * number;

        
        console.log(`${number} * ${i} = ${result}`);
        

        var row = document.createElement("tr");

        var cell = document.createElement("td");

        var cellText = document.createTextNode(`${number} * ${i} = ${result}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    tbl.setAttribute("border", "2");
    console.log(i);
    
}


function reload(){
    var container = document.getElementById("myTable");
    var content = container.innerHTML;
    container.innerHTML= ""; 
    
   
    console.log("Refreshed"); 
}
