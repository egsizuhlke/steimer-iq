"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode, useSyncExternalStore } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const emptySubscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

function useIsMounted() {
  return useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
