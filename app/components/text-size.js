import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Component.extend({
	showMessage: computed( 'maxlength', 'size', 'advertisment', function(){
		let size = this.get('size'), maxlength = this.get('maxlength'), 
			advertisment = this.get('advertisment');
			
		return size >= maxlength - advertisment;
	})
	
});
