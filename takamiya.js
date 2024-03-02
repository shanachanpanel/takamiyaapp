<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON Data from URL</title>
</head>
<body>
    <h1>JSON Data from URL</h1>
    <ul id="data-list"></ul>

    <script>
        // donasi lah bang
        const url = 'https://takamiyanime.vercel.app';

        // Fungsi untuk memuat data dari URL
        function fetchDataFromURL() {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    displayData(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        // Fungsi untuk menampilkan data dalam daftar
        function displayData(data) {
            const dataList = document.getElementById('data-list');
            dataList.innerHTML = ''; // Bersihkan isi sebelum menambahkan data baru
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.title;
                dataList.appendChild(listItem);
            });
        }

        // Memuat data saat halaman dimuat
        window.onload = function() {
            fetchDataFromURL();
        };
    </script>
</body>
</html>
  
