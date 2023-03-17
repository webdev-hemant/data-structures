function reverseUsingForloop(str) {
  if (!str || str.length <= 1 || typeof str !== "string") {
    return "hmm that is not good";
  }
  //   const backwords = [];
  let reversed = "";
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    // backwords.push(str.charAt(i));
    reversed += str[i];
  }
  //   return backwords.join("");
  return reversed;
}

const reverseUsingInbuiltMethod = (str) => {
  if (!str || str.length <= 1 || typeof str !== "string") {
    return "invalid input";
  }
  //   return str.split("").reverse().join("");
  return [...str].reverse().join("");
};

console.log(
  reverseUsingForloop("My name is hemant"),
  reverseUsingInbuiltMethod("My name is hemant")
);
