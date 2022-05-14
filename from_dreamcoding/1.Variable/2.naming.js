/** 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z), _
 * 대소문자를 구분한다.
 * 추천: camelCase <= likeThis 단어두개 이상 연결되었을때!
 * 한국어는 XXXX 
 * 예약어 XXXX
 * 숫자로 시작 XXX 
 * 특수문자 X (but _, $ 두가지는 예외)
 * 이모지 X 
 * 여러개의 변수를 1, 2, 3 숫자로 구분 xxx => 최대한 의미있게 구체적으로!
 */

//나쁜예제 
let num = 20; 

//숫자? 의미가없음 너무광범위

//좋은예제 
let myAge = 20; 

//나쁜예제 

let audio1;
let audio2; 

//좋은예제

let backgroundAudio;
let windAudio; 

//꿀팁 ! ! ! 

let audioBackgorund;
let audioWind; 
// 이런식으로 먼저 무엇인지~가  나와도 좋다! 

