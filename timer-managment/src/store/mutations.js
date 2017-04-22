export default {
	GETTER_TASK: (state, tasks) => {
		var len = tasks.length;
		while(len--) {
			state.tasks.push(tasks[len]);

			console.log(tasks[len]);
		}         

		let storageData = state.tasks;
        console.log(storageData);
        
		sessionStorage.tasks = JSON.stringify(storageData);  		
	}
}