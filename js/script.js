{
    const receivedResult = (amountElement, currencyConvertElement) => {
        const ratePLNEUR = 4.55;
        const ratePLNUSD = 3.78;
        const ratePLNCHF = 4.13;
        const ratePLNGBP = 5.26;

        switch (currencyConvertElement.value) {
            case "EUR":
                return amountElement.value / ratePLNEUR;

            case "USD":
                return amountElement.value / ratePLNUSD;

            case "CHF":
                return amountElement.value / ratePLNCHF;

            case "GBP":
                return amountElement.value / ratePLNGBP;

            default:
                return amountElement.value;

        }
    };
    const updateReceived = (converted) => {
        var receivedElement = document.querySelector(".js-received")
        receivedElement.value = converted;
    }

    const onFormImput = () => {
        const amountElement = document.querySelector(".js-amount")
        const currencyConvertElement = document.querySelector(".js-currencyConvert")
        // const currencyElement = document.querySelector(".js-currency")


        // var rates = {
        //     "EUR": 4.55,
        //     "GBP": 5.26,
        //     "CHF": 4.13,
        //     "USD": 3.78
        // }

        // var przelicznik = rates[currencyConvertElement.value]
        // console.log(przelicznik)


        var received = receivedResult(amountElement, currencyConvertElement);
        updateReceived(received);

    };


    const init = () => {
        const formElement = document.querySelector(".js-form")
        formElement.addEventListener("input", onFormImput);
    };
    init();
}