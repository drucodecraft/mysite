import "./globals.css";

export const metadata = {
  title: "simply drew",
  description: "portfolio-site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-black antialiased`}>{children}</body>
    </html>
  );
}
