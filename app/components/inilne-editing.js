import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Component.extend({
	isEditing: false,

	text: computed.alias('item.title'),
	
	actions: {
		guardar(){
			this.get('item').save();
			this.set('isEditing', false);	
		},

		toggleEditing(isEditing){
			if (!isEditing){
				this.get('item').rollbackAttributes();
			}

			this.set('isEditing', isEditing);	
		}
	}
});
