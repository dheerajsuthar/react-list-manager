var React = require('react');
var ListItem = require('./ListItem.jsx');


var List = React.createClass({
	render : function(){
		var createItem = function(item, index){
			return <ListItem key={index+item} text={item} />;
		};
		return (
			<ul>{this.props.items.map(createItem)}</ul>
			);
	}
});

module.exports = List;
