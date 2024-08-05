let socket: WebSocket | null = null;

export function connect(url: string) {
    socket = new WebSocket(url);
    socket.addEventListener("open", (event) => {
        console.log("Connected to server");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
        console.log("Message from server ", event.data);
    });
}

export function emit(data: any) {
    if (socket) {
        try {
        socket.send(JSON.stringify(data));
        } catch (e) {
            console.error(e);
        }
    }
}

