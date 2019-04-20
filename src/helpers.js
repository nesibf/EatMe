export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "BAM"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
  ];

  const nouns = [
    "analyses",
    "diagnoses",
    "oases",
    "theses",
    "crises",
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
