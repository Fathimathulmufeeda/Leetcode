function detectCapitalUse(word: string): boolean {
      if(word===word.toLowerCase() || word===word.toUpperCase()){
            return true
        }
        if(word[0]===word[0].toUpperCase()){
            return word.slice(1)===word.slice(1).toLowerCase()
        }
        return false
};