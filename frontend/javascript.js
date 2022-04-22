const div = document.getElementById("div");
const url='http://hp-api.herokuapp.com/api/characters/';

fetch(url) //Peticion GET
  .then(res => res.json())
  .then(data => alert(data));

    // data.mapa(data => { const {descripcion,estado}=data;
    //     console.log(data.estado);
    //     if (data) {
    //         for(var i = 0; i < data.length; i++) {
    //             div.innerHTML += `
    //             <td> (i + 1) %></td>
    //               <td> data[i].descripcion </td>
    //               <td> data[i].estado </td>`
    //         }
    //     }

    // });
// });


