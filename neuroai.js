
async function askAgent() {
  const input = document.getElementById("input").value;
  const responseBox = document.getElementById("response");
  const simulated = {
    "What is the hippocampus?": "The hippocampus is a seahorse-shaped region of the brain crucial for forming and organizing new memories.",
    "How do neurons communicate?": "Neurons communicate via electrical impulses and chemical signals across synapses."
  };
  const answer = simulated[input] || "Thinking... (this would be replaced by a real API call to a neuroscience model)";
  responseBox.textContent = answer;
}
