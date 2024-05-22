let terminal = document.getElementById('terminal-output');
let worker;

function startWorker() {
    worker = new Worker(new URL('./worker.js', import.meta.url))
    worker.onerror = function (event) {
        alert("Error occured !" + event.message)
    };

    worker.onmessage = function (event) {
        let responce = event.data.responce
        if (responce === 'result') {
            terminal.innerHTML += event.data.result + '\n>>> ';
        } else if (responce === 'request') {
            let responce = prompt('Enter the input');
            worker.postMessage({ command: 'input', code: responce });
        }
        else if (responce === 'error') {
            alert("Something happened ! - " + event.data.error)
        }
        else {
            console.log(event.data)
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
