// Import library untuk membaca file (gunakan Node.js jika di server)
const fs = require('fs');

// Fungsi untuk menghitung frekuensi byte dalam data
function calculateFrequency(data) {
    const frequency = {};
    for (let byte of data) {
        frequency[byte] = (frequency[byte] || 0) + 1;
    }
    return frequency;
}

// Buat pohon Huffman
function buildHuffmanTree(frequency) {
    const heap = Object.entries(frequency).map(([char, freq]) => ({ char, freq }));
    heap.sort((a, b) => a.freq - b.freq);

    while (heap.length > 1) {
        const left = heap.shift();
        const right = heap.shift();
        heap.push({
            char: null,
            freq: left.freq + right.freq,
            left,
            right
        });
        heap.sort((a, b) => a.freq - b.freq);
    }

    return heap[0];
}

// Buat tabel Huffman
function createHuffmanTable(node, prefix = '', table = {}) {
    if (!node.left && !node.right) {
        table[node.char] = prefix;
    } else {
        if (node.left) createHuffmanTable(node.left, prefix + '0', table);
        if (node.right) createHuffmanTable(node.right, prefix + '1', table);
    }
    return table;
}

// Encode data menggunakan tabel Huffman
function encodeData(data, table) {
    return data.split('').map(char => table[char]).join('');
}

// Decode data Huffman (Opsional)
function decodeData(encodedData, tree) {
    const result = [];
    let node = tree;
    for (let bit of encodedData) {
        node = bit === '0' ? node.left : node.right;
        if (!node.left && !node.right) {
            result.push(node.char);
            node = tree;
        }
    }
    return result.join('');
}

// Fungsi untuk mencetak pohon Huffman secara vertikal
function printHuffmanTreeVertical(node, indent = '', isLeft = true) {
    if (!node) return;

    const branch = isLeft ? '|-- ' : '\-- ';

    if (!node.left && !node.right) {
        console.log(`${indent}${branch}${node.char || '*'} (${node.freq})`);
    } else {
        console.log(`${indent}${branch}* (${node.freq})`);
        printHuffmanTreeVertical(node.left, indent + (isLeft ? '|   ' : '    '), true);
        printHuffmanTreeVertical(node.right, indent + (isLeft ? '|   ' : '    '), false);
    }
}

// Fungsi tambahan untuk menghitung jumlah pixel berdasarkan ukuran file
function calculatePixels(fileSizeKB, bytesPerPixel = 2) {
    const bytesPerKB = 1024;
    const totalBytes = fileSizeKB * bytesPerKB;
    const totalPixels = totalBytes / bytesPerPixel;

    console.log(`Ukuran file: ${fileSizeKB} KB`);
    console.log(`Jumlah byte dalam gambar: ${fileSizeKB} KB x ${bytesPerKB} byte/KB = ${totalBytes} byte`);
    console.log(`Jumlah pixel: ${totalBytes} byte / ${bytesPerPixel} byte/pixel = ${totalPixels} pixel`);

    return totalPixels;
}

// Fungsi untuk menghitung waktu transfer gambar
function calculateTransferTime(compressedSize, speedKbps) {
    const transferTime = compressedSize / (speedKbps * 1024);
    console.log(`Waktu transfer gambar: ${compressedSize} bit / (${speedKbps} Kbit/s x 1024) = ${transferTime.toFixed(2)} detik`);
    return transferTime;
}

// Main program
function compressImage(filePath) {
    // Baca file gambar sebagai binary
    const imageData = fs.readFileSync(filePath);

    // Hitung ukuran sebelum kompresi
    const originalSize = imageData.length * 8; // dalam bit

    // Hitung frekuensi byte
    const frequency = calculateFrequency(imageData);

    // Bangun pohon Huffman
    const huffmanTree = buildHuffmanTree(frequency);

    // Cetak pohon Huffman untuk visualisasi vertikal
    console.log('Pohon Huffman (Vertikal):');
    printHuffmanTreeVertical(huffmanTree);

    // Buat tabel Huffman
    const huffmanTable = createHuffmanTable(huffmanTree);

    // Encode data gambar
    const encodedData = encodeData(imageData.toString('binary'), huffmanTable);

    // Hitung ukuran setelah kompresi
    const compressedSize = encodedData.length; // dalam bit

    // Rasio kompresi
    const compressionRatio = compressedSize / originalSize;

    console.log(`Ukuran sebelum kompresi: ${originalSize} bit`);
    console.log(`Ukuran setelah kompresi: ${compressedSize} bit`);
    console.log(`Rasio kompresi: ${compressionRatio}`);

    // Hitung waktu transfer (256 Kbit/s)
    const transferTime = calculateTransferTime(compressedSize, 256);

    return { originalSize, compressedSize, compressionRatio, transferTime };
}

// Contoh penggunaan fungsi calculatePixels
const fileSizeKB = 302; // ukuran file dalam KB
const pixels = calculatePixels(fileSizeKB);
console.log(`Jumlah pixel untuk file sebesar ${fileSizeKB} KB adalah ${pixels} pixel.`);

// Jalankan fungsi utama
compressImage('D:\\SEMESTER 5\\SISTEM BERBASIS OBJEK\\unismuh_logo.bmp');
