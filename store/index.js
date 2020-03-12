import data from '~/data/data.json';
export const state = () => ({
	data,
	progress: [],
	moveToAct: ''
});
export const mutations = {
	SET_PROGRESS (state, payload) {
		state.progress = [...payload];
	},
	SET_MOVE_TO (state, payload) {
		state.moveToAct = payload;
	}
};
export const getters = {
	acts: (state) => {
		return Object.keys(state.data).map(key => ({ id: key, description: key.replace('a', 'A').replace('_', ' ') })).filter(obj => obj.id !== 'act_0');
	}
};
export const actions = {
	addProgress ({ commit }, payload) {
		commit('SET_PROGRESS', payload);
		if (localStorage) {
			localStorage.setItem('progress', this.progress);
		}
	},
	nuxtClientInit ({ commit, dispatch }) {
		if (localStorage) {
			const savedProgress = localStorage.getItem('progress');
			const payload = (savedProgress !== null) ? savedProgress.split(',').filter(Boolean) : [];
			commit('SET_PROGRESS', payload);
		}
	}
};