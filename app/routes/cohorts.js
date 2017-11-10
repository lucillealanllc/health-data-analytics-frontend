import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    model() {
        return {
            gender: null,
            ageMin: null,
            ageMax: null,
            primaryExposure: null,
            inclusionCriteria: [
            ],
            includeDaysInPast: null,
            includeDaysInFuture: null,
            cohortData: {
                totalElements: 0
            },
            cohorts: this.get('store').findAll('cohort')
        };
    }
});
