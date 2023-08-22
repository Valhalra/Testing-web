      var Body={
            SetColor: function(color) {document.querySelector('body').style.color = color;
            },
            SetBackgroundColor: function(color) {document.querySelector('body').style.backgroundColor = color;}
        }
        var Links = {
            SetColor : function(color) {
            var alist = document.querySelectorAll('a');
            var i = 0;
            while ( i < alist.length) {
                alist[i].style.color = color;
                i = i + 1 ;
            }
        }}
       function nightdayHandler(self) {
            var target = document.querySelector('body');
            if(self.value === 'dark') {
                Body.SetBackgroundColor('black');
                Body.SetColor('white');
                self.value='Origin';
                Links.SetColor('powderblue');}
            else {
                Body.SetBackgroundColor('white');
                Body.SetColor('black');
                self.value='dark';
                Links.SetColor('blue');
                }
            }