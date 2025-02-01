// Class induk: Buku
class Buku {
  constructor(title, genre, status = "Tersedia") {
    this.title = title;
    this.genre = genre;
    this._status = status; // Properti privat menggunakan _
  }

  // Getter untuk deskripsi buku
  get description() {
    return `${this.title} - Status: ${this._status}`;
  }

  
  set updateStatus(newStatus) {
    this._status = newStatus;
  }

  get status() {
    return this._status;
  }

  
}

// Class turunan: FictionBuku
class FictionBuku extends Buku {
  constructor(title, genre, status) {
    super(title, genre, status); // Memanggil constructor class induk
  }

  // Override getter
  get description() {
    return `${this.title} (Fiksi, ${this.genre}) - Status: ${this._status}`;
  }
}

// Class turunan: NonFictionBuku
class NonFictionBuku extends Buku {
  constructor(title, genre, status) {
    super(title, genre, status); // Memanggil constructor class induk
  }
}

const Bukus = [];

function addBuku() {
  const title = document.getElementById('Buku-title').value;
  const genre = document.getElementById('Buku-genre').value;
  const status = document.getElementById('Buku-status').value;

  if (!title || !genre || !status) {
    alert('404 Tidak ada buku yang ingin ditambah!');
    return;
  }

  let Buku;
  if (genre.toLowerCase().includes('fiksi')) {
    Buku = new FictionBuku(title, genre, status);
  } else {
    Buku = new NonFictionBuku(title, genre, status);
  }

  if (Buku) {
    Bukus.push(Buku);
    alert('Buku berhasil ditambahkan!');
  }
}

function editStatus(index) {
  const newStatus = prompt("Masukkan status baru:");
  if (newStatus) {
    Bukus[index].updateStatus = newStatus;
    showBukus();
  }
}

// Fungsi untuk menampilkan daftar buku
function showBukus() {
  const BukuList = document.getElementById("BukuList");
  BukuList.innerHTML = '';

  Bukus.forEach((Buku, index) => {
    BukuList.innerHTML += `
      <tr>
        <td>${Buku.title}</td>
        <td>${Buku.genre}</td>
        <td>${Buku.status} <button class="edit-button" onclick="editStatus(${index})">Edit</button></td>
      </tr>
    `;
  });
}
