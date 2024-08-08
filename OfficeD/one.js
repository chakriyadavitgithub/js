let users=[
    {"id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}
]
function getUsers(){
    let rows=""
    for(let i=0;i<=users.length-1;i++){
        rows=rows+`<tr>
                        <td>${users[i].id}</td>
                        <td>${users[i].username}</td>
                        <td>${users[i].address.city}</td>
                        <td>${users[i].company.name}</td>
                        <td>${users[i]}</td>
                       
                    </tr>`
    }

    document.getElementById('table_Data').innerHTML=rows
}
