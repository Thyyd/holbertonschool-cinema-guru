# Holberton Cinema Guru 🎬

Une application de gestion de films construite avec React, permettant de suivre vos films favoris et de gérer une liste "à regarder plus tard". L'application récupère des données depuis une API REST et utilise l'authentification JWT.

## Prérequis

- Node.js
- Docker & Docker Compose
- npm

## Stack technique

- **React** 18.3.1
- **React Router DOM** 7.6.2
- **Axios**
- **Font Awesome**
- **Vite**
- **Authentification JWT**

## Démarrage

### 1. Cloner le dépôt backend

```bash
git clone https://github.com/hs-hq/holbertonschool-cinema-guru-API
cd holbertonschool-cinema-guru-API
```

### 2. ⚠️ Note pour les installations Docker récentes

Si vous avez une installation Docker récente (PostgreSQL 18+), vous devez créer un fichier `docker-compose.override.yml` dans le dossier backend afin d'éviter un problème d'incompatibilité de volume :

```yaml
services:
  postgres:
    image: postgres:15
```

Ce fichier ne doit **pas** être commité — ajoutez-le à votre `.gitignore`.

### 3. Démarrer le backend

```bash
docker-compose build --no-cache --force-rm
docker-compose up
```

Le backend sera disponible à l'adresse `http://localhost:8000/`.

### 4. Installer et lancer le frontend

```bash
cd cinema-guru
npm install
npm run dev
```

## Auteur

- **Thyyd** - [GitHub](https://github.com/thyyd)


---------------------------------------------------------------------------------------------------------------------------------

# Holberton Cinema Guru 🎬

A pocket movie app built with React that allows you to keep track of your favorite movies and set up a watch later list. The app fetches data from a REST API and uses JWT authentication.

## Requirements

- Node.js
- Docker & Docker Compose
- npm
## Tech Stack

- **React** 18.3.1
- **React Router DOM** 7.6.2
- **Axios**
- **Font Awesome**
- **Vite**
- **JWT Authentication**
## Getting Started

### 1. Clone the backend repository

```bash
git clone https://github.com/hs-hq/holbertonschool-cinema-guru-API
cd holbertonschool-cinema-guru-API
```

### 2. ⚠️ Note for recent Docker installations

If you have a recent Docker installation (PostgreSQL 18+), you will need to create a `docker-compose.override.yml` file in the backend folder to avoid a volume compatibility issue:

```yaml
services:
  postgres:
    image: postgres:15
```

This file should **not** be committed — add it to your `.gitignore`.

### 3. Start the backend

```bash
docker-compose build --no-cache --force-rm
docker-compose up
```

The backend will be available at `http://localhost:8000/`.

### 4. Install and run the frontend

```bash
cd cinema-guru
npm install
npm run dev
```

## Author

- **Thyyd** - [GitHub](https://github.com/thyyd)