
# 🎉 Occazio – AI-Powered Full-Stack Event Management Platform

Occazio is a **production-grade, AI-powered event management platform** that simplifies the complete lifecycle of an event — from intelligent creation to real-time attendee management and analytics.

Designed with scalability and performance in mind, Occazio serves both **event organizers** and **attendees** through a modern, responsive, and real-time web experience.

---

## 🖼️ Application Preview


![Occazio Front Page](/public/home.png)
![Occazio Explore Page](/public/explore.png)

---

## 📌 Problem Statement

Managing events traditionally involves:
- Manual event creation
- Poor attendee discovery
- Inefficient ticketing systems
- Delayed analytics and check-ins

Occazio solves these problems by combining **AI automation**, **real-time databases**, and **modern UI/UX** into a single unified platform.

---

## ✨ Key Highlights

- AI-powered event generation using natural language prompts
- Real-time dashboards and attendee tracking
- QR-based digital ticketing and check-in
- Subscription-based monetization model
- Production-ready architecture

---

## 🌟 Core Features Explained

### 🤖 AI-Powered Event Creation
Occazio integrates **Google Gemini 2.0 Flash API** to assist organizers in creating events effortlessly.

**How it works:**
1. Organizer provides a short prompt (e.g., *“Tech meetup for React developers in Bangalore”*).
2. Gemini AI generates:
   - Event title
   - Detailed description
   - Category suggestions
3. Organizer selects a cover image using **Unsplash Image Picker**.
4. Smart date-time picker validates and stores timestamps correctly.

This reduces event creation time from minutes to seconds.

---

### 👤 Personalized Attendee Experience

#### 🔹 Smart Onboarding
New users complete a multi-step onboarding process:
- Interest selection
- City & state selection

This data is stored in the **Users table** and used for recommendations.

#### 🔹 Explore & Discover
The Explore page provides:
- Featured events
- Category-based browsing
- Location-aware recommendations

#### 🔹 Digital Ticketing System
- Each registration generates a **unique QR code**
- Tickets are stored in the **My Tickets** dashboard
- QR codes are used for event entry verification

---

### 📊 Organizer Dashboard & Analytics

The organizer dashboard is fully real-time, powered by **Convex**.

**Key metrics include:**
- Total registrations
- Check-in count
- Revenue tracking
- Time remaining until event

#### 📷 Built-in QR Scanner
- Uses HTML5 camera APIs
- Works directly in the browser (mobile-friendly)
- Instantly updates check-in status

#### 📄 Attendee Management
- View attendee lists
- Manual check-in support
- Export registrations as CSV files

---

## 🛠️ Technical Architecture

### 🔧 Technology Stack

| Layer | Technology |
|------|------------|
| Frontend | Next.js 15 (App Router) |
| Styling | Tailwind CSS + Shadcn UI |
| Database | Convex (Real-time backend) |
| Authentication | Clerk |
| Payments | Stripe (via Clerk Billing) |
| AI | Google Gemini 2.0 Flash |
| Images | Unsplash API |
| Deployment | Vercel |

---

## 🗄️ Database Design (Convex)

### 1️⃣ Users Table
Stores:
- User profile data
- Onboarding completion status
- Interests & location
- Subscription tier (Free / Pro)

### 2️⃣ Events Table
Stores:
- Organizer ID
- Event metadata
- AI-generated descriptions
- Capacity limits
- Custom theme colors

### 3️⃣ Registrations Table
Stores:
- User ID
- Event ID
- QR code identifier
- Check-in status

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js (v18 or later)
- npm or yarn
- API keys for:
  - Clerk
  - Convex
  - Google AI Studio
  - Unsplash

---

### 📦 Installation

```bash
git clone https://github.com/puneet426/occazio
cd occazio
npm install
```

---

### 🎨 Initialize Shadcn UI

```bash
npx shadcn@latest init
```

---

### 🔗 Setup Convex Backend

```bash
npx convex dev
```

---

### 🔐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key

CONVEX_DEPLOYMENT=your_deployment
CONVEX_DEPLOYMENT_KEY=your_key

GEMINI_API_KEY=your_key
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_key
```

---

### ▶️ Run the Application

```bash
npm run dev
```

Visit: **https://occazio.vercel.app/**

---

## 💎 Occazio Pro (Premium Subscription)

Occazio includes a paid subscription model handled via **Clerk Billing & Stripe**.

### 🔓 Pro Benefits
- Unlimited event creation
- Custom branding and theme colors
- Pro badge across the platform
- Priority feature access (future)

---

## 🌐 Deployment (Vercel)

### 🚀 Steps
1. Push code to GitHub
2. Connect repository to Vercel
3. Set build command:
   ```bash
   npx convex deploy && next build
   ```
4. Add environment variables
5. Deploy

---

## 📌 Future Enhancements
- Advanced recommendation engine
- Event analytics insights
- Admin moderation panel
- Organizer verification system

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome.



---

⭐ If you like **Occazio**, consider starring the repository!


proxy.js
``````