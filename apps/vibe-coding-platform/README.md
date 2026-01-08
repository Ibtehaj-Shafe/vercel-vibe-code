# Vibe Coding Platform – Trigger.dev + e2b Integration

This is a **Next.js** application based on the open-source **Vercel Vibe Coding Platform**.  
The project replaces the original **Vercel Sandbox execution layer** with **Trigger.dev workflows** powered by **e2b sandboxes**, while keeping the same user experience.

---

## 🚀 Overview

- **Framework**: Next.js (App Router)
- **Execution Orchestration**: Trigger.dev
- **Sandbox Runtime**: e2b
- **Language**: TypeScript

The UI remains unchanged from the original Vibe Code demo.  
Only the backend execution layer has been replaced.

---

## 🧠 Architecture

**High-level flow:**

1. User writes code in the browser
2. User clicks **Run**
3. API triggers a **Trigger.dev task**
4. Task executes code inside an **e2b sandbox**
5. Output and status are returned to the UI

---

## ⚙️ Tech Stack

- **Next.js** – frontend & API routes
- **Trigger.dev** – workflow orchestration
- **e2b** – isolated sandbox execution
- **TypeScript** – type safety
- **pnpm** – package manager

---

## 🛠 Getting Started

### 1️⃣ Install dependencies

```bash
pnpm install
