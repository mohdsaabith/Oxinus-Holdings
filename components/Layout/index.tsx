import React from "react";

import Sidebar from "./Sidebar";
interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="antialiased">
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
