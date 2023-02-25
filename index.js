class Formatter {
  //add static methods here
  static capitalize(str){
    return (str[0].toUpperCase()+str.slice(1))
  }
  static sanitize(str){
    return (str.replace( /[^a-zA-Z0-9\- ']/g, ""))
  }
  static titleize(str){
    let words = str.split(' ')
    let titleized = []
  
    for (let i = 0; i < words.length; i++) {
      switch (words[i]) {
        case 'the':
        case 'a':
        case 'an':
        case 'but':
        case 'of':
        case 'and':
        case 'for':
        case 'at':
        case 'by':
        case 'from': 
          titleized.push(words[i])
          break
        default:
          titleized.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
      }
      if (i === 0) { 
          titleized[0] = titleized[0].charAt(0).toUpperCase() + titleized[0].slice(1)
      }
    }
    return titleized.join(" ")
  }
}
