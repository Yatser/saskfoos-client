// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
var admin = require("firebase-admin");
var { firebaseConfig } = require("../../src/common.js");

admin.initializeApp(firebaseConfig);

const db = admin.firestore();
db.settings({ host: "localhost:8080", ssl: false });

module.exports = (on, config) => {
  on("task", {
    seedMatches() {
      return db.collection("matches").add({ teams: "Brent vs Jeremy" });
    },
  });
};
