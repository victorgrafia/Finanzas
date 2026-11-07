// Service worker mínimo: permite instalar la app. Los datos siempre se leen en vivo de tu hoja.
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", () => {});
