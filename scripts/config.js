async function loadConfig() {
  try {
    const res = await fetch("/config.json", { cache: "no-store" });
    if (!res.ok) throw new Error("config.json not found");
    const cfg = await res.json();
    return cfg;
  } catch (err) {
    console.error("Failed to load config:", err);
    return {};
  }
}
