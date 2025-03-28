let myString = "Hello,\n\tThis is a string with escape sequences:\n\n";

myString += "\t- New line with tab: '\\n' and '\\t'\n";

myString += "\t- Using double quotes: \"Hello World\"\n";
myString += "\t- Using single quote: 'Hello World'\n";

myString += "\t- Backslash character: \\\n";

console.log(myString);
