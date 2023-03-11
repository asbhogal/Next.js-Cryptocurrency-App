export const metadata = {
    title: 'Cryptoverse',
    favicon: '/favicon.ico'
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{ children }</body>
      </html>
    )
  }