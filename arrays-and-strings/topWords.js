// https://maxcode.dev/problems/top-words/

function topWords(words, query, limit) {
    const toLowerQuery = query.toLowerCase();

    return words.filter((word) => {
        const toLowerWord = word.toLowerCase();

        if(toLowerWord.startsWith(toLowerQuery)) {
            return word;
        }
    }).slice(0, limit);
}

function topWords2(words, query, limit) {
    return words.filter((el) => el.toLowerCase().startsWith(query.toLowerCase())).slice(0, limit);
}

const words = [
    "a",
    "able",
    "about",
    "absolute",
    "accept",
    "account",
    "achieve",
    "across",
    "act",
    "active",
    "actual",
    "add",
    "address",
    "Admit",
    "Advertise",
    "Affect",
    "AFFORD",
    "after",
    "afternoon",
    "again",
    "against",
    "age",
    "agent",
    "ago",
    "agree",
  ];
  
//   console.log(topWords(words, "Af", 3)); // ['Affect', 'AFFORD', 'after']
//   console.log(topWords(words, "aga", 5)); // ['again', 'against']

  console.log(topWords2(words, "Af", 3));