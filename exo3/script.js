'use strict';
const students = [
	{ id: 1000, prenom: 'JOHN', nom: 'DOE', note: 14, extra: 5 },
	{ id: 2000, prenom: 'BOB', nom: 'CARLTON', note: 7, extra: 1 },
	{ id: 3000, prenom: 'RAYANE', nom: 'SMITH', note: 13, extra: 3 }
];

function B(noteFloat) {
	return noteFloat >= 10.0;
}

function A() {
	students.forEach(student => {
		const admitted = B(student.note);
		if (admitted) {
			console.log(`${student.id}: ADMIS`);
		} else {
			console.log(`${student.id}: AJOURNE`);
		}
	});
}


