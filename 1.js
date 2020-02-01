function link() {
    window.open('https://www.tut.by/', 'blank')
}



function styleBody() {
    if (document.body.style.backgroundColor == "greenyellow") {
      document.body.style.backgroundColor = "azure";
    }
    else { 
        document.body.style.backgroundColor = "greenyellow"
    }
}



function maket() {
    document.body.innerHTML = '<div class="container"><img src="./img1.jpg" alt="#"><article><h1>Вабба Лабба Даб Даб</h1></article><img src="./img2.jpg" alt="#"></div>';
    var style = document.createElement('style');
      style.innerHTML = `
        .container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          text-align: center;
        }
        article {
            background-color: #66FF00;
            margin-top: 20px;
            font-size: 30px;
            font-weight: 700;
            padding: 20px 0;
            width: 30%;
            border: 5px;
            border-radius: 20px;
            border-color: red;
            height: 100px;
            color: yellow;
        }
        img {
            margin-top: 20px;
            width: 20%;
            border-radius: 20px;
        }
      `;
    document.head.appendChild(style);
  }
