/*global LearnosityAmd*/
LearnosityAmd.define(['underscore-v1.5.2'], function (_) {
    'use strict';

    function CustomShorttextScorer(question, response) {
        this.question = question;
        this.response = response;
        this.validResponse = question.valid_response || {};
    }

    _.extend(CustomShorttextScorer.prototype, {
        isValid: function () {
            return this.response === this.validResponse;
        },

        score: function () {
              var a = {"ankush": {"bhalla": 20}};
              var b = {"ankush": {"bhalla": 10}};
            return this.isValid() ? a : b;
        },

        maxScore: function () {
            return this.question.score != null? this.question.score : null;
        },

        canValidateResponse: function () {
            return !!this.validResponse;
        }
    });

    return {
        Scorer:   CustomShorttextScorer
    };
});
