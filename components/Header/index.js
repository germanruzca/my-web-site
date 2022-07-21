import { Header, Route } from "./styled";
import { useRouter } from 'next/router'

const Component = () => {
  const router = useRouter();
  return (
    <Header>
      <Route routeColor={router.pathname === '/'} >
          <a href="/">Inicio</a>
      </Route>
      <Route routeColor={router.pathname === '/blog' || router.pathname === '/[slug]'}>
          <a href="/blog">Blog</a>
      </Route>
      <Route routeColor={router.pathname === '/resume'}>
          <a href="/resume">About</a>
      </Route>
    </Header>
  );
}
export { Component as Header};
export default Component;