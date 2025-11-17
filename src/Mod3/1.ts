
function createUser(Name: string, Age: number, Address: string, Phone: number): { Name: string; Age: number; Address: string; Phone: number }
{
return { Name, Age, Address, Phone };
}
const user = createUser(`Alice`, 30, `Chennai`, 9876543210);
console.log(user);