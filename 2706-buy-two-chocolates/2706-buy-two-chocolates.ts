function buyChoco(price: number[], money: number): number {
  price.sort((a,b)=>a-b)
  let cost=price[0]+price[1]
  if(cost<=money){
    return money-cost
  }
  return money
}