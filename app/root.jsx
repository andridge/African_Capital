const { MetaFunction } = require("@vercel/remix");
import stylesheet from "~/tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
export const meta = () => ({
  charset: "utf-8",
  title: ".........app name .....",
  viewport: "width=device-width,initial-scale=1",
});
export const links = () => [
  {
    rel: "stylesheet",
    href: stylesheet,
  },
];
export default function App() {
  return (
    <html lang="en" className="bg-white">
      
      <head>
        <Meta />
        <Links/>
         
      </head>
      <body >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
