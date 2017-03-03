import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    saveQuestion1() {
      var params = {
        content: this.get('content'),
        author: this.get('author')
      };
      this.set('content', '');
      this.set('author', '');
      this.sendAction('saveQuestion2', params);
    }
  }
});
