import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                light: { background: '#ffffff', text: '#111827' },
                dark: { background: '#', text: '#f9fafb' },
                system: { background: '#1f2937', text: '#e2e8f0' },
                old: { background: '', text: '#333333' },
            },
            backgroundImage: {
                'old-theme': "url('/old-theme.jpg')",
            },
        },
    },
    plugins: [],
}

export default config
