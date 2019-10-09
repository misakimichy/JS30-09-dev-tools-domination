const makeGreen = () => {
    const p = document.querySelector('#main');
    p.style.color = "#efefef";
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
    makeGreen();
}());