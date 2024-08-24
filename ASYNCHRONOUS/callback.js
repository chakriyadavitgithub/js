let employees=[{id:101,name:'Virat',salary:35000},
               {id:102,name:'Dhoni',salary:40000}
]
let createemployee = (emp,callback)=>{ //here by using the callback and with out cllback
    setTimeout(()=>{
        employees.push(emp)
        callback()
    } ,4000)
}
let displayemployee=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows=rows+`<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.salary}</td>
            </tr>`
        }
        document.getElementById('abc').innerHTML=rows
    },1000)

}

createemployee({id:103,name:'priya',salary:50000},displayemployee)
//displayemployee()
    
//from here without call back two values will be display