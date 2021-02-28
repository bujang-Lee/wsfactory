var Links = {
    setColor: function(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
      while(i < alist.length) {
        alist[i].style.color = color;
        i++;
      }
    }
  }
  var Body = {
    setColor: function(color) {
    document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
    }
  }
  function darkMode(self) {
    if (self.value === 'DARK') {
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'DEFAULT';
      Links.setColor('powderblue');
    }
    else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'DARK'
      Links.setColor('blue');
    }
  }