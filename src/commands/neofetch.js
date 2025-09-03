// Worker pour la commande 'neofetch'

const router = new Puter.Router();

router.get('/api/exec', async () => {
    const user = await puter.user.get();
    const info = {
        user: user.username,
        os: 'PuterJS',
        terminal: 'TermuxLike',
        uptime: 'En cours d\'exécution',
        shell: 'Web Terminal',
        cpu: 'Cloud CPU',
        memory: 'Illimité',
    };
    
    return `
        <span style="color: #4caf50;">${info.user}@puter</span><br>
        <span style="color: #2196f3;">OS:</span> ${info.os}<br>
        <span style="color: #2196f3;">Terminal:</span> ${info.terminal}<br>
        <span style="color: #2196f3;">Uptime:</span> ${info.uptime}<br>
        <span style="color: #2196f3;">Shell:</span> ${info.shell}<br>
        <span style="color: #2196f3;">CPU:</span> ${info.cpu}<br>
        <span style="color: #2196f3;">Memory:</span> ${info.memory}
    `;
});