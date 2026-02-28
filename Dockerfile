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

#// filepath: /home/faiz/projects/webdev/my-awesome-app/Dockerfile
# ...existing code...
# 3. Salin seluruh sisa kode
COPY . .

# Generate ulang client sebelum build
RUN npx prisma generate

# Set ENV variable dummy yang valid agar build tidak error saat validasi schema
# Gunakan SKIP_ENV_VALIDATION jika menggunakan t3-env atau sejenisnya, 
# tapi untuk prisma polosan, pastikan URL valid secara format.
ENV DATABASE_URL="postgresql://faizuser:mypassword@localhost:5432/webdb"

# Matikan telemetry untuk speed
ENV NEXT_TELEMETRY_DISABLED=1

# 4. Build aplikasi Next.js
RUN npm run build

# ...existing code...