// Worker pour la commande 'help'

const router = new Puter.Router();

router.get('/api/exec', async () => {
    const workers = await puter.workers.list();
    let result = '<strong>Commandes disponibles :</strong><br><br>';
    
    for (const [name, details] of Object.entries(workers)) {
        if (name.startsWith('cmd_')) {
            const cmdName = name.replace('cmd_', '');
            const deployDate = new Date(details.deployTime * 1000).toLocaleString();
            result += `- <strong>${cmdName}</strong> (déployé le ${deployDate})<br>`;
        }
    }
    
    result += '<br>Utilisez <strong>create</strong> pour ajouter une commande personnalisée.';
    return result;
});