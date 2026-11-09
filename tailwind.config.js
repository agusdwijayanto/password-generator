/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F7FA',
        card: '#FFFFFF',
        accent: '#175DDC',
        accentDark: '#134DB7',
        ink: '#1F2937',
        muted: '#6B7280',
        line: '#E5E7EB',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
