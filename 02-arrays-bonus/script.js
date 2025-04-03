const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];

for (let i = teachers.length -1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}

console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  let longTeacher = teachers[i];
  if (longTeacher.length >= 5) {
    longNames.push(longTeacher);
  }
}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf('Ed'), 1)
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Fabio") {
    isFabioPresent = true;
  }
}

console.log(isFabioPresent);

// const isTeachersEmpty = teachers.length === 0;
// console.log(isTeachersEmpty);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join();
console.log(teachersString);

const myTeachearString = "";

for (let i = 0; i < teachers.length; i++) {

}