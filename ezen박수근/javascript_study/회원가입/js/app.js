function inputemailChange() {
  var input_email = document.querySelector(".input_email").value;

  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (input_email.match(reg) == null) {
    alert("형식에 맞지 않는 이메일입니다");
  }
}

function inputpwdChange(pwd) {
  var input_pwd = document.querySelector(".input_pwd").value;

  console.log(input_pwd);

  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  if (input_pwd.match(reg) == null) {
    alert("형식에 맞지 않는 비밀번호입니다");
  }
}

function inputpwd2Change() {
  var input_pwd2 = document.querySelector(".input_pwd2").value;
  var input_pwd = document.querySelector(".input_pwd").value;

  if (input_pwd != input_pwd2) {
    alert("비밀번호가 일치하지않습니다");
  }
}

function inputnameChange() {
  var input_name = document.querySelector(".input_name").value;

  if (input_name == "") {
    alert("이름을 입력해주세요");
  }
}

function inputtelChange() {
  var input_tel = document.querySelector(".input_tel").value;

  console.log(input_tel);
  const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
  if (input_tel.match(reg) == null) {
    alert("형식에 맞지 않는 전화번호입니다");
  }
}
