// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myfun);
function myfun()
{
     event.preventDefault();
     
var imgurl = document.querySelector("#image").value;
var name1 = document.querySelector("#name").value;
var batch1 = document.querySelector("#batch").value;
var dsa = document.querySelector("#dsa").value;
var softskill = document.querySelector("#cs").value;
var coding = document.querySelector("#coding").value;

console.log(imgurl,name1,batch1,dsa,softskill,coding);
var tr = document.createElement("tr");
var td1 = document.createElement("img");
td1.src = imgurl;
var td2 = document.createElement("td");
td2.innerText=name1;
var td3 = document.createElement("td");
td3.innerText=batch1;
var td4 = document.createElement("td");
td4.innerText=dsa;
var td5 = document.createElement("td");
td5.innerText=softskill;
var td6 = document.createElement("td");
td6.innerText=coding;


// var total = eval(dsa+softskill+coding);
var per=0;
var x = Number(dsa)+Number(coding)+Number(softskill);
 per = (Number(x)*100)/300;
var td7 = document.createElement("td");
td7.innerText=per;

var td8 = document.createElement("td");
if(per>50)
{
     td8.innerText="Regular";
     td8.style.backgroundColor="green";
}
else{
     td8.innerText="Async";
     td8.style.backgroundColor="red";
}





tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
document.querySelector("tbody").append(tr);

}
