// Worker pour la commande 'cd'

const router = new Puter.Router();

router.get('/api/exec', async (event) => {
    const path = event.query.args || '/';
    try {
        // Vérifie si le chemin existe
        const exists = await puter.fs.exists(path);
        if (!exists) {
            return `Erreur: Le chemin ${path} n'existe pas.`;
        }
        
        // Simule le changement de répertoire (en réalité, il faudrait gérer cela côté client)
        return `Répertoire courant changé pour ${path}`;
    } catch (e) {
        return `Erreur: ${e.message}`;
    }
});