define(['jQuery', 'Underscore', 'Backbone'], function ($, _, Backbone) {
  var GameDetailsView = Backbone.View.extend({
    tagName: 'section',
    template: _.template($('#gameDetailsTemplate').html()),
    render: function () {
      this.$el.html(this.template({
        gameTitle: this.checkString(this.model.toJSON()['game'].label),
        gameID: '#game/' + this.model.cid,
        developer: this.checkString(this.model.toJSON()['game'].developer),
        computingPlatform: this.checkString(
          this.model.toJSON()['game'].computingPlatform),
        publisher: this.checkString(this.model.toJSON()['game'].publisher),
        releaseDate: this.checkString(this.model.toJSON()['game'].releaseDate),
        genre: this.checkString(this.model.toJSON()['game'].genre)
      }));

      return this;
    },
    checkString: function (string) {
      if (string.constructor === Array) {
        var size = string.length;

        for (var i = 0; i < size; i++) {
          var stringElement = string[i];
          string[i] = stringElement.replace(/_/g, ' ');
        }

        string = string.join(', ');
      } else {
        if (string.length <= 0 || string === 'NULL') {
          string = '–';
        }

        string = string.replace(/_/g, ' ');
      }

      return string;
    }
  });

  return GameDetailsView;
});
