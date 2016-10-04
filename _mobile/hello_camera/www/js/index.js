
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // BIND EVENTS 
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    //the 'this' reference to events is an 'event', so app.receivedEvent('deviceready') is directly called.
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();