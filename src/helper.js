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

//function takes date string and converts it to JavaScript Date object
export function stringToDate(string) {
    const arrayFromString = string.split('/');
    const year = Number(arrayFromString[0]);
    const month = Number(arrayFromString[1]) - 1; //JavaScript counts months from 0 to 11. January is 0. December is 11.
    const day = Number(arrayFromString[2]);
    const hours = Number(arrayFromString[3]);
    const minutes = Number(arrayFromString[4]);
    const newDate = new Date(year, month, day, hours, minutes).getTime();
    return newDate;
}