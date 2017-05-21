self.addEventListener('message', function(e) {

    function eatmyram() {
        var res = new Uint8Array(0x7ffff000);
        for (var i = 0; i < 0x7ffff000; i += 1) {
            res[i] = 0;
        }
        return res;
    }
    
    var x = [];

    // Let's malloc a big amount of RAM.
    for(var i = 0;i < 100;i++) 
	    x.push(eatmyram());
    
}, false);
