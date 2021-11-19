function grocery(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState==4 && this.status==200){
            document.querySelector(".content").style.display = "none";
            let response= JSON.parse(this.responseText);
            let grocery = response.grocery;
            let table="";
            table += `<h1 class='heading'>GROCERY LIST</h1> <br>
            <table class='table table-hover table-bordered table-sm'> <tr> 
            <th>Serial Number</th> 
            <th>Name</td> 
            <th>Quantity</th>
            <th>Unit</th> 
            <th>Department</th> 
            <th>Notes</th> 
            <th>Status</th>
            </tr> `
            for(i=0;i<grocery.length;i++){
                table += `<tr> 
                <td class='row1'>${grocery[i].slno}</td>
                <td class='row2'>${grocery[i].name}</td>
                <td class='row3'>${grocery[i].quantity}</td>
                <td class='row4'>${grocery[i].unit}</td>
                <td class='row5'>${grocery[i].department}</td>
                <td class='row6'>${grocery[i].notes}</td>
                <td class='chk'> 
                <input class='check' onclick='check()' type='checkbox'>
                </td> 
                </tr>`;

            }
            table+= "</table>"

            document.querySelector(".gtable").innerHTML=table;
        }
    }
    xhttp.open("GET", "grocery.json" , true);
    xhttp.send();
}
function check(){
      let chk = Array.from(document.querySelectorAll(".chk"));
      let check = Array.from(document.querySelectorAll(".check"));
      let row1 = Array.from(document.querySelectorAll(".row1"));
      let row2 = Array.from(document.querySelectorAll(".row2"));
      let row3 = Array.from(document.querySelectorAll(".row3"));
      let row4 = Array.from(document.querySelectorAll(".row4"));
      let row5 = Array.from(document.querySelectorAll(".row5"));
      let row6 = Array.from(document.querySelectorAll(".row6"));

      for(i=0;i<12;i++){
        if(check[i].checked){
            row1[i].classList.add("checked");
            row2[i].classList.add("checked");
            row3[i].classList.add("checked");
            row4[i].classList.add("checked");
            row5[i].classList.add("checked");
            row6[i].classList.add("checked");
            chk[i].classList.add("checked");
        }
        else{
            row1[i].classList.remove("checked");
            row2[i].classList.remove("checked");
            row3[i].classList.remove("checked");
            row4[i].classList.remove("checked");
            row5[i].classList.remove("checked");
            row6[i].classList.remove("checked");
            chk[i].classList.remove("checked");
        }
      }
    }