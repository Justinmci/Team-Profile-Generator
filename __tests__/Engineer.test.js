const Engineer = require('../lib/Engineer');


test('creates an Engineer object', () => {
    const engineer = new Engineer('justin', 11, 'justin@gmail.com', 'justin3873');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('justin', 11, 'justin@gmail.com', 'justin3873');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test('gets role of employee', () => {
    const engineer = new Engineer('justin', 11, 'justin@gmail.com', 'justin3873');

    expect(engineer.getRole()).toEqual("Engineer");
});