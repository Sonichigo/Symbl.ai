//To GET API details
//and loop through the data
const API = "https://www.example.com/get-data"

async function getAPI() {
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

getAPI(API)

function show(data){
    let tab = 
        `<tr>
          <th>id</th>
          <th>name</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.id} </td>
    <td>${r.name}</td>          
</tr>`;
}
document.getElementById("api").innerHTML = tab;
}