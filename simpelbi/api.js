
export function CihuyDataAPI(apiUrl, token, callback) {
    // Membuat objek konfigurasi untuk permintaan fetch
    const spinner = tableBody.querySelector(".spinner");
    spinner.style.display = "block";
    const requestOptions = {
        method: 'GET',
        headers: new Headers({
          'Authorization': `Bearer ${token}`, // Menggunakan token untuk otorisasi
          'Content-Type': 'application/json',
          'LOGIN': token, // Menambahkan header "LOGIN" dengan token
        }),
      };
      const gridOptions = {
        columnDefs: columnDefs,
        rowData: [] // Mulai dengan data kosong
      };
      
      // Inisialisasi grid
      const gridDiv = document.querySelector("#agGridContainer");
      new agGrid.Grid(gridDiv, gridOptions);
    // Mengirim permintaan fetch ke URL API
    fetch(apiUrl, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Menguraikan respons JSON
      })
      .then(data => {
        // Memanggil callback dengan data yang diterima
        callback(null, data);    
        spinner.style.display = "none";
        gridOptions.api.setRowData(data);

      })
      .catch(error => {
        // Memanggil callback dengan kesalahan yang terjadi
        callback(error, null);
        spinner.style.display = "none";

      });
  }