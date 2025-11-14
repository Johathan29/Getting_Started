import React from "react";
import NavbarItem from "@theme/NavbarItem";

export default function NavbarItems({ items }) {
  return (
    <ul className="hidden xl:flex items-center space-x-1">
      {items.map((item, i) => (
        <NavbarItem key={i} {...item} />
      ))}
    </ul>
  );
}