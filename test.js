var http = require('https');
var Evernote = require('evernote').Evernote;
var client = new Evernote.Client({
    token: "S=s1:U=92c30:E=15d89b94ea9:C=156320821e8:P=1cd:A=en-devtoken:V=2:H=866e96e52f4b21068d1c7c151bf9cd8d"
});
// http.get({ host: "https://sandbox.evernote.com", path: "/OAuth.action?oauth_token=shadowgun168.15631EDC584.594F55522043414C4C4241434B2055524C.B8029C5D1E3E765B04445B8B99134D57" }, )

// client.getAccessToken(oauthToken, oauthTokenSecret, "asda", function () {
//     console.log(arguments);
// })

var noteStore = client.getNoteStore();

noteStore.listNotebooks(function (e, n) {
    noteStore.getNotebook(n[0].guid, function (a, b) {
        console.log(b);
    })
})