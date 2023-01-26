function requestSomeData(requestNo) {
    console.log('Request: ', requestNo);
    queryAndResponse(() => console.log('Response For: ', requestNo)); //Anonymous Function
    /** queryAndResponse(function () => {
        console.log('Response For: ', requestNo)
    }); */
}

function queryAndResponse(callback) {
    setTimeout(callback, 5000);
}

requestSomeData(1);
requestSomeData(2);
requestSomeData(3);
requestSomeData(4);










// function setTimeoutExample() {
//     console.log('I am calling you..');
//     setTimeout(() => console.log('I was called...'), 3000);
// }

// setTimeoutExample();