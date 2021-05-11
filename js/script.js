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
        let receivedElement = document.querySelector(".js-received")
        receivedElement.value = converted;
    }

    const onFormImput = () => {
        const amountElement = document.querySelector(".js-amount")
        const currencyConvertElement = document.querySelector(".js-currencyConvert")


        let received = receivedResult(amountElement, currencyConvertElement);
        updateReceived(received);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form")
        formElement.addEventListener("input", onFormImput);
    };
    init();
}