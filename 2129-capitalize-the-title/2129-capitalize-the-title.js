/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let s=title.split(" ");
  let r=[];
  for(let i=0;i<s.length;i++){
    if(s[i].length <=2){
    r.push(s[i].toLowerCase());
    }
    else{
      r.push(s[i][0].toUpperCase() + s[i].slice(1).toLowerCase() );
    }
  }
  return r.join(" ")
};