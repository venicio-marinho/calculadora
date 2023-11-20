window.onload = () => {
    let $display = document.querySelector(".calculo");
    let $buttons = document.querySelectorAll(".tecla");

    $buttons.forEach((el) => {
        el.addEventListener("click", () => {
            $calculo=$display.innerHTML;

            switch (el.attributes[1].value) {
                case 'clear':
                    $display.innerHTML = '';
                    $calculo = '';
                break;

                case 'delete':
                    $display.innerHTML = $calculo.substring(0, $calculo.length - 1);
                break;

                case 'calcular':
                    if($calculo != "") {
                        let $simb = ['undefined', 'null', '÷', 'x'];
                        let $simb_operation = ['', '', '/', '*'];
                        let $calculo_formatado = '';

                        $simb.forEach((value, key) => {
                            if($calculo.includes(value) === true) {
                                $calculo_formatado = $calculo.replace($simb[key], $simb_operation[key]);
                            }else{
                                $calculo_formatado = $calculo;
                            };
                        });

                        $display.innerHTML = eval($calculo_formatado);
                    };
                break;

                case 'digito':
                    $display.append(el.innerHTML);
                break;
            };
        });
    });
};