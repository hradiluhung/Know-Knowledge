let listPertemuan = document.getElementById("list-pertemuan");
let sidebar = document.getElementById("listPertemuan");

let counter = 2;


function tambahItem(selector){
  // let slctd_pertemuan = document.getElementById(selector).parentNode.getElementsByClassName("list-fisika")[0];
  //
  // slctd_pertemuan.innerHTML += "<a href='#'>Halo dunia<br></a>";
  // console.log(slctd_pertemuan);
}

function tambahPertemuan(){
  let validasi = window.confirm("Apakah yakin ingin menambah pertemuan?");

  if(validasi){
    let tambahPertemuan = `
      <div id="list-item-${counter}" class="pertemuan">
        <h4>Pertemuan ${counter}</h4>
        <p>
        <ul class="list-fisika">
        </ul>
        <button class="tambahItem" onclick="tambahItem(this.getAttribute('id'))" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img src="../../icon/tambah.png" width="30px">Tambah Item
        </button>
        </p>
      </div>
    `;

    tambahList = `
      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action" href="#list-item-${counter}">Pertemuan ${counter}</a>
      </div>
    `;

    counter++;

    sidebar.innerHTML += tambahList;
    listPertemuan.innerHTML += tambahPertemuan;
  }
}


console.log(listPertemuan);
