let box = document.querySelector('.box');
let text = document.querySelector('.text');
let f = document.createElement('p');
let aa = '30 Days Of Javascript challeneg 2020  asabeneh yetayeh';

let h = aa.split('');

function a(){
    let a = Math.random().toString(16).substring(2,8);
    let b = '#' + a;

    box.style.backgroundColor = b;

    for(j = 0;j < h.length;j++){
        let d = Math.random().toString(16).substring(2,8);
        let e = '#' + d;
        let g = document.createElement('span');
        
        g.innerText = h[j];
        g.style.color = e;
        g.classList.add('text');

        f.appendChild(g);
    };
};

a();

setInterval( () => {
    f.innerText = '';
    a();

},2000);


box.appendChild(f);

$(window).on("load",function(){
    $(".loader-container").fadeOut(500,function(){
        $(this).remove();
    });
});