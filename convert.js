<script>
        function convertTemperature() {
            // Get user input and selected radio button value
            var input = parseFloat(document.getElementById('n').value);
            var unit = document.querySelector('input[name="value"]:checked').value;

            // Perform conversion
            var result;
            if (unit === 'celsius') {
                result = (input * 9/5) + 32; // Celsius to Fahrenheit
            } else {
                result = (input - 32) * 5/9; // Fahrenheit to Celsius
            }

            // Display the result
            document.getElementById('result').innerText = 'Result: ' + result.toFixed(2);
        }
    </script>