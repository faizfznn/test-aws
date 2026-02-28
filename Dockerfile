# Gunakan image Node.js yang ringan
FROM node:20-alpine AS base

# Set working directory di dalam kontainer
WORKDIR /app

# 1. Salin file manifest saja dulu
# Ini penting agar 'npm install' tidak jalan ulang kalau cuma ganti kode UI
COPY package.json package-lock.json* ./

# 2. Instal dependensi
# Menggunakan 'npm ci' lebih stabil untuk environment Docker/CI
RUN npm install

# 3. Salin seluruh sisa kode (Pastikan sudah ada .dockerignore!)
COPY . .

# 4. Build aplikasi Next.js
RUN npm run build

# Ekspos port 3000
EXPOSE 3000

# Jalankan aplikasi mode production
CMD ["npm", "start"]