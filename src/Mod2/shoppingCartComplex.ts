type DayStatus = 'P'|'A'|'L';


type Student = { id: number; name: string; records: Record<string, DayStatus> };


const students: Student[] = [
{ id: 1, name: 'Arun', records: {} },
{ id: 2, name: 'Priya', records: {} }
];


// generate 30 days of random attendance
function genRecords(students: Student[], days = 30) {
const baseDate = new Date();
for (let d = 0; d < days; d++) {
const dateKey = new Date(baseDate.getTime() - ((days - d - 1) * 86400000)).toISOString().slice(0,10);
for (const s of students) {
const r = Math.random();
s.records[dateKey] = r < 0.85 ? 'P' : (r < 0.9 ? 'L' : 'A');
}
}
}


genRecords(students, 30);


function analyze(students: Student[]) {
for (const s of students) {
const dates = Object.keys(s.records).sort();
let presentCount = 0;
let longestStreak = 0;
let currentStreak = 0;


for (const d of dates) {
const val = s.records[d];
if (val === 'P') { presentCount++; currentStreak++; }
else { longestStreak = Math.max(longestStreak, currentStreak); currentStreak = 0; }
}
longestStreak = Math.max(longestStreak, currentStreak);
const percentage = (presentCount / dates.length) * 100;


console.log(`${s.name}: Present ${presentCount}/${dates.length} (${percentage.toFixed(2)}%), Longest Streak: ${longestStreak}`);
}
}


analyze(students);