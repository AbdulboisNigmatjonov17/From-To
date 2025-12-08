module.exports = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: ["./src/**/*.{html,ts}"],
    theme: {
      extend: {
        colors: {
          // Dynamic theme colors (CSS var orqali)
          theme: {
            bg: "var(--bg)",
            text: "var(--text)",
            card: "var(--card)",
            border: "var(--border)",
            primary: "var(--primary)",
          },
        },
      },
    },
    plugins: [],
  }
  