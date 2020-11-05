// 判斷式
// 布林值 true 成立才執行
if (false)
{
    console.log("這是true")
}
// else 否則，語法：
// else { 程式區塊 }
// 布林值為 false 才會執行 else { 程式區塊 }
else {
    console.log("這是false")
}


var price = 500;
if(price >=200){
    console.log("我有大於200哦");
}


// else if 語法：
// else if (布林值) {}
// else if 布林值為 true 才會執行 else if () { 程式區塊 }
var score = 5;
if (score >=60) {
    console.log("及格");
}
else if (score >= 40) {
    console.log("補考");
}
else {
    console.log("當掉");
}

var boxes=document.getElementsByClassName("box");
    console.log(boxes[0]);

    boxes[0].innerHTML="我是盒子";
    boxes[1].innerHTML="我是盒子";
    boxes[2].innerHTML="我是盒子";


    
    for(var i = 0; i< 10; i++) {
        console.log("迴圈執行次數：" + i)
    }

    // length 陣列的長度
    for(var i = 0; i<boxes.length ; i++) {
        boxes[i].innerHTML="用迴圈改變陣列"+(i+1);
    } 