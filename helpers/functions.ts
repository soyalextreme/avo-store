export const findItemCart = (id: string, data: TProductCart[]): number => {
  let amount = 1
  data.forEach((item) => {
    if (item.id === id) {
      amount = item.amount + 1
      return amount
    }
  })
  return amount
}

export const findAndDeleteItemCart = (
  id: string,
  data: TProductCart[]
): Array<TProductCart> => {
  let newArray: TProductCart[] = []
  data.forEach((item) => {
    if (item.id != id) {
      newArray.push(item)
    }
  })
  return newArray
}

export const calculatePriceCart = (items: TProductCart[]): number => {
  var total = 0
  items.forEach((element) => {
    total += element.amount * element.price
    total = total as number
    total.toFixed(2)
  })
  return total
}
