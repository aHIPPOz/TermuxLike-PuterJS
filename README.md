# TermuxLike-PuterJS

**Un terminal web moderne inspiré de Termux, construit avec Puter.JS.**

![TermuxLike-PuterJS](https://via.placeholder.com/800x400/1e1e1e/4caf50?text=TermuxLike+-+PuterJS)

## 📌 Présentation
TermuxLike-PuterJS est un projet open-source qui vise à recréer une expérience similaire à **Termux** (un terminal Android populaire) directement dans un navigateur web, en utilisant **Puter.JS** pour la gestion des fichiers, des workers et des commandes.

Ce projet permet d'exécuter des commandes Linux-like (adaptées à Puter) dans une interface moderne, avec la possibilité d'ajouter des commandes personnalisées via une interface intuitive.

---

## 🚀 Fonctionnalités
- **Interface moderne** : Design inspiré de Termux, avec animations et icônes.
- **Commandes de base** : `ls`, `cd`, `mkdir`, `neofetch`, `help`, `bash`.
- **Commandes personnalisées** : Créez vos propres commandes via une interface modale.
- **Stockage Puter FS** : Toutes les commandes et fichiers sont stockés dans Puter File System.
- **Workers Puter** : Chaque commande est un worker JavaScript déployé dynamiquement.

---

## 🛠 Installation et Utilisation

### 1. Cloner le dépôt
```bash
git clone https://github.com/aHIPPOz/TermuxLike-PuterJS.git
cd TermuxLike-PuterJS
```

### 2. Ouvrir le projet
Ouvrez le fichier `index.html` dans un navigateur web moderne (Chrome, Firefox, Edge).

### 3. Utiliser le terminal
- Tapez `help` pour lister les commandes disponibles.
- Tapez `create` pour ajouter une commande personnalisée.
- Testez les commandes de base comme `ls`, `cd`, ou `neofetch`.

---

## 📂 Structure du Projet
```
TermuxLike-PuterJS/
├── index.html          # Point d'entrée, UI du terminal
├── src/
│   ├── style.css       # Styles pour l'UI
│   ├── termux.js       # Logique du terminal
│   └── commands/       # Workers pour chaque commande
│       ├── ls.js
│       ├── cd.js
│       ├── mkdir.js
│       ├── neofetch.js
│       ├── help.js
│       └── bash.js
└── assets/             # Images, icônes, etc.
```

---

## 🔧 Commandes Disponibles

| Commande      | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `help`        | Liste toutes les commandes disponibles.                                     |
| `ls`          | Liste les fichiers et dossiers dans le répertoire courant.                  |
| `cd`          | Change de répertoire.                                                       |
| `mkdir`       | Crée un nouveau dossier.                                                    |
| `neofetch`    | Affiche des informations système stylisées.                                |
| `bash`        | Ouvre un shell bash (simulé).                                               |
| `create`      | Ouvre l'interface pour créer une commande personnalisée.                    |

---

## 🎯 Améliorations et Fonctionnalités Futures

Voici quelques idées pour améliorer TermuxLike-PuterJS :

### 🔹 Fonctionnalités
- **Historique des commandes** : Ajouter un historique des commandes exécutées.
- **Auto-complétion** : Complétion automatique des commandes et chemins.
- **Thèmes personnalisables** : Permettre de changer de thème (sombre/clair, couleurs).
- **Gestion des permissions** : Ajouter une gestion des permissions pour les commandes.
- **Éditeur de fichiers intégré** : Permettre d'éditer des fichiers directement dans le terminal.
- **Support multi-onglets** : Permettre d'ouvrir plusieurs sessions de terminal.
- **Intégration avec d'autres APIs** : Ajouter des commandes pour interagir avec des APIs externes.

### 🔹 Améliorations Techniques
- **Optimisation des workers** : Améliorer la performance et la réactivité des workers.
- **Tests automatisés** : Ajouter des tests pour chaque commande.
- **Documentation avancée** : Ajouter des tutoriels et des exemples d'utilisation.
- **Support mobile** : Améliorer l'UI pour une meilleure expérience sur mobile.

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment contribuer :

1. **Forker le dépôt** : Créez un fork du projet.
2. **Créer une branche** : Créez une branche pour votre fonctionnalité/bugfix.
3. **Faire vos modifications** : Ajoutez vos modifications et testez-les.
4. **Ouvrir une Pull Request** : Soumettez vos modifications pour revue.

---

## 📜 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📬 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une **issue** ou à me contacter directement.

🌐 **Site Web** : [sultramod.com](https://sultramod.com)
🐦 **Twitter** : [@aHIPPOz](https://twitter.com/aHIPPOz)

---

⭐ **Star ce projet** si vous l'aimez ! 🚀