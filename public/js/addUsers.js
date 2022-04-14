let $usersContainer = $("#users-container");

$(async function fetchUsers() {
	let res = await axios.get("/users");
	let users = res.data;

	for (let user of users) {
		let u = `<div id="user-${user.id}" class="user">
					<p>Name: ${user.firstName} ${user.lastName}</p>
					<p>Email: ${user.email}</p>
				 </div>`;

		$usersContainer.append($(u));
	}
});
