const students =[
    {
        id : 1,
        name : 'John',
        age : 21,
        skill : 'javascript'
    },
    {
        id : 2,
        name : 'Nayeem',
        age : 23,
        skill : 'React'
    },
    {
        id : 3,
        name : 'Fahim',
        age : 16,
        skill : 'Java'
    },
];

localStorage.setItem('student',JSON.stringify(students));



