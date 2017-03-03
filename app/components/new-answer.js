import Ember from 'ember';

export default Ember.Component.extend({
	addNewAnswer: false,
  actions: {
    AnswerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
     content: this.get('content'),
       author: this.get('author')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }

});
