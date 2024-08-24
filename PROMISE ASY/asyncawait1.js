let employees=[{id:101,name:'Virat',salary:35000},
    {id:102,name:'Dhoni',salary:40000}
]
let createemployee = (emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
                let db_flag = false; //and here false give means two values will be execute.
                db_flag ===true ?  resolve("Data Inserted"):reject("Failed")
                employees.push(emp);
    
         },4000)
    })
    }
    let displayemployee=()=>{
        setTimeout(()=>{
            let rows=""
            for(emp of employees){
                rows = rows +`<tr>
                                    <td>${emp.id}</td>
                                    <td>${emp.name}</td>
                                    <td>${emp.salary}</td>
                              </tr>`
            }
            document.getElementById('abc').innerHTML=rows
        },1000)
    }
    let afternoon=async()=>{  
        createemployee({id:103,name:'priya',salary:90000})//from here we are using without await and we get the two values only.
        displayemployee()///async statement will be used.
    }
    afternoon();

