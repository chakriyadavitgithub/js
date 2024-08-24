let employees=[{id:101,name:'Virat',salary:35000},
    {id:102,name:'Dhoni',salary:40000}
]
let createEmployee = (emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
                let db_flag = true;
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
    createEmployee({id:103,name:'Priya',salary:50000})
    .then((msg)=>{
        console.log(msg)
        displayemployee()
    })
     .catch((err)=>{
         console.log(err)
     })
