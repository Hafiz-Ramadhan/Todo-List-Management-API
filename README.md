<div align="center">

# Todo List Management API

**Node.js** · **Express.js** · **MongoDB** · **Mongoose** · **JWT** · **Jest**

<br>

*RESTful API untuk mengelola daftar tugas (Todo), kategori, autentikasi pengguna, riwayat aktivitas, dan statistik. Project ini dikembangkan menggunakan **Node.js, Express.js, dan MongoDB**.*

</div>

<p align="center">· · ·</p>

<h2 align="center">Fitur Utama</h2>

| Fitur | Deskripsi |
|:---|:---|
| **Authentication** | Registrasi, login, JWT, dan profil pengguna |
| **Role Authorization** | Pembatasan akses berdasarkan role admin |
| **Todo Management** | CRUD tugas, status, prioritas, dan kategori |
| **Category Management** | CRUD kategori tugas |
| **Filtering & Search** | Filter, pencarian, sorting, dan pagination |
| **Activity Log** | Melihat riwayat aktivitas pengguna |
| **Statistics** | Menampilkan ringkasan statistik menggunakan API Key |
| **API Documentation** | Dokumentasi endpoint menggunakan Swagger UI |

<h2 align="center">Teknologi</h2>

| Teknologi | Kegunaan |
|:---|:---|
| **Node.js** | JavaScript runtime |
| **Express.js 5** | Framework backend |
| **MongoDB** | Database NoSQL |
| **Mongoose** | ODM untuk MongoDB |
| **JSON Web Token** | Autentikasi pengguna |
| **bcryptjs** | Password hashing |
| **express-validator** | Validasi input |
| **Swagger UI** | Dokumentasi API |
| **dotenv** | Pengelolaan environment variable |
| **Jest** | Automated testing |
| **Supertest** | HTTP endpoint testing |
| **mongodb-memory-server** | Database sementara untuk testing |
| **Nodemon** | Development server |

<p align="center">· · ·</p>

<h2 align="center">Persyaratan</h2>

Pastikan perangkat sudah memiliki:

- Node.js
- npm
- MongoDB Atlas atau server MongoDB yang dapat diakses
- Git

<h2 align="center">Instalasi</h2>

**1. Clone repository**

```bash
git clone https://github.com/Hafiz-Ramadhan/Todo-List-Management-API.git
```

**2. Masuk ke folder project**

```bash
cd Todo-List-Management-API
```

**3. Install dependencies**

```bash
npm install
```

**4. Buat file `.env`**

Buat file `.env` pada direktori utama project, kemudian isi konfigurasi berikut dengan nilai milik sendiri.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
API_KEY=your_api_key
```

<h3 align="center">Environment Variables</h3>

| Variable | Deskripsi |
|:---|:---|
| `PORT` | Port server |
| `MONGODB_URI` | Connection string MongoDB |
| `JWT_SECRET` | Secret untuk JWT |
| `JWT_EXPIRES_IN` | Masa berlaku token |
| `API_KEY` | API Key untuk endpoint statistik |

> [!TIP]
> **Keamanan:** Jangan membagikan file `.env`, JWT Secret, API Key, atau connection string database. File `.env` sudah dikecualikan melalui `.gitignore`.

<p align="center">· · ·</p>

<h2 align="center">Menjalankan Aplikasi</h2>

Jalankan server dalam mode development:

```bash
npm run dev
```

Jika berhasil, server berjalan pada port yang dikonfigurasi, secara default:

```text
http://localhost:3000
```

<h2 align="center">Dokumentasi API — Swagger UI</h2>

Dokumentasi endpoint tersedia melalui Swagger UI.

Buka browser dan akses:

```text
http://localhost:3000/api-docs
```

Swagger UI digunakan untuk melihat endpoint, parameter, request body, serta mencoba request API.

<p align="center">· · ·</p>

<h2 align="center">API Endpoints</h2>

Base URL:

```text
http://localhost:3000
```

<h3 align="center">1. Authentication</h3>

Base path: `/api/auth`

| Method | Endpoint | Deskripsi | Akses |
|:---:|:---|:---|:---:|
| **POST** | `/api/auth/register` | Registrasi pengguna | *Public* |
| **POST** | `/api/auth/login` | Login pengguna | *Public* |
| **GET** | `/api/auth/me` | Melihat profil pengguna | *JWT* |
| **GET** | `/api/auth/admin-only` | Endpoint khusus admin | *Admin* |

<h3 align="center">2. Todo Management</h3>

Base path: `/api/todos`

| Method | Endpoint | Deskripsi | Akses |
|:---:|:---|:---|:---:|
| **POST** | `/api/todos` | Membuat Todo | *JWT* |
| **GET** | `/api/todos` | Mendapatkan daftar Todo | *JWT* |
| **GET** | `/api/todos/:id` | Mendapatkan detail Todo | *JWT* |
| **PATCH** | `/api/todos/:id` | Memperbarui Todo | *JWT* |
| **DELETE** | `/api/todos/:id` | Menghapus Todo | *JWT* |

**Fitur tambahan Todo:**

- Filter berdasarkan status, priority, dan category.
- Pencarian menggunakan `search`.
- Sorting menggunakan `sortBy` dan `order`.
- Pagination menggunakan `page` dan `limit`.

**Status Todo:**

- `pending`
- `in_progress`
- `completed`

**Prioritas Todo:**

- `low`
- `medium`
- `high`

<h3 align="center">3. Category Management</h3>

Base path: `/api/categories`

| Method | Endpoint | Deskripsi | Akses |
|:---:|:---|:---|:---:|
| **POST** | `/api/categories` | Membuat kategori | *JWT* |
| **GET** | `/api/categories` | Mendapatkan daftar kategori | *JWT* |
| **GET** | `/api/categories/:id` | Mendapatkan detail kategori | *JWT* |
| **PATCH** | `/api/categories/:id` | Memperbarui kategori | *JWT* |
| **DELETE** | `/api/categories/:id` | Menghapus kategori | *JWT* |

Fitur tambahan:

- Pencarian menggunakan `search`.
- Sorting menggunakan `sortBy` dan `order`.
- Pagination menggunakan `page` dan `limit`.

<h3 align="center">4. Activity Log</h3>

Base path: `/api/activity-logs`

| Method | Endpoint | Deskripsi | Akses |
|:---:|:---|:---|:---:|
| **GET** | `/api/activity-logs` | Melihat riwayat aktivitas pengguna | *JWT* |

<h3 align="center">5. Statistics</h3>

Base path: `/api/stats`

| Method | Endpoint | Deskripsi | Akses |
|:---:|:---|:---|:---:|
| **GET** | `/api/stats/summary` | Mendapatkan ringkasan statistik Todo | *API Key* |

Endpoint statistik menggunakan header:

```http
x-api-key: YOUR_API_KEY
```

<p align="center">· · ·</p>

<h2 align="center">Autentikasi</h2>

Endpoint yang membutuhkan autentikasi menggunakan **Bearer Token**.

Tambahkan header berikut pada request:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

Token JWT diperoleh setelah pengguna berhasil login.

Untuk mengakses endpoint khusus admin, pengguna harus memiliki role `admin`.

<h2 align="center">Testing</h2>

Jalankan pengujian otomatis menggunakan:

```bash
npm test
```

Project menggunakan:

- **Jest** untuk menjalankan pengujian.
- **Supertest** untuk menguji HTTP endpoint.
- **mongodb-memory-server** untuk menyediakan database sementara saat testing.

<p align="center">· · ·</p>

<h2 align="center">Struktur Project</h2>

```text
Todo-List-Management-API/
│
├── config/
├── controller/
├── middleware/
├── model/
├── postman/
├── .postman/
├── routes/
├── tests/
├── util/
├── validator/
│
├── app.js
├── server.js
├── package.json
├── package-lock.json
├── test-models.js
├── test-relasi.js
├── .gitignore
└── README.md
```

<h2 align="center">Error Handling</h2>

Project menggunakan beberapa mekanisme untuk menangani kesalahan:

- `AppError` untuk pengelolaan error aplikasi.
- `catchAsync` untuk menangani error asynchronous.
- Global error handler untuk menangani error secara terpusat.
- `express-validator` untuk validasi request.

<h2 align="center">Keamanan</h2>

Beberapa mekanisme keamanan yang diterapkan:

- Password disimpan dalam bentuk hash menggunakan bcryptjs.
- Autentikasi menggunakan JWT.
- Pembatasan akses berdasarkan role pengguna.
- Validasi data request.
- API Key untuk endpoint statistik.
- File `.env` dan folder `node_modules` dikecualikan melalui `.gitignore`.

<p align="center">· · ·</p>

<h2 align="center">Author</h2>

**Muhammad Hafiz Ramadhan**

Project: **Todo List Management API**

Repository: [GitHub - Todo List Management API](https://github.com/Hafiz-Ramadhan/Todo-List-Management-API)

<p align="center">· · ·</p>

<div align="center">

*Project ini dibuat untuk keperluan pembelajaran dan pengembangan backend API.*

</div>
