import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		return {
			'dragulaoptions':{
				// dragula options see the follwing for a description of each:
				// https://github.com/bevacqua/dragula#usage
				'options':{
					copy: false,           // elements are moved by default, not copied
					revertOnSpill: false,  // spilling will put the element back where it was dragged from, if this is true
					removeOnSpill: false,
					mirrorContainer:document.getElementById('mirror')
				},
				// list the dragula events that you want to support here
				enabledEvents: ['drag', 'drop']
			},
			'copyoptions':{
				// dragula options see the follwing for a description of each:
				// https://github.com/bevacqua/dragula#usage
				'options':{
					// only copy from the source container
					copy: function(el, source) {
						return source.className.indexOf('souce-container') > -1;
					},
					// only allow drop into target container
					accepts: function(el, target) {
						console.log(el, target);
						return target.className.indexOf('target-container') > -1;
					}
				},
				// list the dragula events that you want to support here
				enabledEvents: ['drop']
			}
		};
	},
	actions:{
		'dragulaEvent':function(){
			// see https://github.com/bevacqua/dragula#drakeon-events
			// for the description of arguments passed by each event
			console.log(arguments);
		}
	}
});
