"use client";

export function ZweiterKontaktwegLink() {
  const url =
    "https://mein.online-impressum.de/worldofworkflow-de/#Zweiter_Kontaktweg";

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.open(url, "zweiterKontaktweg", "width=820,height=720,scrollbars=yes,resizable=yes");
  }

  return (
    <a href={url} onClick={handleClick}>
      Formular öffnen (online-impressum.de)
    </a>
  );
}
