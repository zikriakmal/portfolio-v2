"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { ThemeApplicator } from "./ThemeApplicator";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeApplicator />
      {children}
    </Provider>
  );
}
