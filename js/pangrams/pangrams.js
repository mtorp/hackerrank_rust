process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
	var string = readLine();

	if (is_pangram(string)) 
		console.log("pangram");
	else
		console.log("not pangram");
}

function is_pangram(string) {
	string = string.toLowerCase();
	var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
	
	for (var i = 0; i<string.length; i++) {
		var arr_index = arr.indexOf(string[i]);
		if (arr_index != -1)
			arr.splice(arr_index, 1);	
	}

	return arr.length == 0;
}
