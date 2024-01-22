const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help|assist me/i;

// const dollarRegex = /[0-9]+ hundred|thousand|million|billion dollars/i;
// +[0-9] matches one or more consecutive numbers(digits) from [0-9]

// A capture group is a way to define a part of the expression that should be captured and saved for later reference. You can define a capture group by wrapping a part of your expression in parentheses. For example, /h(i|ey) camper/ would match either hi camper or hey camper, and would capture i or ey in a group.

const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;

const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i; //Spam messages often use numbers instead of letters to bypass filters. Your regular expression should catch these.

const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// const isSpam = (msg) => msg.match(helpRegex);

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

// Instead of using the .match() method, you can use the .test() method of a regular expression to test if a string matches the pattern. Unlike .match(), .test() returns a boolean value indicating whether or not the string matches the pattern.

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});
