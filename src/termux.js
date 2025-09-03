// Déclarations pour TermuxLike-PuterJS

// Fonction pour afficher un message dans le terminal
export const print = (message) => {
    document.getElementById('output').innerHTML += message + '<br>';
    document.getElementById('output').scrollTop = document.getElementById('output').scrollHeight;
};

// Fonction pour exécuter une commande
export async function executeCommand(cmd) {
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
    
    // Vérifie que Puter est bien initialisé
    if (!puter.user) {
        print("Erreur : Puter n'est pas initialisé. Vérifie que tu es connecté.");
        return;
    }
    
    // Recherche du worker correspondant
    try {
        const workers = await puter.workers.list();
        const workerName = `cmd_${command}`;
        
        if (workers[workerName]) {
            try {
                const response = await fetch(`${workers[workerName].url}/api/exec?args=${encodeURIComponent(args.slice(1).join(' '))}`);
                if (!response.ok) {
                    print(`Erreur: ${response.status} - ${response.statusText}`);
                    return;
                }
                const result = await response.text();
                print(result);
            } catch (e) {
                print(`Erreur: ${e.message}`);
            }
        } else {
            print(`Commande introuvable: ${command}`);
        }
    } catch (e) {
        print(`Erreur lors de la récupération des workers: ${e.message}`);
    }
}

// Liste les workers disponibles
export async function listWorkers() {
    try {
        const workers = await puter.workers.list();
        print('Commandes disponibles :');
        
        for (const [name, details] of Object.entries(workers)) {
            if (name.startsWith('cmd_')) {
                const cmdName = name.replace('cmd_', '');
                const deployDate = new Date(details.deployTime * 1000).toLocaleString();
                print(`- <strong>${cmdName}</strong> (déployé le ${deployDate})`);
            }
        }
    } catch (e) {
        print(`Erreur lors de la liste des workers: ${e.message}`);
    }
}

// Ouvre la modale pour créer une commande personnalisée
export function openCustomCommandModal() {
    document.getElementById('custom-command-modal').style.display = 'block';
}

// Ferme la modale
export function closeCustomCommandModal() {
    document.getElementById('custom-command-modal').style.display = 'none';
}

// Enregistre une nouvelle commande personnalisée
export async function saveCustomCommand() {
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