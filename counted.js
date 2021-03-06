'use strict';

var ReadySignal = require('./index.js');

module.exports = CountedReadySignal;

function CountedReadySignal(n) {
    var ready = ReadySignal();
    ready.counter = n;

    var oldSignal = ready.signal;

    ready.signal = function newSignal() {
        if (--ready.counter === 0) {
            oldSignal.apply(this, arguments);
        }
    };

    return ready;
}
