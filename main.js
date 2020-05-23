const now = new Date();
setInterval(() => {
  for (elem of document.querySelectorAll("time")) {
    // 処理済みならスキップ
    if (elem.innerText.indexOf(":") >= 0){
      continue;
    }
    let dt = new Date(elem.getAttribute("datetime"))
    let time = dt.toLocaleTimeString();

    if (now.toLocaleDateString() != dt.toLocaleDateString()) {
      let date = "";
      if (now.getFullYear() == dt.getFullYear()) {
        date = [dt.getMonth() + 1, dt.getDate()].join("/");
      } else {
        date = [dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join("/");
      }
      time = date + " " + time;
    }
    elem.innerText = time;
  }
}, 500);
