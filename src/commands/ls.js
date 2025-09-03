// Worker pour la commande 'ls'

const router = new Puter.Router();

router.get('/api/exec', async (event) => {
    const path = event.query.args || '/';
    try {
        const files = await puter.fs.ls(path);
        let result = '';
        
        if (files.length === 0) {
            result = `Aucun fichier dans ${path}`;
        } else {
            result = files.map(f => {
                const type = f.type === 'directory' ? '📁' : '📄';
                return `${type} ${f.name}`;
            }).join('<br>');
        }
        
        return result;
    } catch (e) {
        return `Erreur: ${e.message}`;
    }
});