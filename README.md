# 🤖💬 Gemini Content Chat - Chrome Extension

Gemini Content Chat is a Chrome extension built at a AGIHouse Hackathon that allows you to chat with Google's Gemini Nano LLM about the content of the current webpage. It uses the Gemini nano LLM embedded in Chrome to provide intelligent responses based on the page content.

Also checkout MediaPipe Studio for various other on device models for Web and Android for applications like Object Detection, Pose Detection etc. The Gemma2 LLM is also available.

## ✨ Features

- 📄 Extracts content from the current webpage
- 🧠 Uses Gemini nano LLM for AI-powered conversations
- 🖼️ Provides a convenient side panel interface for chat interactions
- ⚡ Offers real-time responses to user queries about the page content

## 📋 Prerequisites

To use this extension with Gemini nano LLM, you need:

1. 🌟 Chrome Canary: Download and install [Chrome Canary](https://www.google.com/chrome/canary/).
2. 🔧 Enable Gemini nano: Follow the instructions provided in [this Hugging Face blog post](https://huggingface.co/blog/Xenova/run-gemini-nano-in-your-browser) to set up and enable Gemini nano in your Chrome Canary browser.

## 🚀 Installation

1. Clone this repository or download the source code.
2. Open Chrome Canary and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## 🎯 Usage

1. Click the extension icon in your Chrome toolbar to open the side panel.
2. Navigate to a webpage you want to chat about.
3. Wait for the page content to load in the extension.
4. Start asking questions or prompting the AI about the page content.

## 📁 Files

- `manifest.json`: Extension configuration
- `background.js`: Handles extension initialization and message passing
- `content.js`: Extracts page content
- `sidebar.html`: HTML structure for the side panel
- `sidebar.js`: Manages chat interactions and Gemini nano LLM integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT License](LICENSE)

## ⚠️ Disclaimer

This extension is an experimental project and is not officially associated with Google or the Gemini AI team. Use it at your own discretion.