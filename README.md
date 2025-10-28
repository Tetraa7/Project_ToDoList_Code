# ToDoList & Calendrier - Formulaire d'Inscription

Application de formulaire d'inscription multi-étapes pour ToDoList & Calendrier.

## 🚀 Déploiement

### Option 1 : Vercel (Recommandé - Gratuit)

1. **Créez un compte sur [Vercel](https://vercel.com)**

2. **Installez Vercel CLI** (optionnel) :
   ```bash
   npm install -g vercel
   ```

3. **Déployez** :
   - **Méthode A - Via GitHub** :
     - Créez un dépôt GitHub avec votre code
     - Connectez Vercel à votre compte GitHub
     - Importez votre dépôt
     - Vercel déploiera automatiquement !
   
   - **Méthode B - Via CLI** :
     ```bash
     npm install
     vercel
     ```

4. **Votre site sera en ligne** à une URL comme : `https://votre-app.vercel.app`

### Option 2 : Netlify (Gratuit)

1. **Créez un compte sur [Netlify](https://netlify.com)**

2. **Déployez** :
   - Glissez-déposez le dossier du projet sur Netlify Drop
   - OU connectez votre dépôt GitHub
   - Netlify construira et déploiera automatiquement

3. **Configuration de build** :
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 3 : GitHub Pages (Gratuit)

1. **Créez un dépôt GitHub** avec votre code

2. **Installez gh-pages** :
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Ajoutez dans package.json** :
   ```json
   "homepage": "https://votre-username.github.io/nom-du-repo",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Déployez** :
   ```bash
   npm run deploy
   ```

### Option 4 : Hébergement classique (OVH, Hostinger, etc.)

1. **Construisez le projet** :
   ```bash
   npm install
   npm run build
   ```

2. **Uploadez le contenu du dossier `dist/`** sur votre serveur web via FTP

## 💻 Développement local

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

## 📁 Structure du projet

```
├── App.tsx                 # Composant principal
├── main.tsx               # Point d'entrée
├── index.html             # Template HTML
├── components/            # Composants React
│   ├── signup/           # Composants du formulaire
│   └── ui/               # Composants UI (shadcn)
├── styles/
│   └── globals.css       # Styles globaux
└── package.json          # Configuration npm
```

## 🎨 Fonctionnalités

- ✅ Formulaire multi-étapes (6 étapes)
- ✅ Validation en temps réel avec messages d'erreur
- ✅ Thème bleu cohérent
- ✅ Indicateur de progression
- ✅ Récapitulatif avant validation
- ✅ Design responsive
- ✅ Sécurité du mot de passe renforcée

## 🔧 Technologies utilisées

- React 18
- TypeScript
- Vite
- Tailwind CSS 4
- shadcn/ui
- Lucide Icons

## 📝 Notes

- L'application est entièrement frontend (pas de backend)
- Les données du formulaire sont stockées localement dans le state
- Pour une version production, connectez à un backend API

## 🌐 URL de démonstration

Une fois déployé, votre site sera accessible publiquement !

---

**Développé avec ❤️ pour ToDoList & Calendrier**
