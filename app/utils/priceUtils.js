`use strict`

export const formatPrice = (price) => {
  price = (price/100).toLocaleString("en-US", {style:"currency", currency:"USD"});
  return `${price}`
}
