# Prayer Times App

A modern, responsive web application built with React and Vite that displays Islamic prayer times for various cities in Egypt. The app fetches real-time prayer timings using the Aladhan API and presents them in a user-friendly interface with Arabic text support.

## Features

- **City Selection**: Choose from multiple Egyptian cities including Cairo, Alexandria, Giza, Mansoura, Aswan, and Luxor.
- **Real-Time Data**: Fetches current day's prayer times from the Aladhan API.
- **Responsive Design**: Optimized for both desktop and mobile devices with RTL (Right-to-Left) support for Arabic text.
- **Time Formatting**: Displays prayer times in 12-hour format with AM/PM indicators.
- **Modern UI**: Clean, Islamic-themed design with background images and smooth styling.

## Technologies Used

- **Frontend**: React 18 with Hooks (useState, useEffect)
- **Build Tool**: Vite for fast development and building
- **Styling**: CSS with responsive design and media queries
- **API**: Aladhan Prayer Times API
- **Font**: Google Fonts (Cairo) for Arabic typography

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/prayer-times-app.git
   cd prayer-times-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal).

3. **Select a city** from the dropdown menu to view prayer times for that location.

4. **View prayer times** for Fajr, Dhuhr, Asr, Maghrib, and Isha prayers.

## API Reference

This app uses the [Aladhan Prayer Times API](https://aladhan.com/prayer-times-api) to fetch prayer timings.

- **Endpoint**: `https://api.aladhan.com/v1/timingsByCity/{date}?city={city}&country=Egypt`
- **Parameters**:
  - `date`: Current date in YYYY-MM-DD format
  - `city`: Selected city name
  - `country`: Fixed to "Egypt"

## Project Structure

```
prayer-times-app/
├── public/
│   └── assets/
│       └── bg.jpg          # Background image
├── src/
│   ├── components/
│   │   └── Prayer.jsx      # Prayer time component
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Aladhan](https://aladhan.com/) for providing the prayer times API
- [React](https://reactjs.org/) for the UI framework
- [Vite](https://vitejs.dev/) for the build tool
- Google Fonts for the Cairo font

## Contact

If you have any questions or suggestions, please open an issue on GitHub.
