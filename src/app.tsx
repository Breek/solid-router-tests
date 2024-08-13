import { MetaProvider, Title } from "@solidjs/meta";
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  let rewriteMap: Record<string, string> = {
    "/keyboards/ergo.html": "/product/1",
    "/pointing-devices/mouse.html": "/product/2",
    "/monitors/big-screen.html": "/product/3",
  };

  const rewrite = (url: string) => {
    const u = new URL(url, "http://localhost/");
    return rewriteMap[u.pathname] ? rewriteMap[u.pathname] + u.search : url;
  };

  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <a data-test="index" href="/">
            Index
          </a>
          <a data-test="about" href="/about">
            About
          </a>
          <Suspense>{props.children}</Suspense>

          <ul>
            <li>
              <A href="/keyboards/ergo.html">Ergo keyboard</A>
            </li>
            <li>
              <A href="/pointing-devices/mouse.html">Mouse</A>
            </li>
            <li>
              <A href="/monitors/big-screen.html">Big screen</A>
            </li>
          </ul>
        </MetaProvider>
      )}
      transformUrl={rewrite}
    >
      <FileRoutes />
    </Router>
  );
}
