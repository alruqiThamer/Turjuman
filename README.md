# Turjuman web application

## Overview
Turjuman is a web application that provides translation services by utilizing an external translation API. It allows users to input text in one language and receive the translated text in another language via a minimalist and user-friendly interface.

## Features
- Minimalist interface for text input and translation output.
- Integration with an external translation API for reliable results.
- Responsive design that works well on various devices.

## Project Structure
```
turjuman-website
├── src
│   |
│   ├── styles
│   │   └── main.css           # CSS styles for the application
│   └── scripts
│       └── main.js            # TypeScript interfaces and for API requests/responses
|
├── index.html                 # Main HTML file for the web application
|
└── README.md                  # Project documentation
```

## Usage
1. Open the `index.html` file in your web browser.
2. Enter the text you wish to translate.
3. Select the source and target languages from the dropdown menus.
4. Click the "Translate" button to view the translated text.

## Translation API
This application uses the MyMemory Translation API. Ensure you have a stable internet connection for API access. If you wish to integrate a different translation service, update the API URL and related configurations in `src/scripts/main.js`.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.
