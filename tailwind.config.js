/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // Main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // All React components
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1221",     // Dark background
        surface: "#121C33",        // Card or section background
        primary: "#1E90FF",        // Blue accent (buttons, highlights)
        secondary: "#2B3A67",      // Slightly lighter navy
        border: "#1C2541",         // Border tone
        textPrimary: "#FFFFFF",    // Main white text
        textSecondary: "#A0AEC0",  // Muted grey text
        highlight: "#60A5FA",      // Hover or active blue
        success: "#22C55E",        // Green (growth/up)
        danger: "#EF4444",         // Red (loss/down)
      },
    },
  },
  plugins: [],
}
