function theBeatlesPlay(musicians, instruments) {
  var array = []
  i=0
  for (i=0; i < musicians.length; i++ ) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return array
    
}

function johnLennonFacts(facts) {
  i=0
  while (i < facts.length) {
    facts[i]= facts[i] + "!!!"
    i++
  }
  return facts
  
}

function iLoveTheBeatles(num) {
  var array=[]
  
  do {
    array.push("I love the Beatles!")
    num++
  } while (num < 15);
}

