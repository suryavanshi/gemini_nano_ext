let session;
let pageContent = "";

document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitPrompt');
  const promptInput = document.getElementById('promptInput');
  const chatBox = document.getElementById('chatBox');
  const loadingIndicator = document.getElementById('loadingIndicator');

  async function initializeSession() {
    try {
      const capabilities = await ai.assistant.capabilities();
      if (capabilities.available === "readily") {
        session = await ai.assistant.create({
          systemPrompt: "You are a helpful assistant that answers questions about the content of web pages. Use the provided page content to answer questions."
        });
        addMessage("Assistant is ready. Ask me about the page content!", 'assistant');
      } else {
        addMessage("Gemini model is not available.", 'assistant');
      }
    } catch (error) {
      addMessage("Error initializing: " + error.message, 'assistant');
    }
  }

  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  async function handlePrompt(prompt) {
    if (!session) {
      addMessage("Session not initialized. Please try again.", 'assistant');
      return;
    }

    try {
      const result = await session.prompt(`Based on Page content answer user question: ${pageContent}\n\nUser question: ${prompt}`);
      addMessage(result, 'assistant');
    } catch (error) {
      addMessage("Error: " + error.message, 'assistant');
    }
  }

  submitButton.addEventListener('click', async function() {
    const prompt = promptInput.value.trim();
    if (!prompt) return;

    addMessage(prompt, 'user');
    promptInput.value = '';

    await handlePrompt(prompt);
  });

  promptInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitButton.click();
    }
  });

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "pageContent") {
      pageContent = request.content;
      loadingIndicator.style.display = 'none';
      addMessage("Page content loaded. You can now ask questions about it!", 'assistant');
    }
  });

  initializeSession();
});

// When the sidebar is opened, request the page content
window.addEventListener('load', () => {
  document.getElementById('loadingIndicator').style.display = 'block';
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getPageContent"});
  });
});