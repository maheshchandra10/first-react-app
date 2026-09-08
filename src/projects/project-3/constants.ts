export interface User {
    name: string;
    age: number;
    designation: string;
    gender: string;
    phoneNumber: string;
    employeeId: string;
    employmentType?: string;
    employeeDiet?: object;
}

export const totalUsers: User[] = [
    {
        name: "Rahul Sharma",
        age: 29,
        designation: "Software Engineer",
        gender: "Male",
        phoneNumber: "+91 98765 43123",
        employeeId: "EMP-1924",
    },
    {
        name: "Zendaya Holland",
        age: 31,
        designation: "Actress",
        gender: "Female",
        phoneNumber: "+91 98765 48760",
        employeeId: "EMP-1125",
    },
    {
        name: "Sourav Sharma",
        age: 99,
        designation: "Software Engineer God",
        gender: "Male",
        phoneNumber: "+91 98765 43456",
        employeeId: "EMP-1445",
    },
    {
        name: "Urmila Devi",
        age: 32,
        designation: "Housewife",
        gender: "Female",
        phoneNumber: "+91 76265 43210",
        employeeId: "EMP-1074",
    },
    {
        name: "Puneet Superstar",
        age: 28,
        designation: "IAF Officer",
        gender: "Male",
        phoneNumber: "+91 98678 43210",
        employeeId: "EMP-1012",
    },
    {
        name: "Tania Sachdeva",
        age: 36,
        designation: "Commentator",
        gender: "Female",
        phoneNumber: "+91 98765 11870",
        employeeId: "EMP-1405",
    },
    {
        name: "The Undertaker",
        age: 55,
        designation: "The Deadman",
        gender: "Male",
        phoneNumber: "+91 98678 43210",
        employeeId: "EMP-4381",
    },
    {
        name: "Maya Chandra",
        age: 25,
        designation: "Queen of Hearts",
        gender: "Female",
        phoneNumber: "+91 98765 22770",
        employeeId: "EMP-1000",
    },
] 