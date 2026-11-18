// Product data for the demo store: name, price (USD) and image URL.
const img = (file) => `${import.meta.env.BASE_URL}shop/${file}`

export const products = [
  { id: 1, name: 'Sticker Pack', price: 4.5, image: img('sticker.svg') },
  { id: 2, name: 'Dev Mug', price: 12, image: img('mug.svg') },
  { id: 3, name: 'Hoodie', price: 39.9, image: img('tshirt.svg') },
  { id: 4, name: 'Notebook', price: 8.75, image: img('notebook.svg') },
  { id: 5, name: 'Code Poster', price: 15, image: img('poster.svg') },
]
