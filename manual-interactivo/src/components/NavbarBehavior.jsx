import React, { useEffect, useState } from "react";

export default function NavbarBehavior() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Efecto de profundidad al hacer scroll
      setIsScrolled(currentScrollY > 10);

      // Ocultar/mostrar navbar inteligentemente
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll hacia abajo - ocultar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scroll hacia arriba - mostrar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Función para ajustar el layout
  const adjustLayout = () => {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 60; // Fallback a 60px

    // Ajustar todos los elementos que necesitan movimiento
    const elementsToAdjust = [
      ".menu",
      ".collapseSidebarButtonCustom",
      ".table-of-contents",
    ];

    // compute menu rect once so the collapse button can be anchored to it
    const menu = document.querySelector(".menu");
    const menuRect = menu ? menu.getBoundingClientRect() : null;

    elementsToAdjust.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        // Do not change element height — only translate visually so it doesn't grow
        element.style.removeProperty("height");

        // Ensure top is zeroed so translateY is the only visual offset
        element.style.top = "0";

        // Prepare smooth transform transition if not present
        if (
          !element.style.transition ||
          element.style.transition.indexOf("transform") === -1
        ) {
          element.style.transition =
            (element.style.transition ? element.style.transition + ", " : "") +
            "transform .30s ease";
        }
        element.style.willChange = "transform";

        if (selector === ".collapseSidebarButtonCustom") {
          const menuEl = document.querySelector(".menu");
          if (menuEl) {
            // Anchor the button inside the .menu container so it naturally
            // follows the menu's transform/animation without manual compensation.
            try {
              if (!menuEl.contains(element)) {
                menuEl.appendChild(element);
              }
              element.style.position = "absolute";
              element.style.left = "50%";
              element.style.transform = "translateX(-50%)";
              // place a few pixels above the bottom of the menu
              const offsetFromBottom = 12; // adjust to preference
              element.style.bottom = `${offsetFromBottom}px`;
              element.style.top = "auto";
              element.style.zIndex = "999";
            } catch (err) {
              // If append fails (rare), fallback to fixed+translate (synchronized)
              const rect = menuEl.getBoundingClientRect();
              element.style.position = "fixed";
              element.style.left = `${rect.left + rect.width / 2}px`;
              const verticalTranslate = isVisible ? navbarHeight : 0;
              element.style.top = `${Math.max(
                rect.top +
                  rect.height -
                  (element.offsetHeight || 44) -
                  8 -
                  verticalTranslate,
                8
              )}px`;
              element.style.transform = `translateX(-50%) translateY(${verticalTranslate}px)`;
              element.style.zIndex = "1000";
            }
          } else {
            // fallback: apply same translate behaviour as other elements
            if (isVisible) {
              element.style.transform = `translateX(-50%) translateY(${navbarHeight}px)`;
            } else {
              element.style.transform = `translateX(-50%) translateY(0)`;
            }
          }
        } else {
          if (isVisible) {
            // push content down visually instead of resizing
            element.style.transform = `translateY(${navbarHeight}px)`;
          } else {
            // navbar hidden — reset translate
            element.style.transform = "translateY(0)";
          }
        }
      });
    });
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
      navbar.classList.toggle("navbar--scrolled", isScrolled);
      navbar.classList.toggle("navbar--hide", !isVisible);
      navbar.classList.toggle("navbar--show", isVisible);
    }

    // Ajustar el layout después de un pequeño delay para asegurar que el DOM se actualizó
    setTimeout(adjustLayout, 10);
  }, [isScrolled, isVisible]);

  // Ajustar layout en resize
  useEffect(() => {
    window.addEventListener("resize", adjustLayout);
    return () => window.removeEventListener("resize", adjustLayout);
  }, []);

  return null;
}
