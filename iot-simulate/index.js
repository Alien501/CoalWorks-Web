const io = require('socket.io-client');

class SocketIOClient {
    constructor(url = 'http://localhost:8888') {
        this.url = url;
        this.data = {
            Node: 1,
            latitude: 13.099,
            longitude: 74.798,
            accelX: -0.116455,
            accelY: 0.589111,
            accelZ: 1.023926,
            temperature: 29.13,
            pressure: 1008.01,
            altitude: 43.71417,
            methanePPM: 16,
            carbonMonoxidePPM: 103,
            alert: "no"
        };
        this.socket = null;
        this.sendInterval = null;
        this.connect();
    }

    connect() {
        // Create Socket.IO client connection
        this.socket = io(this.url, {
            reconnection: true,
            reconnectionAttempts: Infinity,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            randomizationFactor: 0.5
        });

        // Connection events
        this.socket.on('connect', () => {
            console.log('Connected to Socket.IO server');
            this.startSendingData();
        });

        // Broadcast message handler
        this.socket.on('broadcast', (data) => {
            console.log('Received broadcast:', data);
        });

        // Connection error handling
        this.socket.on('connect_error', (error) => {
            console.error('Connection error:', error);
        });

        // Disconnection handling
        this.socket.on('disconnect', (reason) => {
            console.log('Disconnected:', reason);
        });
    }

    updateData() {
        this.data.latitude += (Math.random() - 0.5) * 0.001;
        this.data.longitude += (Math.random() - 0.5) * 0.001;
        this.data.accelX += (Math.random() - 0.5) * 0.01;
        this.data.accelY += (Math.random() - 0.5) * 0.01;
        this.data.accelZ += (Math.random() - 0.5) * 0.01;
        this.data.temperature += (Math.random() - 0.5) * 0.1;
        this.data.pressure += (Math.random() - 0.5) * 0.1;
        this.data.altitude += (Math.random() - 0.5) * 0.1;
        this.data.methanePPM += Math.floor((Math.random() - 0.5) * 1);
        this.data.carbonMonoxidePPM += Math.floor((Math.random() - 0.5) * 1);

        this.data.alert = (this.data.methanePPM > 20 || this.data.carbonMonoxidePPM > 150) ? "yes" : "no";
    }

    startSendingData() {
        // Stop any existing interval
        if (this.sendInterval) {
            clearInterval(this.sendInterval);
        }

        // Start new sending interval
        this.sendInterval = setInterval(() => {
            this.sendData();
        }, 5000);
    }

    sendData() {
        if (this.socket && this.socket.connected) {
            try {
                this.updateData();
                // Send as a 'message' event to match server setup
                this.socket.emit('message', JSON.stringify(this.data));
                console.log('Data sent successfully:', this.data);
            } catch (error) {
                console.error('Error sending data:', error);
            }
        } else {
            console.error('Socket is not connected');
        }
    }
}

// Create the Socket.IO client
const client = new SocketIOClient();