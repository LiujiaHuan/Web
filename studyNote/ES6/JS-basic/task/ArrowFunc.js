//https://zh.javascript.info/arrow-functions-basics#yong-jian-tou-han-shu-zhong-xie


//my
let agree = confirm("are u agree");
let ask =(agree)=>agree?alert("you agree"):alert("not");
ask(agree);




//official
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
  //better!!