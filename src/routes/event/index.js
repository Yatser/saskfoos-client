

export function Event() {
  var self = this;
  self.teams = ["Brent", "Barry", "Jeremy"];
  self.matches = ["Brent vs Barry"];
  self.enterResult = function () {
    self.matches = [...self.matches, "Brent vs Jeremy"];
  };
}
