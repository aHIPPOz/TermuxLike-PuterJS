// Worker pour la commande 'bash' (shell simulé)

const router = new Puter.Router();

router.get('/api/exec', async (event) => {
    const args = event.query.args || '';
    
    // Simule un shell bash basique
    if (args.trim() === '') {
        return 'Bash simulé - Tapez une commande (ex: echo "Hello")';
    }
    
    // Gestion des commandes bash simulées
    if (args.startsWith('echo ')) {
        return args.replace('echo ', '');
    } else if (args === 'date') {
        return new Date().toLocaleString();
    } else if (args === 'pwd') {
        return '/home/user';
    } else if (args === 'whoami') {
        const user = await puter.user.get();
        return user.username;
    } else {
        return `Commande bash non reconnue : ${args}`;
    }
});