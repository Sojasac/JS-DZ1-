var term = {
    Canada: 28,
    Belarus: 16,
    Russia: 18,
    Albania: 30,
    Germany: 21,
    France: 17
  }
  function Country() {
    var sum = 0;
    var k = 0;
    for (var key in term) {
       sum += term[key];
       k +=1;
    }
    var average = sum / k;
    alert("Среднее значение = " + average);
  }
  Country();
  
  function MaxTerm() {
    for (var key in term) {
      var max = term[key];
    }
    for (var key in term) {
      if  (max < term[key]) {
        max = term[key];
        count = key;
      }
    }
    alert("Максимальная температура = " + max + " градусов в стране " + count);
  }
  MaxTerm();