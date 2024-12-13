import "./globals.css";

export const metadata = {
  title: "simply drew",
  description: "portfolio-site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-gradient-to-br from-zinc-800 bg-no-repeat via-zinc-700 to-zinc-600 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
