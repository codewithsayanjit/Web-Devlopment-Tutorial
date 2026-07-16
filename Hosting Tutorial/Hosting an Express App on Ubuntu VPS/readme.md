# 🚀 Hosting an Express.js App on Ubuntu VPS (Hostinger)

This guide explains how to deploy and host an Express.js application on an Ubuntu VPS provided by Hostinger using Node.js, PM2, and Nginx.

---

# 📋 Prerequisites

* Hostinger Ubuntu VPS
* SSH Access
* Basic Linux command knowledge
* Domain name (Optional)

---

# 🔐 Step 1: Connect to Your VPS

Connect to your VPS using SSH.

```bash
ssh root@YOUR_SERVER_IP
```

---

# 📁 Step 2: Create a Project Directory

Check existing files and folders:

```bash
ls
```

Detailed view:

```bash
ls -lart
```

Create a project folder:

```bash
mkdir sample
```

Move into the folder:

```bash
cd sample
```

---

# 🟢 Step 3: Install Node.js and Build Essentials

Update package lists:

```bash
sudo apt update
```

Install Node.js:

```bash
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify installation:

```bash
node -v
npm -v
```

Install build tools:

```bash
sudo apt-get install build-essential -y
```

---

# 📦 Step 4: Initialize Node.js Project

Create a new Node.js project:

```bash
npm init -y
```

Install Express:

```bash
npm install express
```

Check project files:

```bash
ls
```

---

# 📝 Step 5: Create Express Application

Create the application file:

```bash
vim index.js
```

Paste the following code:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

Save and exit Vim:

```bash
:wq
```

---

# ▶️ Step 6: Run the Application

Start the application:

```bash
node index.js
```

You should see:

```bash
Example app listening on port 3000
```

Open:

```text
http://YOUR_SERVER_IP:3000
```

You should see:

```text
Hello World!
```

Press:

```bash
CTRL + C
```

to stop the application.

---

# ⚙️ Step 7: Install PM2

PM2 keeps your application running continuously.

Install PM2 globally:

```bash
sudo npm install -g pm2
```

Start the application using PM2:

```bash
pm2 start index.js
```

View running processes:

```bash
pm2 list
```

View logs:

```bash
pm2 logs
```

Save PM2 process list:

```bash
pm2 save
```

Enable PM2 startup on server reboot:

```bash
pm2 startup
```

Run the command displayed by PM2.

---

# 🌐 Step 8: Install Nginx

Install Nginx:

```bash
sudo apt install nginx -y
```

Check Nginx status:

```bash
sudo systemctl status nginx
```

Enable Nginx:

```bash
sudo systemctl enable nginx
```

---

# 📝 Step 9: Configure Nginx Reverse Proxy

Open the default configuration file:

```bash
sudo nano /etc/nginx/sites-available/default
```

Replace the server block contents with:

```nginx
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Save and exit:

```bash
CTRL + O
ENTER
CTRL + X
```

---

# ✅ Step 10: Test and Restart Nginx

Test Nginx configuration:

```bash
sudo nginx -t
```

Restart Nginx:

```bash
sudo systemctl restart nginx
```

Check status:

```bash
sudo systemctl status nginx
```

---

# 🔥 Step 11: Allow Firewall (Optional)

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

Check status:

```bash
sudo ufw status
```

---

# 🎉 Deployment Complete

Your Express.js application is now running on:

```text
http://YOUR_SERVER_IP
```

or

```text
http://YOUR_DOMAIN_NAME
```

without specifying port `3000`.

---

# Useful Commands

### PM2 Commands

```bash
pm2 list
pm2 logs
pm2 restart index.js
pm2 stop index.js
pm2 delete index.js
```

### Nginx Commands

```bash
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl reload nginx
sudo systemctl status nginx
```

### Linux Commands

```bash
ls
ls -lart
pwd
cd
mkdir sample
rm -rf sample
```

---

# Tech Stack

* Ubuntu VPS
* Node.js
* Express.js
* PM2
* Nginx
* Hostinger VPS

Happy Hosting! 🚀
