import heapq
import os
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
import time

# Fungsi untuk menghitung frekuensi setiap pixel
def calculate_frequency(data):
    freq = {}
    for value in data.flatten():
        if value in freq:
            freq[value] += 1
        else:
            freq[value] = 1
    return freq

# Membuat pohon Huffman
def build_huffman_tree(frequencies):
    heap = [[weight, [symbol, ""]] for symbol, weight in frequencies.items()]
    heapq.heapify(heap)
    while len(heap) > 1:
        low = heapq.heappop(heap)
        high = heapq.heappop(heap)
        for pair in low[1:]:
            pair[1] = '0' + pair[1]
        for pair in high[1:]:
            pair[1] = '1' + pair[1]
        heapq.heappush(heap, [low[0] + high[0]] + low[1:] + high[1:])
    return sorted(heapq.heappop(heap)[1:], key=lambda p: (len(p[-1]), p))

# Fungsi untuk menghitung ukuran gambar dalam bit
def calculate_size(data, code):
    size = 0
    for value in data.flatten():
        size += len(code[value])
    return size

# Fungsi utama
def huffman_compression(image_path):
    # Membaca gambar
    img = Image.open(image_path).convert('L')  # Konversi ke grayscale
    data = np.array(img)

    # Hitung frekuensi pixel
    freq = calculate_frequency(data)

    # Buat Huffman Tree dan kode
    huffman_code = build_huffman_tree(freq)
    code_dict = {item[0]: item[1] for item in huffman_code}

    # Hitung ukuran sebelum dan sesudah kompresi
    original_size = data.size * 8  # Dalam bit
    compressed_size = calculate_size(data, code_dict)

    # Rasio kompresi
    compression_ratio = original_size / compressed_size

    # Waktu transfer
    transfer_speed = 256 * 1024  # Dalam bit per detik
    transfer_time = compressed_size / transfer_speed

    # Tampilkan diagram Huffman
    plt.figure(figsize=(10, 6))
    plt.bar([str(k) for k in freq.keys()], freq.values(), color='blue')
    plt.title('Frekuensi Pixel')
    plt.xlabel('Pixel')
    plt.ylabel('Frekuensi')
    plt.show()

    # Output
    print(f"Ukuran gambar sebelum kompresi: {original_size} bits")
    print(f"Ukuran gambar sesudah kompresi: {compressed_size} bits")
    print(f"Rasio kompresi: {compression_ratio:.2f}")
    print(f"Waktu transfer: {transfer_time:.2f} detik")

    return huffman_code

# Jalankan fungsi
image_path = "unismuh_logo.bmp"  # Ganti dengan path gambar Anda
huffman_compression(image_path)
