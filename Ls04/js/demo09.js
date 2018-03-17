/*
	Created by JiXinchan on 2018.3.17
*/
var year=2018,mouth=3,date=17,sum=0;
switch(mouth-1){
	case 11:
		sum+=30;
	case 10:
		sum+=31;
	case 9:
		sum+=30;
	case 8:
		sum+=31;
	case 7:
		sum+=31;
	case 6:
		sum+=30;
	case 5:
		sum+=31;
	case 4:
		sum+=30;
	case 3:
		sum+=31;
	case 2:
		sum+=year%4==0&&year%100==0||year%400==0?29:28;
	case 1:
		sum+=31;	
	default:
		sum+=date;
}
console.log(sum);