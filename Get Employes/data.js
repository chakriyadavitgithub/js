let employees=[
    {id:101,name:'priya',salary:45000},
    {id:102,name:'raju',salary:25000},
    {id:103,name:'zoya',salary:30000},
    {id:104,name:'modi',salary:40000},
]
/////by using the while loop 
function getemployees(){
    let rows=""
    let i=0;
    while(i<=employees.length-1){
        rows =rows + `<tr>
        <td>${employees[i].id}</td>
        <td>${employees[i].name}</td>
        <td>${employees[i].salary}</td>
        </tr>`
        i++
    }

    document.getElementsByTagName('tbody')[0].innerHTML=rows
    //document.getElementsByTagName('tbody')[0].innerHTML="Chakri"

}

   