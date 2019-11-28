class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

function aws(server) {
    server.isAWS = true;
    server.info = function() {
        return server.url;
    }

    return server;
}

const s1 = aws(new Server('123.22.12.123', '8080'));
console.log(s1.info());
