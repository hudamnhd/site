---
title: "Aplikasi React Pertama"
description: "Catatan belajarku ketika membuat todolist pertama kali dengan React js"
publishDate: "Mar 21 2024"
tags: ["react", "tailwindcss"]
---

![Todolist](./todolist.png)

## Cara Saya Mempelajari HTML, CSS, dan JavaScript

Ketika saya pertama kali belajar HTML, CSS dan Javascript, saya membaca dari beberapa referensi
dari google dan menonton Video dari Youtube. Saya mempelajari sesuatu dengan urut karena beberapa
dokumentasi menyarankan untuk belajar secara urut supaya paham. Waktu itu saya hanya menyalin dan menulis ulang
kode-kode tanpa tau fungsinya. Ketika kode berjalan sesuai tutorial saya begitu senang padahal saya
tidak sepenuhnya paham dengan kode tersebut.

### Belajar dari youtube

Saat itu saya baru paham dasar HTML dan Javascript saja. Kemudian saya mulai belajar React dari
video youtube Mas Nauval [Belajar React JS Dari Awal Buat Yang Nggak Jago JavaScript](https://www.youtube.com/watch?v=JS5w4rUbjQE).
Karena sesuai judulnya yaitu "Buat yang nggak jago Javascript" akhirnya saya menonton dan
mempraktikan yang di ajarkan. Video berdurasi sekitar 8 jam itu selesai saya tonton kurang lebih 4 hari.

### Menulis ulang kode

Kemudian saya menulis ulang apa yang saya pelajari dari video tersebut dari awal. Saya membuat todolist mirip seperti yang diajarkan, memahami setiap fungsi yang ditulis, menambahkan styling dengan tailwind css.

## Aplikasi pertama
Ini adalah project [Todolist](https://github.com/hudamnhd/todo-list-2/tree/old/src) pertama saya.

## Langkah-langkah

### Instalasi Nodejs dan NPM

```bash
sudo apt install nodejs npm
```
### Inisialisasi project react dengan CRA

```bash
npx create-react-app todolist
cd todolist
npm run start
```
### Menambahkan dependesi
Menambahkan dependesi Tailwind CSS, React Icon dan React Toastify

```bash
npm install react-icons react-toastify
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```
### Function Javascript yang digunakan
Fungsi Array map(), filter(), findIndex(), find() di Javascript.

:::note
***map()*** di gunakan didalam jsx untuk merender data array.
:::

```jsx
{
    items.length > 0 ? (
        items.map((item, index) => (
        <LineItem
            key={item.id}
            item={item}
            items={items}
            index={index}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
        />
        ))
    ) : (
        <h1 className="text-xl text-center font-semibold">Todolist empty</h1>
    );
}
```

:::note
***findIndex()*** di gunakan mencari index dari sebuah array kemudian mereplace isi dari data
tersebut, jadi find mengembalikan number index dari data tersebut.
:::

```javascript
  const updatedData = {
    ...edit,
    item: activity,
  };
  const updatedAllData = [...items];
  const findIndex = updatedAllData.findIndex((item) => item.id === edit.id);
  updatedAllData[findIndex] = updatedData;
```

:::note
***filter()*** di gunakan memfilter data dengan logic tertentu, disini digunakan untuk mengapus
data dari array
:::

```javascript
const handleDelete = async (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
};
```
:::note
***map()*** di gunakan untuk iterasi isi dari sebuah array kemudian mencocokan id yang cocok
dan megubah isi datanya.

***find()*** di gunakan mencocokan id yang cocok di dalam data array, find() mengembalikan data
beruba object itu sendiri jika di temukan, jika tidak akan mengembalikan null.
:::

```javascript
const handleCheck = async (id) => {
    // Checkbox button
    const updatedItems = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(updatedItems);

    const selectedItem = items.find((item) => item.id === id);

    if (!selectedItem.checked) {
        toast.success(`${selectedItem.item} is checked`);
    } else {
        toast(`${selectedItem.item} is unchecked`);
    }
};

```
### Push project ke github
Perintah git untuk mengunggah file proyek ke repository github.
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hudamnhd/todolist.git
git push -u origin main
```
### Deploy project react
Langkah-langkah mendeploy proyek react ke **Netlify**:
- Register [https://www.netlify.com](https://www.netlify.com)
- Add new site
- Import an existing project
- Connect github repository project
- Project todolist sudah terdeploy dan bisa di akses

