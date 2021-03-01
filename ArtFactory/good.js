function move(self) {
    var find_img = document.querySelector('img');
    if (self.value == 'blue') {
        find_img.style.borderColor = 'blue';
    }
    else if (self.value == "red") {
        find_img.style.borderColor = 'red';
    }
    else if (self.value =="yellow") {
        find_img.style.borderColor = "yellow";
    }
    else if (self.value =="green") {
        find_img.style.borderColor = "green";
    }
}