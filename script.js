
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const symbols = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']',':',';','"','/','<','>',',','.','|','+','_','-','=','^']


const range = document.getElementById("range");
const upperBtn = document.getElementById("upBtn");
const lowerBtn = document.getElementById("lowBtn");
const symbolBtn = document.getElementById("symBtn");
const noBtn = document.getElementById("noBtn");
const generate = document.getElementById("genarate")
const copy = document.getElementById("copy")
const passwordBox = document.getElementById("password")

let password = "";


// get Random number
function getRandom(no) {
	let number = Math.floor(Math.random() * no)  ;
	return number;
}


generate.addEventListener('click', generatePwd);
copy.addEventListener('click', copyText);

// copy password to clipboard
function copyText(){

	navigator.clipboard.writeText(password);
	console.log(password)
}

//genarate password
function generatePwd(){
	password = ""
	if(symbolBtn.checked || lowerBtn.checked || upperBtn.checked ||noBtn.checked){
		while(range.value != password.length){
			let lowercase = alphabet[getRandom(alphabet.length)] ;
			let sym = symbols[getRandom(symbols.length)];
			let uppercase = alphabet[getRandom(alphabet.length)].toUpperCase();
			no = getRandom(4);
			if (no == 1 && lowerBtn.checked){
				password = password + lowercase;
			}
			else if(no == 2 && upperBtn.checked){
				password = password + uppercase;
			}
			else if(no == 3 && symbolBtn.checked){
				password = password + sym;
			}
			else if(no == 0 && noBtn.checked){
				password = password + getRandom(10);
			}
		}
		console.log(password + " " + range.value);
		passwordBox.innerHTML = password;
	}
	else{
		passwordBox.innerHTML = "Please select at least one catogory";
	}
}
