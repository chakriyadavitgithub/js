let employees=[{id:101,name:'Virat',salary:35000},
    {id:102,name:'Dhoni',salary:40000}
]
let createemployee = (emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
                let db_flag = true;// here the true will be used and three values will be excetute.
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
    let movies=async()=>{ //& here sync function will be used.
        await createemployee({id:103,name:'Sony',salary:90000})///here using the await statement
        displayemployee()
    }
    movies()