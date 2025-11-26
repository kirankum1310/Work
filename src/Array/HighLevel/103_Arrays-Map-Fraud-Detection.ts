
//Rule book
type Transaction = {
    id: number;
    type: 'credit' | 'debit';
    amount: number;
    location: string;
};

//Data Input
let transactions: Transaction[] = [
    { id: 1, type: 'credit', amount: 5000, location: 'Delhi' },
    { id: 2, type: 'debit', amount: 200, location: 'Mumbai' },
    { id: 3, type: 'debit', amount: 1500, location: 'Bangalore' },
    { id: 4, type: 'credit', amount: 7000, location: 'Chennai' },
    { id: 5, type: 'debit', amount: 3000, location: 'Dubai' },
];

//Detecting Suspicious Transactions
let Suspicious = transactions.filter(t => (t.type === 'debit' && t.amount > 1000) || t.location !== 'Dubai');

//Output
console.log("===Suspicious Transactions===");
console.log(Suspicious);
