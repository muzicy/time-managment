import Vue from 'vue'

export default {
	getTasks ({commit}, payload) {
		Vue.http.get('http://localhost:3000/home').then(response => {
			commit('GETTER_TASK', response.data);
		})
	}
}