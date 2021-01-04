
exports.randomIdentity = () => {

	let avatars = [
		`biker`,
		`chix`,
		`dapper`,
		`hippy`,
		`hipster`,
		`mumma`,
		`punk`,
		`rasta`,
		`rocker`,
	]

	let ranNum = Math.round( Math.random() * 1000 )
	let ranChoice = avatars[ Math.floor( Math.random() * avatars.length ) ]

	return {
		displayName: `${ranChoice}${ranNum}`,
		avatar: `${ranChoice}.svg`,
	}
}