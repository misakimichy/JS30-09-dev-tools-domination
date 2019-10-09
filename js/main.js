const makeBlue = () => {
    const p = document.querySelector('#main');
    p.style.color = "#1fd2f4";
    p.style.fontSize = '50px';
};

(function(){
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

    //Console tricks

    // Regular
    console.log("Regular console: Hello World!");

    // Interpolated
    console.log("Interpolated: String can be added %s to this string!", "🤓");

    // styled
    console.log("styled: %c I am a big string.", "font-size: 50px; text-shadow: 10px 10px  0 lightgray;");

    // warning
    console.warn("ooops! This is a warning!");

}());