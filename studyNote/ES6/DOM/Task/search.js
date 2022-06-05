// 1 带有id = "age-table"的表格
let table = document.getElementById('age-table');



// 2 表格内所有的lable元素
document.querySelectorAll('#age-table lable');
    //
table.getElementsByTagName('label');



//3 表格中的第一个td(带有“age”字段)
table.querySelector('td');
    //
table.querySelector('td');
    //
table.rows[0].cells[0];
    //
document.querySelectorAll('[age=*]');

//4 带有name="search"的form
document.querySelector('form[name="search"]');
    //如果只有一个name = search的元素还可以这样写
let form = document.getElementsByName('search');



//5 表单中的第一个input
document.getElementsByTagName('input')[0];
    //还可以这样写
form.querySelector('input');