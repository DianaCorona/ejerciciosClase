import Ember from 'ember';

export default Ember.TextField.extend({
	onDidInsertElement: function(){

		let semana = new Date();
		semana.setDate(semana.getDate() - 7);
		// Jquery!!
		this.$().datetimepicker({
			minDate: semana

		});
	}.on('didInsertElement')
});
