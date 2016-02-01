(function () {

    this.assert = function (value,description) {
        setTimeout(function () {
            var li, result;
            result = document.getElementById('result');
            if (!result) {

                result = document.createElement("ul");
                result.id = 'result';
                document.body.appendChild(result);
            }
            result.style.background = '#FFFFA0';
            result.style.border = "thick solid #8b0000";

            li = document.createElement("li");
            li.textContent = description;
            li.style.color = value ? 'green' : 'red';
            if (!value)li.style.textDecoration = 'line-through';
            result.appendChild(li);
        }, 100);
    }

})();