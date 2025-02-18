function createTable() {
    //Write your code here
    let rows = prompt("Input number of rows");
	let cols = prompt("Input number of columns");

	rows = parseInt(rows);
	cols = parseInt(cols);

	if(isNaN(rows) || isNaN(cols) || rows <=0 || cols <= 0){
		alert("please enter valid positive numbers for rows and columns");
		return;
	}
	let table = document.getElementById("myTable");
	table.innerHTML = "";

	for(let i = 0; i<rows; i++){
		let row = table.insertRow();
		for(let j = 0; j<cols; j++){
			let cell = row.insertCell();
			cell.textContent = `Row-${i} Column-${j}`;
		}
	}
	
}
