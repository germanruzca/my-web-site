import { Header, Route } from "./styled";
import { useRouter } from 'next/router'
import Link from 'next/link'

const Component = () => {
  const router = useRouter();
  return (
    <Header>
      <Route routeColor={router.pathname === '/'} >
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </Route>
      <Route routeColor={router.pathname === '/blog' || router.pathname === '/[slug]'}>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </Route>
      <Route routeColor={router.pathname === '/resume'}>
        <Link href="/resume">
          <a>Resumé</a>
        </Link>
      </Route>
      <Route routeColor={router.pathname === '/proyectos'}>
        <Link href="/proyectos">
          <a>Proyectos</a>
        </Link>
      </Route>
    </Header>
  );
}
export { Component as Header};
export default Component;