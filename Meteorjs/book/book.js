function add (item) {
  var list = Session.get("list");
  list.push(item);
  Session.set("list", list);
}

function remove (item) {
  var list = Session.get("list");
  i = list.indexOf(item);
  if (i > -1) {
    Session.set("list", list.slice(0, i).concat(list.slice(i + 1)));
  }
}

if (Meteor.isClient) {

  Session.set("list", ["one", "two"]);

  Template.list.items = function() {
    return Session.get("list");
  };

  Template.list.events({
    'keypress input': function(e, t) {
      if (e.which === 13) {
        var input = t.find("input");
        add(input.value);
        input.value = "";
      }
    }
  });

  Template.delete.events({
    'click': function(e, t) {
      remove(t.data);
    }
  });

}