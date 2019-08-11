//function takes string of words as the parameter and returns camelCased string
export function camelCaseString(string) {
    const newString = string.split(" ").map((word, index) => {
        //the first word is returned in lower-cases
        if (index == 0) {
          return word.toLowerCase();
        }
        //all the following words: the first letter is changed to upper-case, the following to lower-cases
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
    return newString;
}
