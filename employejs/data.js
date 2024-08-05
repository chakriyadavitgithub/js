let employees=[
    {id:101,name:'priya',salary:45000},
    {id:102,name:'raju',salary:25000},
    {id:103,name:'zoya',salary:30000},
    {id:104,name:'modi',salary:40000},
]
    function getemployees(){
        let rows=""
    for(emp of employees){
        rows= rows + `<tr>  
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.salary}</td>
                      </tr>`
    }
   
        document.getElementsByTagName('tbody')[0].innerHTML=rows
       // document.getElementsByTagName('tbody')[0].innerHTML="get employees"
}
