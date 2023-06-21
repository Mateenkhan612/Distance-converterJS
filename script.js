var converType = "miles";
        var heading = document.querySelector('h1');
        var intro = document.querySelector('p');
        var answerDiv = document.getElementById('answer');
        var form = document.getElementById('convert');

        document.addEventListener('keydown', function (event) {
            var key = event.code;

            if ( key === 'KeyK' ) {
                converType = 'kilometers';
                heading.innerHTML = "Kilometers to Miles converter";
                intro.innerHTML = "Type in a number in kilometers and click the button to converts distance into miles";
            }
            else if (key === 'KeyM') {
                converType = 'miles';
                heading.innerHTML = "Miles to Kilometers converter";
                intro.innerHTML = "Type in a number in miles and click the button to converts distance into kilometers";
                
            }


        });

            

        form.addEventListener('submit', function () {

            event.preventDefault();

            var distance = parseFloat(document.getElementById('distance').value);
            
            if (distance) {
                if (converType=="miles") {
                    var converted = (distance * 1.609344).toFixed(3);
                    answer.innerHTML = `<h2>${distance} miles converted into ${converted} kilometers</h2>`;
                }
               else{
                var converted = (distance * 0.621371192).toFixed(3);
                    answer.innerHTML = `<h2>${distance} kilometers converted into ${converted} miles</h2>`;
               } 
            }
            else{
                answer.innerHTML = "<h2>Please Provide number..!</h2>";
            }

        });