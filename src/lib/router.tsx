import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type RouteState = {
  path: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouteState>({ path: '/', navigate: () => {} });

function getCurrentPath() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(getCurrentPath());

  useEffect(() => {
    const onHash = () => {
      setPath(getCurrentPath());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (to: string) => {
    if (to === path) return;
    window.location.hash = to;
  };

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  return useContext(RouterContext);
}

/** Link component that uses hash navigation */
export function Link({
  to,
  children,
  className,
  onClick,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { navigate } = useRouter();
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
