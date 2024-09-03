import { Children } from "react";

export default function NewsDetailLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
