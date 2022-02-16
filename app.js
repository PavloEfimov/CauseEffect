let arr = [
    {
        name: 'John',
        fullname: 'John Lennon',
        address: 'London, UK',
        "telephone number": 123123,
        birthday: '05.03.1960',
        id: '01'
    },
    {
        name: 'Paul',
        fullname: 'Paul McCartney',
        address: 'Liverpool, UK',
        "telephone number": 456456,
        birthday: '06.04.1961',
        id: '02'
    },
    {
        name: 'George',
        fullname: 'George Harrisson',
        address: 'Manchester, UK',
        "telephone number": 789789,
        birthday: '08.09.1963',
        id: '03'
    },
]
let listDiv = document.querySelector('.list');
let cardDiv = document.querySelector('.card');

arr.forEach(item=>{
let div = document.createElement('h2');
div.textContent = item.name;
div.setAttribute('item-number', item.id);
listDiv.append(div);
})

listDiv.addEventListener('click', mainFn);

function mainFn(e){
    let number = e.target.getAttribute('item-number');
    if (!number) return
    let item = arr.find(i=>i.id===number);

    let h2Items = document.querySelectorAll('h2');
    h2Items.forEach(item=>{
        item.style.color = 'brown';
        item.style.textDecoration = 'none';
        item.style.fontSize = '1.5em';
    })

    e.target.style.color = 'rgb(13, 0, 128)';
    e.target.style.textDecoration = 'underline';
    e.target.style.fontSize = '2em';
    console.log(item.fullname)
    cardDiv.innerHTML = `<h3>full name: ${item.fullname}</h3>
                         <h3>address: ${item.address}</h3>
                         <h3>telephone number ${item["telephone number"]}</h3>
                         <h3>birthday: ${item.birthday}</h3>`
}