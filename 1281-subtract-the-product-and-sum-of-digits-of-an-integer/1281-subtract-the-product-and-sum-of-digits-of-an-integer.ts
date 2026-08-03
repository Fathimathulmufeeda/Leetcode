function subtractProductAndSum(n: number): number {
  let str=n.toString()
  let sum=0
  let pro=1
  for(let i=0;i<str.length ;i++){
      let digit=Number(str[i])
      sum+=digit
      pro*=digit
  }
  return pro-sum
};