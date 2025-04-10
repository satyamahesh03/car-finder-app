# 🚗 Car Finder Web App

A modern, responsive car browsing application built with **React + Vite**. Users can filter, search, view detailed specifications, and save favorite cars to a wishlist.

---

## 🔧 Features

- 🔍 **Search & Filter** cars by brand, price, fuel type, seating
- ❤️ **Wishlist** functionality using Context API + LocalStorage
- 🌙 **Dark/Light Theme Toggle** with persistence
- 📱 **Responsive Design** for desktop and mobile
- 🧭 **Pagination** to show 10 cars per page
- 🎨 **Framer Motion & Tailwind CSS** for smooth UI animations
- ⚙️ **Real-time filtering & DOM updates**
- 📦 **Mock data (cars.json)** used for listing

---

## 🛠️ Tech Stack

- React.js with Vite
- Tailwind CSS for styling
- React Router DOM for routing
- Framer Motion for animations
- Context API + LocalStorage for state

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/car-finder-app.git
cd car-finder-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the App
```bash
npm run dev
```

The app will start at [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure
```
src/
├── assets/            # Car images and icons (optional)
├── components/        # Reusable components (Navbar, CarCard, FilterPanel, etc.)
├── context/           # WishlistContext (global wishlist state)
├── pages/             # Route pages (Home, CarDetails, Wishlist)
├── App.jsx            # App routing
├── main.jsx           # Entry point
├── cars.json          # Car data used in the app
```

---

## 🌐 Deployment
This app is ready to be deployed on platforms like:
- [Vercel](https://vercel.com/)

Make sure to:
- Keep `cars.json` in the `public/` folder
- Configure routing properly to avoid 404 on refresh (e.g., with SPA rewrite rules)

---

## 📷 Screenshots
- Home with Filters
<img width="1440" alt="Screenshot 2025-04-10 at 11 48 33 PM" src="https://github.com/user-attachments/assets/31062b21-af0e-425a-b812-5a0ab6fa291d" />


- Car Details Page
<img width="1440" alt="Screenshot 2025-04-10 at 11 49 37 PM" src="https://github.com/user-attachments/assets/03d04e32-6a0c-448c-9a02-0f1168578ca2" />


- Wishlist Page
<img width="1440" alt="Screenshot 2025-04-10 at 11 50 44 PM" src="https://github.com/user-attachments/assets/b14314ba-4af6-45c6-8611-1663e508b458" />


---

## ✨ Credits
Built with ❤️ by **Satya Mahesh**

---

## 📄 License
This project is open-source and available under the MIT License.
