const Intern = require('../lib/Intern');


test('creates an Intern object', () => {
    const intern = new Intern('justin', 22, 'justin@gmail.com', 'UST');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('justin', 22, 'justin@gmail.com', 'UST');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('justin', 22, 'justin@gmail.com', 'UST');

    expect(intern.getRole()).toEqual("Intern");
}); 