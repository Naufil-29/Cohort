let currentClock;

function searchBackend(){ 
    console.log("request sent to backend");
}

function debouncedBackend() { 
    clearTimeout(currentClock);
    currentClock = setTimeout(searchBackend, 30)
}

debouncedBackend()
debouncedBackend()
debouncedBackend()
debouncedBackend()
debouncedBackend()
debouncedBackend()
debouncedBackend()