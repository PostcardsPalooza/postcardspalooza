// Function to generate the dynamic table
function generateDynamicTable(data, tableId) {
	const table = document.getElementById(tableId);
	const rows = Math.ceil(data.length / 3); // Calculate number of rows needed
	let index = 0;

	for (let i = 0; i < rows; i++) {
		const row = document.createElement('tr');

		for (let j = 0; j < 3; j++) {
			const cell = document.createElement('td');

			// If we're on the last row and there's less than 3 cells
			if (i === rows - 1 && data.length % 3 !== 0) {
				const remainingCells = data.length % 3;
				if (remainingCells === 1 && j === 1) {
					cell.colSpan = 3; // Center align the single cell
					cell.style.textAlign = 'center';
				} else if (remainingCells === 2 && j === 0) {
					cell.colSpan = 2; // Span first cell across two columns
				} else if (remainingCells === 2 && j === 1) {
					index++;
				}
			}

			// Add content to the cell
			if (data[index]) {
				cell.innerHTML = `<a href="${data[index].link}" target="_blank">${data[index].name}</a><br>${data[index].feedback}`;
				index++;
			}
			row.appendChild(cell);
		}

		table.appendChild(row);
	}
}
