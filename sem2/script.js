document.addEventListener('DOMContentLoaded', () => {
	// i changed this so it set the time of the clock right when you enter the website, before it was set 1 second after you enter
	const clock = document.getElementById('clock')
	const updateClock = clock => {
		clock.textContent = new Date().toLocaleTimeString()
	}
	// set time at start
	updateClock(clock)

	// set time every 1 second after
	setInterval(() => updateClock(clock), 1000)

	const sectionsBrown = document.querySelectorAll('.clock--colourchange')
	const clockHeight = clock.offsetHeight + clock.offsetTop

	// whenever browser detects scroll
	window.addEventListener('scroll', () => {
		const amountScrolled = window.scrollY + clockHeight
		for (const section of sectionsBrown) {
			const topOfSection = section.offsetTop
			const bottomOfSection = topOfSection + section.offsetHeight

			if (amountScrolled > topOfSection && amountScrolled < bottomOfSection) {
				clock.style.setProperty('--clock-color', 'var(--c-green)')
				// we didn't have this yesterday so it changed back the color in the else {}
				// break stops the if from changing back to brown
				break
			} else {
				clock.style.setProperty('--clock-color', 'var(--c-brown)')
			}
		}
	})
})
