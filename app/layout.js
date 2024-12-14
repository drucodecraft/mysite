import "./globals.css";

export const metadata = {
  title: "simply drew",
  description: "portfolio-site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  antialiased bg-gray-200`}>{children}</body>
    </html>
  );
}
