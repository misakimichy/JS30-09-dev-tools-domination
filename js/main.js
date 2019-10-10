const makeBlue = () => {
    const p = document.querySelector('#main');
    p.style.color = "#1fd2f4";
    p.style.fontSize = '50px';
};

(function(){
    //Console tricks
    // 1. Regular
    console.log("Regular console: Hello World!");
    
    // 2. Interpolated
    console.log("Interpolated: String can be added %s to this string!", "🤓");
    
    // 3. styled
    console.log("styled: %c This is a console demo.", "font-size: 50px; text-shadow: 10px 10px  0 lightgray;");
    
    // 4. warning
    console.warn("Aiya, we got a warning!");
    
    // 5. error
    console.error("Ooops! Error ocurred!");
    
    // 6. info
    console.info("Donuts and scones are my weaknesses.");
    
    // 7. testing
    console.assert(1 === 2, "This is wrong!");
    
    // 8. clear
    // console.clear();
    
    // 9. View the DOM elements
    const p = document.querySelector('#main');
    console.dir(p);
    
    // 10. Grouping together
    const dogs = [
        {
            name: 'Broly',
            age: 2
        },
        {
            name: "Birus",
            age: 8
        }
    ];
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old.`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
        console.groupEnd(`${dog.name}`);
    });

    // 11. Table
    console.table(dogs);

    // 12. Counting
    console.count("Hey");
    console.count("Hey");
    console.count("Yo");
    console.count("Yo");
    console.count("Hey");
    console.count("Yo");
    console.count("Hey");
    console.count("Yo");
    console.count("Yo");
    console.count("Yo");
    console.count("Yo");

    //13. Timing
    console.time('fetching data');
    fetch("https://api.github.com/users/wesbos")
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });
}());