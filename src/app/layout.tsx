import '@provider/asset/css/globals.css';
import { PropsChildNode } from "src/provider/types/interface";
import { AntdStyleRegistry } from "@provider/antd";
import { Meta } from "@provider/meta";

export const metadata = Meta.default;
export default function RootLayout({ children }: PropsChildNode) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body id='App' suppressHydrationWarning={true}>
        <AntdStyleRegistry>
          {children}
        </AntdStyleRegistry>
      </body>
    </html>
  )
}
