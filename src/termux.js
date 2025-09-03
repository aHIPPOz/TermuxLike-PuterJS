// Initialisation de Puter
const puter = new Puter();

// Fonction pour afficher un message dans le terminal
def print(message) {
    document.getElementById('output').innerHTML += message + '<br>';
    document.getElementById('output').scrollTop = document.getElementById('output').scrollHeight;
}

// Fonction pour exécuter une commande
async function executeCommand(cmd) {
    const args = cmd.trim().split(' ');
    const command = args[0];
    
    // Gestion des commandes internes
    if (command === 'help') {
        await listWorkers();
        return;
    } else if (command === 'create') {
        openCustomCommandModal();
        return;
    }
    
    // Recherche du worker correspondant
    const workers = await puter.workers.list();
    const workerName = `cmd_${command}`;
    
    if (workers[workerName]) {
        try {
            const response = await fetch(`${workers[workerName].url}/api/exec?args=${encodeURIComponent(args.slice(1).join(' '))}`);
            const result = await response.text();
            print(result);
        } catch (e) {
            print(`Erreur: ${e.message}`);
        }
    } else {
        print(`Commande introuvable: ${command}`);
    }
}

// Liste les workers disponibles
async function listWorkers() {
    const workers = await puter.workers.list();
    print('Commandes disponibles :');
    
    for (const [name, details] of Object.entries(workers)) {
        if (name.startsWith('cmd_')) {
            const cmdName = name.replace('cmd_', '');
            print(`- <strong>${cmdName}</strong> (déployé le ${new Date(details.deployTime * 1000).toLocaleString()})`);
        }
    }
}

// Ouvre la modale pour créer une commande personnalisée
function openCustomCommandModal() {
    document.getElementById('custom-command-modal').style.display = 'block';
}

// Ferme la modale
function closeCustomCommandModal() {
    document.getElementById('custom-command-modal').style.display = 'none';
}

// Enregistre une nouvelle commande personnalisée
async function saveCustomCommand() {
    const name = document.getElementById('command-name').value.trim();
    const code = document.getElementById('command-code').value.trim();
    
    if (!name || !code) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    const workerName = `cmd_${name}`;
    try {
        // Sauvegarde le code du worker dans Puter FS
        await puter.fs.write(`${workerName}.js`, code);
        
        // Déploie le worker
        await puter.workers.create(workerName, `${workerName}.js`);
        print(`Commande <strong>${name}</strong> créée avec succès !`);
        closeCustomCommandModal();
    } catch (e) {
        print(`Erreur lors de la création: ${e.message}`);
    }
}

// Écouteur pour la saisie utilisateur
document.getElementById('command').addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const cmd = e.target.value;
        e.target.value = '';
        print(`$ ${cmd}`);
        await executeCommand(cmd);
    }
});

// Écouteurs pour la modale
document.querySelector('.close').addEventListener('click', closeCustomCommandModal);
document.getElementById('save-command').addEventListener('click', saveCustomCommand);

// Initialisation
print('TermuxLike - PuterJS prêt. Tapez <strong>help</strong> pour voir les commandes disponibles.');