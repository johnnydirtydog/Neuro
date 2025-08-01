
async function askAgent() {
    const input = document.getElementById("input");
    const responseBox = document.getElementById("response");
    
    if (!input || !responseBox) {
        console.error('Input or response elements not found');
        return;
    }
    
    const query = input.value.trim();
    if (!query) {
        responseBox.textContent = "Please enter a question about the brain.";
        return;
    }
    
    // Show loading state
    responseBox.textContent = "Thinking...";
    
    // Simulated neuroscience knowledge base
    const simulated = {
        "what is the hippocampus": "The hippocampus is a seahorse-shaped region of the brain crucial for forming and organizing new memories.",
        "how do neurons communicate": "Neurons communicate via electrical impulses and chemical signals across synapses.",
        "what is the amygdala": "The amygdala is an almond-shaped structure that processes emotions, particularly fear and pleasure.",
        "what is the prefrontal cortex": "The prefrontal cortex is responsible for executive functions like decision-making, planning, and impulse control.",
        "what is a synapse": "A synapse is a junction between two neurons where they communicate using neurotransmitters.",
        "what are neurotransmitters": "Neurotransmitters are chemical messengers that carry signals between neurons.",
        "what is the cerebellum": "The cerebellum is responsible for balance, coordination, and fine motor control.",
        "what is the brain stem": "The brain stem controls vital functions like breathing, heart rate, and blood pressure."
    };
    
    // Normalize the query for matching
    const normalizedQuery = query.toLowerCase();
    let answer = null;
    
    // Look for partial matches
    for (const [key, value] of Object.entries(simulated)) {
        if (normalizedQuery.includes(key) || key.includes(normalizedQuery)) {
            answer = value;
            break;
        }
    }
    
    // Default response if no match found
    if (!answer) {
        answer = "That's an interesting question about neuroscience! In a full implementation, this would connect to a specialized AI model trained on neuroscience data.";
    }
    
    // Simulate thinking delay
    setTimeout(() => {
        responseBox.textContent = answer;
        input.value = ""; // Clear input
    }, 500);
}
