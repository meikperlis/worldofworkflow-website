"use client";

import { useState } from "react";
import { navigation } from "@/lib/site-data";
import { BrandMark } from "./brand-mark";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="/#home" aria-label="WorldofWorkflow Startseite">
          <BrandMark compact />
          <span className="brand-name">WorldofWorkflow</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Menü öffnen</span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? "primary-nav--open" : ""}`}
          aria-label="Hauptnavigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button--small" href="/#contact" onClick={() => setOpen(false)}>
            Nachricht schreiben
          </a>
        </nav>
      </div>
    </header>
  );
}
