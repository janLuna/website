const uname = document.getElementById("username")

fetch("https://api.lanyard.rest/v1/users/849010835225444382").then( value => {
	value.json().then( data => {
		uname.innerText=`${data.data.discord_user.username}#${data.data.discord_user.discriminator}`;
		colors = {
			"online": "text-green-500",
			"idle": "text-amber-500",
			"dnd": "text-red-500"
		}
		uname.classList.add(colors[data.data.discord_status])
	})
})
