class testRoro{
    constructor(
        {
            name = 'Anonimus',
            age, 
            gender = 'NA', 
            nuip,
        }
    ){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nuip = nuip;
    }
}


let p1 = new testRoro(
    {
        age : '31',
        nuip : 1015429568
    }
);


console.log(p1);