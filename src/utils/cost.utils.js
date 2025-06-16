export const convertCost = cost => {
  return cost.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
}