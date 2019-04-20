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
  const primarily = [
    "pileca",
    "begova",
    "merdjemek",
    "vega",
    "teleca"
  ];

  const meal = [
    "burek",
    "sirnica",
    "cevapi",
    "zeljanica",
    "pljeskavica"
  ];

  const sweet = [
    "tulumba",
    "kompot",
    "sampita",
    "voce",
    "cokolada"
  ];

  return `${rando(primarily)}-${rando(meal)}-${rando(sweet)}`;
}
