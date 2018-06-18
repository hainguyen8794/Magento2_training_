define(['requirejs'], function(ko, first, last) {
    class Random {
        constructor() {
            this.init();
        }

        init() {
            // Here's my data model
            var ViewModel = function(first, last) {
                 var this.firstname= "";
                 var this.lastname="";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    this.firstname += possible.charAt(Math.floor(Math.random() * possible.length));
    this.lastname += possible.charAt(Math.floor(Math.random() * possible.length));
  return "full name is " + this.firstname + " " + this.lastname;
                }, this);
            };
             
            ko.applyBindings(new ViewModel("Hai ", "nguyen")); // This makes Knockout get to work
        }
    }

    return new Random();
});
