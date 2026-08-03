function subtractProductAndSum(n: number): number {
  let str=n.toString()
  let sum=0
  let pro=1
  while(n>0){
      let digit=n%10
      sum+=digit
      pro*=digit
      n=Math.floor(n/10)
  }
  return pro-sum
};