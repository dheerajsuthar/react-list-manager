var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1, "text": "ham"},{"id":2, "text": "bread"},{"id":3, "text": "butter"}];

var List = React.createClass({
  render : function(){
    var listItems = ingredients.map(function(item){
      return <ListItem id={item.id} ingredient={item.text}></ListItem>
    });
    return (
      <ul>{listItems}</ul>
    );
  }
});

module.exports = List;
