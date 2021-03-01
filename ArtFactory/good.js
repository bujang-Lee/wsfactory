var imgFrameColor = {
    blue: function(color) {
        document.querySelector('img').style.borderColor = color;
    },
    red: function(color) {
        document.querySelector('img').style.borderColor = color;
    },
    yellow: function(color) {
        document.querySelector('img').style.borderColor = color;
    },
    green: function(color) {
        document.querySelector('img').style.borderColor = color;
    }
}
function move(self) {
    if (self.value == 'blue') {
        imgFrameColor.blue('blue');
    }
    else if (self.value == "red") {
        imgFrameColor.red('red');
    }
    else if (self.value =="yellow") {
        imgFrameColor.yellow('yellow');
    }
    else if (self.value =="green") {
        imgFrameColor.green('green');
    }
}
