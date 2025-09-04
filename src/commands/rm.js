// Worker pour la commande 'rm'

const router = new Puter.Router();

router.get('/api/exec', async (event) => {
    const path = event.query.args;
    if (!path) {
        return 'Usage: rm <fichier_ou_dossier>';
    }
    
    try {
        // Vérifie si le chemin existe
        const exists = await puter.fs.exists(path);
        if (!exists) {
            return `Erreur: Le fichier ou dossier ${path} n'existe pas.`;
        }
        
        // Supprime le fichier ou dossier
        await puter.fs.rm(path);
        return `Fichier/Dossier ${path} supprimé avec succès.`;
    } catch (e) {
        return `Erreur: ${e.message}`;
    }
});