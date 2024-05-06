let terminal = document.getElementById('terminal-output');
let worker;

function startWorker() {
    worker = new Worker(new URL('./worker.js', import.meta.url))
    worker.onerror = function (event) {
        console.error('Worker error: ', event.message, event.filename, event.lineno);
    };

    worker.onmessage = function (event) {
        let responce = event.data.responce
        if (responce === 'result') {
            terminal.innerHTML += event.data.result + '\n>>> ';
            console.log(event.data.result)
        } else if (responce === 'request') {
           let responce = prompt('Enter the input');
            worker.postMessage({ command: 'input', code: responce });
        }
    };
}

function stopWorker() {
    if (confirm('Do you want to stop the code ?')) {
        worker.terminate();
        terminal.innerHTML = '';
        startWorker();
    }

}

startWorker(); // Start the initial worker instance



export { worker, terminal, stopWorker };
