document.addEventListener('DOMContentLoaded', function() {
    // OSI Model Canvas Interaction
    const canvas = document.getElementById('osiCanvas');
    const ctx = canvas.getContext('2d');
    
    // Adjust canvas size for high DPI displays
    function resizeCanvas() {
        const ratio = window.devicePixelRatio || 1;
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        ctx.scale(ratio, ratio);
        drawOSIModel();
    }
    
    // OSI Model Data
    const osiLayers = [
        { name: "Application", number: 7, color: "#3B82F6", protocols: ["HTTP", "FTP", "SMTP"] },
        { name: "Presentation", number: 6, color: "#6366F1", protocols: ["SSL/TLS", "JPEG", "MPEG"] },
        { name: "Session", number: 5, color: "#8B5CF6", protocols: ["NetBIOS", "RPC"] },
        { name: "Transport", number: 4, color: "#EC4899", protocols: ["TCP", "UDP"] },
        { name: "Network", number: 3, color: "#F59E0B", protocols: ["IP", "ICMP", "ARP"] },
        { name: "Data Link", number: 2, color: "#10B981", protocols: ["Ethernet", "PPP"] },
        { name: "Physical", number: 1, color: "#6B7280", protocols: ["Cat5", "Fiber", "Wi-Fi"] }
    ];
    
    // Draw OSI Model
    function drawOSIModel() {
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        const layerHeight = height / osiLayers.length;
        
        ctx.clearRect(0, 0, width, height);
        
        osiLayers.forEach((layer, index) => {
            const y = index * layerHeight;
            
            // Draw layer
            ctx.fillStyle = layer.color;
            ctx.fillRect(0, y, width, layerHeight);
            
            // Draw text
            ctx.fillStyle = "#FFFFFF";
            ctx.font = "bold 16px Inter";
            ctx.textAlign = "center";
            ctx.fillText(`Layer ${layer.number}: ${layer.name}`, width/2, y + layerHeight/2 + 6);
        });
    }
    
    // Handle canvas clicks
    canvas.addEventListener('click', function(e) {
        const rect = canvas.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const layerHeight = canvas.offsetHeight / osiLayers.length;
        const layerIndex = Math.floor(y / layerHeight);
        
        if (layerIndex >= 0 && layerIndex < osiLayers.length) {
            const layer = osiLayers[layerIndex];
            alert(`Layer ${layer.number}: ${layer.name}\nProtocols: ${layer.protocols.join(", ")}`);
        }
    });
    
    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Add dark mode toggle functionality
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.className = 'fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg transition-colors';
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });
    document.body.appendChild(darkModeToggle);
});
