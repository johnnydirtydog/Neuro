
function init3DBrain() {
    const canvas = document.getElementById("brain-canvas");
    if (!canvas) {
        console.error('Brain canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to fill container
    function resizeCanvas() {
        const container = document.getElementById("brain-container");
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Simple 3D-like brain visualization using 2D canvas
    let rotation = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isRotating = true;
    
    // Brain regions data
    const brainRegions = [
        { name: "Cerebrum", x: 0, y: -50, size: 120, color: "#ff9999" },
        { name: "Cerebellum", x: 0, y: 80, size: 60, color: "#9999ff" },
        { name: "Brain Stem", x: 0, y: 120, size: 30, color: "#99ff99" },
        { name: "Left Hippocampus", x: -80, y: 0, size: 25, color: "#ffff99" },
        { name: "Right Hippocampus", x: 80, y: 0, size: 25, color: "#ffff99" },
        { name: "Left Amygdala", x: -60, y: 20, size: 20, color: "#ff99ff" },
        { name: "Right Amygdala", x: 60, y: 20, size: 20, color: "#ff99ff" }
    ];
    
    function drawBrain() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Set up transformation
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // Apply rotation
        const rotY = Math.cos(rotation) * 0.8;
        const rotX = Math.sin(rotation * 0.7) * 0.3;
        
        // Draw brain regions
        brainRegions.forEach((region, index) => {
            ctx.save();
            
            // Apply 3D-like transformations
            const x3d = region.x * rotY;
            const y3d = region.y + rotX * 20;
            const scale = 0.8 + 0.2 * Math.cos(rotation + index * 0.5);
            
            // Create gradient for 3D effect
            const gradient = ctx.createRadialGradient(x3d, y3d, 0, x3d, y3d, region.size * scale);
            gradient.addColorStop(0, region.color);
            gradient.addColorStop(0.7, region.color + "88");
            gradient.addColorStop(1, region.color + "33");
            
            // Draw region
            ctx.beginPath();
            ctx.arc(x3d, y3d, region.size * scale, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Add border
            ctx.strokeStyle = region.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Add label for main regions
            if (region.size > 50) {
                ctx.fillStyle = "#ffffff";
                ctx.font = "12px Arial";
                ctx.textAlign = "center";
                ctx.fillText(region.name, x3d, y3d + region.size * scale + 15);
            }
            
            ctx.restore();
        });
        
        // Add title
        ctx.fillStyle = "#4CAF50";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillText("3D Brain Model", 0, -canvas.height / 2 + 30);
        
        // Add interaction hint
        ctx.fillStyle = "#aaaaaa";
        ctx.font = "14px Arial";
        ctx.fillText("Click and drag to rotate", 0, canvas.height / 2 - 20);
        
        ctx.restore();
    }
    
    // Mouse interaction
    let isDragging = false;
    let lastMouseX = 0;
    
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        isRotating = false;
        lastMouseX = e.clientX;
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - lastMouseX;
            rotation += deltaX * 0.01;
            lastMouseX = e.clientX;
        }
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        setTimeout(() => { isRotating = true; }, 2000); // Resume auto-rotation after 2 seconds
    });
    
    canvas.addEventListener('mouseleave', () => {
        isDragging = false;
        isRotating = true;
    });
    
    // Animation loop
    function animate() {
        if (isRotating && !isDragging) {
            rotation += 0.01;
        }
        drawBrain();
        requestAnimationFrame(animate);
    }
    
    animate();
    console.log('2D Brain visualization initialized');
}
