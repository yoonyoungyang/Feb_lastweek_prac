var buyPrice = prompt('세자리 이상의 숫자를 작성해주세요', '100');
if(buyPrice % 4 == 0){
    document.write(`${buyPrice}는 4의 배수입니다.`);
} else {
    document.write(`${buyPrice}는 4의 배수가 아닙니다.`);
}
document.write(`<br />`);
var StuName = prompt('학생의 이름을 작성해주세요', '홍길동');
var stuScore = prompt('학생의 점수를 작성해주세요', '100');
if (stuScore >=95 && stuScore <= 100) {
    document.write(`${StuName}의 등급은 A+`);
} else if (stuScore >=90 && stuScore < 95) {
    document.write(`${StuName}의 등급은 A`);
} else if (stuScore >=85 && stuScore < 90) {
    document.write(`${StuName}의 등급은 B+`);
} else if (stuScore >=80 && stuScore < 85) {
    document.write(`${StuName}의 등급은 B`);
} else if (stuScore >=75 && stuScore < 80) {
    document.write(`${StuName}의 등급은 C+`);
} else if (stuScore >=70 && stuScore < 75) {
    document.write(`${StuName}의 등급은 C`);
} else if (stuScore >=65 && stuScore < 70) {
    document.write(`${StuName}의 등급은 D+`);
} else if (stuScore >=60 && stuScore < 65) {
    document.write(`${StuName}의 등급은 D`);
} else if (stuScore < 60) {
    document.write(`${StuName}의 등급은 F`);
} else {
    document.write(`학생의 점수가 잘못되어 있습니다.`);
}
document.write(`<br />`);

for (i = 1; i <=12; i++) {
    document.write(i, ", ");
}
document.write(`<br />`);

var k = 1;
while(k<=12){
document.write(`<img class="insta" style="width: 120px;" src="img/instagram-${k}.jpg">`);
k++;
}
document.write(`<br />`);


var pd = 0;
while(pd <= 7){
    if (pd == 0){
        document.write(`<img class='zoo' style="width:120px;" src=./img/img${pd}.jpg>`);
    } else if (pd == 2){
        document.write(`<img class='zoo' style="width:120px;" src=./img/img${pd}.jpg>`);
    } else if (pd == 4){
        document.write(`<img class='zoo' style="width:120px;" src=./img/img${pd}.jpg>`);
    } else if (pd == 6){
        document.write(`<img class='zoo' style="width:120px;" src=./img/img${pd}.jpg>`);
    } else {
        document.write(``);
    }
    
    pd++;
}
document.write(`</div>`);