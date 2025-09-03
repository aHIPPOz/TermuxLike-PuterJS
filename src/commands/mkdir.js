// Worker pour la commande 'mkdir'

const router = new Puter.Router();

router.get('/api/exec', async (event) => {
    const path = event.query.args;
    if (!path) {
        return 'Usage: mkdir <nom_du_dossier>';
    }
    
    try {
        await puter.fs.mkdir(path);
        return `Dossier ${path} créé avec succès.`;
    } catch (e) {
        return `Erreur: ${e.message}`;
    }
});