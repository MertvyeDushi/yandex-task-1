

function returnLeaders(data) {
	let innerData = JSON.parse(JSON.stringify(data)) // Не рекомендуется изменять входящие данные, т.к. это может привести к некорректному поведению в других местах

	if (innerData.selectedUserId) {
		let selectedUserIndex = data.users.findIndex( item => item.id === innerData.selectedUserId )
		let selectedUser = JSON.parse(JSON.stringify(data.users[selectedUserIndex]))
		if (selectedUserIndex > 4) innerData.users.splice(5, innerData.users.length - 5, selectedUser)
		else innerData.users.splice(5)
	} else innerData.users.splice(5)

	return `
		<div class="container u-df-column-between">
			<header class="header">
				<h1 class="header__title title">${ innerData.title }</h1>
				<p class="header__description description-text">${ innerData.subtitle }</p>
			</header>
			<main class="main">
				<div class="main__content main__content--vote-results">
					<ul class="list-leaders u-df-center-end">
						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--0 u-df-column-end-start">
							<div class="list-rectangle list-rectangle--0">
								<div class="list-person list-person--0">
									<p class="list-person__emoji">${ innerData.users[4].id === innerData.selectedUserId ? '👍' : '' }</p>
									<div class="person"><img class="person__avatar" src="./img/${ innerData.users[4].avatar }" alt="${ innerData.users[4].name }">
										<p class="person__name">${ innerData.users[4].name }</p>
									</div>
									<p class="list-person__value">${ innerData.users[4].valueText }</p>
								</div>
								<p class="list-rectangle__rating list-rectangle__rating--0">5</p>
							</div>
						</li>
						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--1 u-df-column-end-start">
							<div class="list-rectangle list-rectangle--1">
								<div class="list-person list-person--1">									
									<p class="list-person__emoji">${ innerData.users[2].id === innerData.selectedUserId ? '👍' : '' }</p>
									<div class="person"><img class="person__avatar" src="./img/${ innerData.users[2].avatar }" alt="${ innerData.users[2].name }">
										<p class="person__name">${ innerData.users[2].name }</p>
									</div>
									<p class="list-person__value">${ innerData.users[2].valueText }</p>
								</div>
								<p class="list-rectangle__rating list-rectangle__rating--1">3</p>
							</div>
						</li>

						<li class="list-leaders__item list-leaders__item--primary list-leaders__item--2 u-df-column-end-center">

							<div class="list-person">
								<p class="list-person__emoji">${ innerData.emoji }</p>
								<div class="person"><img class="person__avatar" src="./img/${ innerData.users[0].avatar }" alt="${ innerData.users[0].name }">
									<p class="person__name">${ innerData.users[0].name }</p>
								</div>
								<p class="list-person__value">${ innerData.users[0].valueText }</p>
							</div>

							<div class="list-rectangle list-rectangle--2">
								<p class="list-rectangle__rating list-rectangle__rating--2">1</p>
							</div>

							<div class="list-person list-person--float vertical" style="${ innerData.selectedUserId ? ( innerData.users[4].id === innerData.selectedUserId ? '' : 'opacity: 0; visibility: hidden' ) : 'opacity: 0; visibility: hidden' }">
								<p class="list-person__emoji">${ innerData.users[4].id === innerData.selectedUserId ? '👍' : '' }</p>
								<div class="person"><img class="person__avatar" src="./img/${ innerData.users[4].avatar }" alt="${ innerData.users[4].name }">
									<p class="person__name">${ innerData.users[4].name }</p>
								</div>
								<p class="list-person__value">15 голосов</p>
								<div class="list-person__separator separator"></div>
								<p class="list-rectangle__rating list-rectangle__rating--float">5</p>
							</div>
							
						</li>

						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--3 u-df-column-end-end">
							<div class="list-rectangle list-rectangle--3">
								<div class="list-person list-person--3">
									<p class="list-person__emoji">${ innerData.users[1].id === innerData.selectedUserId ? '👍' : '' }</p>
									<div class="person"><img class="person__avatar" src="./img/${ innerData.users[1].avatar }" alt="${ innerData.users[1].name }">
										<p class="person__name">${ innerData.users[1].name }</p>
									</div>
									<p class="list-person__value">${ innerData.users[1].valueText }</p>
								</div>
								<p class="list-rectangle__rating list-rectangle__rating--3">2</p>
							</div>
						</li>
						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--4 u-df-column-end-start">
							<div class="list-rectangle list-rectangle--4">
								<div class="list-person list-person--4">
									<p class="list-person__emoji">${ innerData.users[1].id === innerData.selectedUserId ? '👍' : '' }</p>
									<div class="person"><img class="person__avatar" src="./img/${ innerData.users[3].avatar }" alt="${ innerData.users[3].name }">
										<p class="person__name">${ innerData.users[3].name }</p>
									</div>
									<p class="list-person__value">${ innerData.users[3].valueText }</p>
								</div>
								<p class="list-rectangle__rating list-rectangle__rating--4">4</p>
							</div>
						</li>
					</ul>
				</div>
			</main>
		</div>
	`
}


function returnVote(data) {
	
	if (data.offset) {
		data.users = data.users.slice(data.offset)
	}

	return `
		<div class="container u-df-column-between">
			<header class="header">
				<h1 class="header__title title">${ data.title }</h1>
				<p class="header__description description-text">${ data.subtitle }</p>
			</header>
			<main class="main main--vote">
				<div class="main__content main__content--vote">
					<ul class="list-vote u-df-center-between">
						<li class="list-vote__item u-df-column-evenly vertical">
							<div class="list-vote__person-container ${ data.users[0] && data.users[0].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[0] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[0] && data.users[0].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="./img/${ data.users[0] ? data.users[0].avatar : '' }" alt="${ data.users[0] ? data.users[0].name : '' }">
									<p class="person__name">${ data.users[0] ? data.users[0].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__person-container ${ data.users[3] && data.users[3].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[3] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[3] && data.users[3].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="./img/${ data.users[3] ? data.users[3].avatar : '' }" alt="${ data.users[3] ? data.users[3].name : '' }">
									<p class="person__name">${ data.users[3] ? data.users[3].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__person-container ${ data.users[6] && data.users[6].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[6] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[6] && data.users[6].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="./img/${ data.users[6] ? data.users[6].avatar : '' }" alt="${ data.users[6] ? data.users[6].name : '' }">
									<p class="person__name">${ data.users[6] ? data.users[6].name : '' }</p>
								</div>
							</div>
						</li>
						<li class="list-vote__item u-df-center horizontal">
							<div class="list-vote__person-container ${ data.users[0] && data.users[0].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[0] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[0] && data.users[0].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="./img/${ data.users[0] ? data.users[0].avatar : '' }" alt="${ data.users[0] ? data.users[0].name : '' }">
									<p class="person__name">${ data.users[0] ? data.users[0].name : '' }</p>
								</div>
							</div>
						</li>
						<li class="list-vote__item u-df-column-between horizontal">
							<div class="list-vote__central-container ${ data.users[1] && data.users[1].id === data.selectedUserId ? 'voted' : '' } list-vote__central-container ${ data.users[1] && data.users[1].id === data.selectedUserId ? 'voted' : '' } u-df-center-between" style="${ data.users[1] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[1] && data.users[1].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="person"><img class="person__avatar" src="./img/${ data.users[1] ? data.users[1].avatar : '' }" alt="${ data.users[1] ? data.users[1].name : '' }">
									<p class="person__name">${ data.users[1] ? data.users[1].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__central-container ${ data.users[3] && data.users[3].id === data.selectedUserId ? 'voted' : '' } ${ data.users[3] && data.users[3].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[3] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[3] && data.users[3].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="person"><img class="person__avatar" src="./img/${ data.users[3] ? data.users[3].avatar : '' }" alt="${ data.users[3] ? data.users[3].name : '' }">
									<p class="person__name">${ data.users[3] ? data.users[3].name : '' }</p>
								</div>
							</div>
						</li>
						<li class="list-vote__item u-df-column-evenly">
							<button class="list-vote__btn list-vote__btn--up btn" disabled="${ data.offset ? false : true }"></button>
							<div class="list-vote__central-container list-vote__central-container ${ data.users[1] && data.users[1].id === data.selectedUserId ? 'voted' : '' } u-df-center vertical" style="${ data.users[1] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[1] && data.users[1].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="person"><img class="person__avatar" src="./img/${ data.users[1] ? data.users[1].avatar : '' }" alt="${ data.users[1] ? data.users[1].name : '' }">
									<p class="person__name">${ data.users[1] ? data.users[1].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__central-container ${ data.users[4] && data.users[4].id === data.selectedUserId ? 'voted' : '' } u-df-center vertical" style="${ data.users[4] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[4] && data.users[4].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="person"><img class="person__avatar" src="./img/${ data.users[4] ? data.users[4].avatar : '' }" alt="${ data.users[4] ? data.users[4].name : '' }">
									<p class="person__name">${ data.users[4] ? data.users[4].name : '' }</p>
								</div>
							</div>
							<button class="list-vote__btn list-vote__btn--down btn" disabled="${ data.offset ? true : false }"></button>
						</li>
						<li class="list-vote__item u-df-column-evenly vertical">
							<div class="list-vote__person-container ${ data.users[2] === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[2] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[2] && data.users[2].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="./img/${ data.users[2] ? data.users[2].avatar : '' }" alt="${ data.users[2] ? data.users[2].name : '' }">
									<p class="person__name">${ data.users[2] ? data.users[2].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__person-container ${ data.users[5] && data.users[5].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[5] ? '' : 'opacity: 0; visibility: hidden' }"
								<p class="list-vote__emoji">${ data.users[5] && data.users[5].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="./img/${ data.users[5] ? data.users[5].avatar : '' }" alt="${ data.users[5] ? data.users[5].name : '' }">
									<p class="person__name">${ data.users[5] ? data.users[5].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__person-container ${ data.users[7] && data.users[7].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[7] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[7] && data.users[7].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="./img/${ data.users[7] ? data.users[7].avatar : '' }" alt="${ data.users[7] ? data.users[7].name : '' }">
									<p class="person__name">${ data.users[7] ? data.users[7].name : '' }</p>
								</div>
							</div>
						</li>
						<li class="list-vote__item u-df-column-between horizontal">
							<div class="list-vote__person-container ${ data.users[2] && data.users[2].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[2] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[2] && data.users[2].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="./img/${ data.users[2] ? data.users[2].avatar : '' }" alt="${ data.users[2] ? data.users[2].name : '' }">
									<p class="person__name">${ data.users[2] ? data.users[2].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__person-container ${ data.users[4] && data.users[4].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[4] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[4] && data.users[4].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="./img/${ data.users[4] ? data.users[4].avatar : '' }" alt="${ data.users[4] ? data.users[4].name : '' }">
									<p class="person__name">${ data.users[4] ? data.users[4].name : '' }</p>
								</div>
							</div>
						</li>
						<li class="list-vote__item u-df-center horizontal" style="${ data.users[5] ? '' : 'opacity: 0; visibility: hidden' }">
							<div class="list-vote__person-container ${ data.users[5] && data.users[5].id === data.selectedUserId ? 'voted' : '' } u-df-center">
								<p class="list-vote__emoji">${ data.users[5] && data.users[5].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="./img/${ data.users[5] ? data.users[5].avatar : '' }" alt="${ data.users[5] ? data.users[5].name : '' }">
									<p class="person__name">${ data.users[5] ? data.users[5].name : '' }</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</main>
		</div>
	`
}


function returnChart(data) {
	return `
		<div class="container u-df-column-between">
			<header class="header">
				<h1 class="header__title title">${ data.title }</h1>
				<p class="header__description description-text">${ data.subtitle }</p>
			</header>
			<main class="main">
				<div class="main__content main__content--chart u-df-center">
					<ul class="chart-list u-df-center-end">
						<li class="chart-list__item u-df-column-center-end horizontal">
							<div class="chart-list__value">${ data.values[4].value }</div>
							<div class="chart-list__rectangle chart-list__rectangle--1 chart-list__rectangle--secondary"></div>
							<div class="chart-list__number">${ data.values[4].title }</div>
						</li>
						<li class="chart-list__item u-df-column-center-end horizontal">
							<div class="chart-list__value">${ data.values[5].value }</div>
							<div class="chart-list__rectangle chart-list__rectangle--2 chart-list__rectangle--secondary"></div>
							<div class="chart-list__number">${ data.values[5].title }</div>
						</li>
						<li class="chart-list__item u-df-column-center-end horizontal">
							<div class="chart-list__value">${ data.values[6].value }</div>
							<div class="chart-list__rectangle chart-list__rectangle--3 chart-list__rectangle--secondary"></div>
							<div class="chart-list__number">${ data.values[6].title }</div>
						</li>
						<li class="chart-list__item u-df-column-center-end">
							<div class="chart-list__value">${ data.values[7].value }</div>
							<div class="chart-list__rectangle chart-list__rectangle--4 chart-list__rectangle--secondary"></div>
							<div class="chart-list__number">${ data.values[7].title }</div>
						</li>
						<li class="chart-list__item u-df-column-center-end">
							<div class="chart-list__value">${ data.values[8].value }</div>
							<div class="chart-list__rectangle chart-list__rectangle--5 chart-list__rectangle--secondary"></div>
							<div class="chart-list__number">${ data.values[8].title }</div>
						</li>
						<li class="chart-list__item u-df-column-center-end">
							<div class="chart-list__value">${ data.values[9].value }</div>
							<div class="chart-list__rectangle chart-list__rectangle--6 chart-list__rectangle--secondary"></div>
							<div class="chart-list__number">${ data.values[9].title }</div>
						</li>
						<li class="chart-list__item u-df-column-center-end">
							<div class="chart-list__value chart-list__value--primary">${ data.values[10].value }</div>
							<div class="chart-list__rectangle chart-list__rectangle--7 chart-list__rectangle--secondary ${ data.values[10].active ? 'chart-list__rectangle--primary' : '' }"></div>
							<div class="chart-list__number">${ data.values[10].title }</div>
						</li>
						<li class="chart-list__item u-df-column-center-end">
							<div class="chart-list__value"></div>
							<div class="chart-list__rectangle chart-list__rectangle--8 chart-list__rectangle--secondary"></div>
							<div class="chart-list__number">${ data.values[11].title }</div>
						</li>
						<li class="chart-list__item u-df-column-center-end">
							<div class="chart-list__value"></div>
							<div class="chart-list__rectangle chart-list__rectangle--9 chart-list__rectangle--secondary"></div>
							<div class="chart-list__number">${ data.values[12].title }</div>
						</li>
					</ul>
				</div>
			</main>
			<footer class="chart-footer">
				<ul class="chart-footer__list">
					<li class="chart-footer__item u-df-center-start"><img class="chart-footer__avatar" src="./img/${ data.users[0].avatar }" alt="${ data.users[0].name }">
						<div class="chart-footer__data">
							<p class="chart-footer__name">${ data.users[0].name }</p>
							<p class="chart-footer__value">${ data.users[0].valueText }</p>
						</div>
					</li>
					<li class="chart-footer__item u-df-center-start"><img class="chart-footer__avatar" src="./img/${ data.users[1].avatar }" alt="${ data.users[1].name }">
						<div class="chart-footer__data">
							<p class="chart-footer__name">${ data.users[1].name }</p>
							<p class="chart-footer__value">${ data.users[1].valueText }</p>
						</div>
					</li>
				</ul>
			</footer>
		</div>
	`
}


function returnDiagram(data) {

	let innerData = JSON.parse(JSON.stringify(data))

	let totalValue = 0

	innerData.categories.forEach( item => {
		item.valueText = parseInt(item.valueText.split(' ')[0])
		totalValue += item.valueText
		item.differenceText = item.differenceText.split(' ')[0]
	})

	// Для резиновой верстки повесить событие resize на window: вычислять значения widthVertical, R1 и R2, пересчитывать координаты точек эллиптических кривых.

	const R1 = 164  // vertical
	const R2 = 120 // horizontal

	const widthVertical = 328 // px

	const mainArcDataVertical = getMainArcData(innerData.categories[0].valueText, totalValue, R1, 0.7)
	const mainArcDataHorizontal = getMainArcData(innerData.categories[0].valueText, totalValue, R2, 0.7)

	const secondArcDataVertical = getSecondaryArcData(innerData.categories[1].valueText, totalValue, R1, mainArcDataVertical.r2, mainArcDataVertical.end)
	const secondArcDataHorizontal = getSecondaryArcData(innerData.categories[1].valueText, totalValue, R2, mainArcDataHorizontal.r2, mainArcDataHorizontal.end)
	
	
	const thirdArcDataVertical = getSecondaryArcData(innerData.categories[2].valueText, totalValue, R1, mainArcDataVertical.r2, secondArcDataVertical.end)
	const thirdArcDataHorizontal = getSecondaryArcData(innerData.categories[2].valueText, totalValue, R2, mainArcDataHorizontal.r2, secondArcDataHorizontal.end)
	
	
	const fourthArcDataVertical = getSecondaryArcData(innerData.categories[3].valueText, totalValue, R1, mainArcDataVertical.r2, thirdArcDataVertical.end)
	const fourthArcDataHorizontal = getSecondaryArcData(innerData.categories[3].valueText, totalValue, R2, mainArcDataHorizontal.r2, thirdArcDataHorizontal.end)


	return `
		<div class="container u-df-column-between">
			<header class="header">
				<h1 class="header__title title">${ innerData.title }</h1>
				<p class="header__description description-text">${ innerData.subtitle }</p>
			</header>
			<div class="diagram-content u-df-column-between">
				<main class="diagram-main main">
					<div class="main__content main__content--diagram u-df-center">
						<div class="diagram-container">
							<div class="diagram u-df-center">
								<svg class="diagram__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g class="dark" filter="url(#filter0_dii)">
										<path class="vertical" d="M ${ mainArcDataVertical.coords.x.xSVG1 } ${ mainArcDataVertical.coords.y.ySVG1 } A ${ R1 } ${ R1 } 0 0 1 ${ mainArcDataVertical.coords.x.xSVG2 } ${ mainArcDataVertical.coords.y.ySVG2 } L ${ mainArcDataVertical.coords.x.xSVG4 } ${ mainArcDataVertical.coords.y.ySVG4 } A ${ mainArcDataVertical.r2 } ${ mainArcDataVertical.r2 } 0 0 0 ${ mainArcDataVertical.coords.x.xSVG3 } ${ mainArcDataVertical.coords.y.ySVG3 } Z" fill="url(#paint0_radial)" fill-opacity="0.8" />
										<path class="horizontal" d="M ${ mainArcDataHorizontal.coords.x.xSVG1 } ${ mainArcDataHorizontal.coords.y.ySVG1 } A ${ R2 } ${ R2 } 0 0 1 ${ mainArcDataHorizontal.coords.x.xSVG2 } ${ mainArcDataHorizontal.coords.y.ySVG2 } L ${ mainArcDataHorizontal.coords.x.xSVG4 } ${ mainArcDataHorizontal.coords.y.ySVG4 } A ${ mainArcDataHorizontal.r2 } ${ mainArcDataHorizontal.r2 } 0 0 0 ${ mainArcDataHorizontal.coords.x.xSVG3 } ${ mainArcDataHorizontal.coords.y.ySVG3 } Z" fill="url(#paint0_radial)" fill-opacity="0.8" />
									</g>
									<g class="dark" filter="url(#filter1_dii)">
										<path class="vertical" d="M ${ secondArcDataVertical.coords.x.xSVG1 } ${ secondArcDataVertical.coords.y.ySVG1 } A ${ R1 } ${ R1 } 0 0 1 ${ secondArcDataVertical.coords.x.xSVG2 } ${ secondArcDataVertical.coords.y.ySVG2 } L ${ secondArcDataVertical.coords.x.xSVG4 } ${ secondArcDataVertical.coords.y.ySVG4 } A ${ mainArcDataVertical.r2 } ${ mainArcDataVertical.r2 } 0 0 0 ${ secondArcDataVertical.coords.x.xSVG3 } ${ secondArcDataVertical.coords.y.ySVG3 } Z" fill="url(#paint1_radial)" fill-opacity="0.5" />
										<path class="horizontal" d="M ${ secondArcDataHorizontal.coords.x.xSVG1 } ${ secondArcDataHorizontal.coords.y.ySVG1 } A ${ R2 } ${ R2 } 0 0 1 ${ secondArcDataHorizontal.coords.x.xSVG2 } ${ secondArcDataHorizontal.coords.y.ySVG2 } L ${ secondArcDataHorizontal.coords.x.xSVG4 } ${ secondArcDataHorizontal.coords.y.ySVG4 } A ${ mainArcDataHorizontal.r2 } ${ mainArcDataHorizontal.r2 } 0 0 0 ${ secondArcDataHorizontal.coords.x.xSVG3 } ${ secondArcDataHorizontal.coords.y.ySVG3 } Z" fill="url(#paint1_radial)" fill-opacity="0.5" />
									</g>
									<g class="dark" filter="url(#filter2_dii)">
										<path class="vertical" d="M ${ thirdArcDataVertical.coords.x.xSVG1 } ${ thirdArcDataVertical.coords.y.ySVG1 } A ${ R1 } ${ R1 } 0 0 1 ${ thirdArcDataVertical.coords.x.xSVG2 } ${ thirdArcDataVertical.coords.y.ySVG2 } L ${ thirdArcDataVertical.coords.x.xSVG4 } ${ thirdArcDataVertical.coords.y.ySVG4 } A ${ mainArcDataVertical.r2 } ${ mainArcDataVertical.r2 } 0 0 0 ${ thirdArcDataVertical.coords.x.xSVG3 } ${ thirdArcDataVertical.coords.y.ySVG3 } Z" fill="url(#paint2_radial)" fill-opacity="0.5" />
										<path class="horizontal" d="M ${ thirdArcDataHorizontal.coords.x.xSVG1 } ${ thirdArcDataHorizontal.coords.y.ySVG1 } A ${ R2 } ${ R2 } 0 0 1 ${ thirdArcDataHorizontal.coords.x.xSVG2 } ${ thirdArcDataHorizontal.coords.y.ySVG2 } L ${ thirdArcDataHorizontal.coords.x.xSVG4 } ${ thirdArcDataHorizontal.coords.y.ySVG4 } A ${ mainArcDataHorizontal.r2 } ${ mainArcDataHorizontal.r2 } 0 0 0 ${ thirdArcDataHorizontal.coords.x.xSVG3 } ${ thirdArcDataHorizontal.coords.y.ySVG3 } Z" fill="url(#paint2_radial)" fill-opacity="0.5" />
									</g>
									<g class="dark" filter="url(#filter3_dii)">
										<path class="vertical" d="M ${ fourthArcDataVertical.coords.x.xSVG1 } ${ fourthArcDataVertical.coords.y.ySVG1 } A ${ R1 } ${ R1 } 0 0 1 ${ fourthArcDataVertical.coords.x.xSVG2 } ${ fourthArcDataVertical.coords.y.ySVG2 } L ${ fourthArcDataVertical.coords.x.xSVG4 } ${ fourthArcDataVertical.coords.y.ySVG4 } A ${ mainArcDataVertical.r2 } ${ mainArcDataVertical.r2 } 0 0 0 ${ fourthArcDataVertical.coords.x.xSVG3 } ${ fourthArcDataVertical.coords.y.ySVG3 } Z" fill="url(#paint3_radial)" fill-opacity="0.5" />
										<path class="horizontal" d="M ${ fourthArcDataHorizontal.coords.x.xSVG1 } ${ fourthArcDataHorizontal.coords.y.ySVG1 } A ${ R2 } ${ R2 } 0 0 1 ${ fourthArcDataHorizontal.coords.x.xSVG2 } ${ fourthArcDataHorizontal.coords.y.ySVG2 } L ${ fourthArcDataHorizontal.coords.x.xSVG4 } ${ fourthArcDataHorizontal.coords.y.ySVG4 } A ${ mainArcDataHorizontal.r2 } ${ mainArcDataHorizontal.r2 } 0 0 0 ${ fourthArcDataHorizontal.coords.x.xSVG3 } ${ fourthArcDataHorizontal.coords.y.ySVG3 } Z" fill="url(#paint3_radial)" fill-opacity="0.5" />
									</g>
									<g class="light" filter="url(#filter4_dii)">
										<path class="vertical" d="M ${ mainArcDataVertical.coords.x.xSVG1 } ${ mainArcDataVertical.coords.y.ySVG1 } A ${ R1 } ${ R1 } 0 0 1 ${ mainArcDataVertical.coords.x.xSVG2 } ${ mainArcDataVertical.coords.y.ySVG2 } L ${ mainArcDataVertical.coords.x.xSVG4 } ${ mainArcDataVertical.coords.y.ySVG4 } A ${ mainArcDataVertical.r2 } ${ mainArcDataVertical.r2 } 0 0 0 ${ mainArcDataVertical.coords.x.xSVG3 } ${ mainArcDataVertical.coords.y.ySVG3 } Z" fill="url(#paint4_radial)" fill-opacity="0.8" />
										<path class="horizontal" d="M ${ mainArcDataHorizontal.coords.x.xSVG1 } ${ mainArcDataHorizontal.coords.y.ySVG1 } A ${ R2 } ${ R2 } 0 0 1 ${ mainArcDataHorizontal.coords.x.xSVG2 } ${ mainArcDataHorizontal.coords.y.ySVG2 } L ${ mainArcDataHorizontal.coords.x.xSVG4 } ${ mainArcDataHorizontal.coords.y.ySVG4 } A ${ mainArcDataHorizontal.r2 } ${ mainArcDataHorizontal.r2 } 0 0 0 ${ mainArcDataHorizontal.coords.x.xSVG3 } ${ mainArcDataHorizontal.coords.y.ySVG3 } Z" fill="url(#paint4_radial)" fill-opacity="0.8" />
									</g>
									<g class="light" filter="url(#filter5_dii)">
										<path class="vertical" d="M ${ secondArcDataVertical.coords.x.xSVG1 } ${ secondArcDataVertical.coords.y.ySVG1 } A ${ R1 } ${ R1 } 0 0 1 ${ secondArcDataVertical.coords.x.xSVG2 } ${ secondArcDataVertical.coords.y.ySVG2 } L ${ secondArcDataVertical.coords.x.xSVG4 } ${ secondArcDataVertical.coords.y.ySVG4 } A ${ mainArcDataVertical.r2 } ${ mainArcDataVertical.r2 } 0 0 0 ${ secondArcDataVertical.coords.x.xSVG3 } ${ secondArcDataVertical.coords.y.ySVG3 } Z" fill="url(#paint5_radial)" fill-opacity="0.5" />
										<path class="horizontal" d="M ${ secondArcDataHorizontal.coords.x.xSVG1 } ${ secondArcDataHorizontal.coords.y.ySVG1 } A ${ R2 } ${ R2 } 0 0 1 ${ secondArcDataHorizontal.coords.x.xSVG2 } ${ secondArcDataHorizontal.coords.y.ySVG2 } L ${ secondArcDataHorizontal.coords.x.xSVG4 } ${ secondArcDataHorizontal.coords.y.ySVG4 } A ${ mainArcDataHorizontal.r2 } ${ mainArcDataHorizontal.r2 } 0 0 0 ${ secondArcDataHorizontal.coords.x.xSVG3 } ${ secondArcDataHorizontal.coords.y.ySVG3 } Z" fill="url(#paint5_radial)" fill-opacity="0.5" />
									</g>
									<g class="light" filter="url(#filter6_dii)">
										<path class="vertical" d="M ${ thirdArcDataVertical.coords.x.xSVG1 } ${ thirdArcDataVertical.coords.y.ySVG1 } A ${ R1 } ${ R1 } 0 0 1 ${ thirdArcDataVertical.coords.x.xSVG2 } ${ thirdArcDataVertical.coords.y.ySVG2 } L ${ thirdArcDataVertical.coords.x.xSVG4 } ${ thirdArcDataVertical.coords.y.ySVG4 } A ${ mainArcDataVertical.r2 } ${ mainArcDataVertical.r2 } 0 0 0 ${ thirdArcDataVertical.coords.x.xSVG3 } ${ thirdArcDataVertical.coords.y.ySVG3 } Z" fill="url(#paint6_radial)" fill-opacity="0.5" />
										<path class="horizontal" d="M ${ thirdArcDataHorizontal.coords.x.xSVG1 } ${ thirdArcDataHorizontal.coords.y.ySVG1 } A ${ R2 } ${ R2 } 0 0 1 ${ thirdArcDataHorizontal.coords.x.xSVG2 } ${ thirdArcDataHorizontal.coords.y.ySVG2 } L ${ thirdArcDataHorizontal.coords.x.xSVG4 } ${ thirdArcDataHorizontal.coords.y.ySVG4 } A ${ mainArcDataHorizontal.r2 } ${ mainArcDataHorizontal.r2 } 0 0 0 ${ thirdArcDataHorizontal.coords.x.xSVG3 } ${ thirdArcDataHorizontal.coords.y.ySVG3 } Z" fill="url(#paint6_radial)" fill-opacity="0.5" />
									</g>
									<g class="light" filter="url(#filter7_dii)">
										<path class="vertical" d="M ${ fourthArcDataVertical.coords.x.xSVG1 } ${ fourthArcDataVertical.coords.y.ySVG1 } A ${ R1 } ${ R1 } 0 0 1 ${ fourthArcDataVertical.coords.x.xSVG2 } ${ fourthArcDataVertical.coords.y.ySVG2 } L ${ fourthArcDataVertical.coords.x.xSVG4 } ${ fourthArcDataVertical.coords.y.ySVG4 } A ${ mainArcDataVertical.r2 } ${ mainArcDataVertical.r2 } 0 0 0 ${ fourthArcDataVertical.coords.x.xSVG3 } ${ fourthArcDataVertical.coords.y.ySVG3 } Z" fill="url(#paint7_radial)" fill-opacity="0.5" />
										<path class="horizontal" d="M ${ fourthArcDataHorizontal.coords.x.xSVG1 } ${ fourthArcDataHorizontal.coords.y.ySVG1 } A ${ R2 } ${ R2 } 0 0 1 ${ fourthArcDataHorizontal.coords.x.xSVG2 } ${ fourthArcDataHorizontal.coords.y.ySVG2 } L ${ fourthArcDataHorizontal.coords.x.xSVG4 } ${ fourthArcDataHorizontal.coords.y.ySVG4 } A ${ mainArcDataHorizontal.r2 } ${ mainArcDataHorizontal.r2 } 0 0 0 ${ fourthArcDataHorizontal.coords.x.xSVG3 } ${ fourthArcDataHorizontal.coords.y.ySVG3 } Z" fill="url(#paint7_radial)" fill-opacity="0.5" />
									</g>
									<defs>
									<filter id="filter0_dii" x="0" y="0" width="${ widthVertical }" height="${ widthVertical }" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.618715 0 0 0 0 0 0 0 0 0.2 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.636666 0 0 0 0 0 0 0 0 0.9 0"/>
										<feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dx="-1" dy="1"/>
										<feGaussianBlur stdDeviation="0.5"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
										<feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
									</filter>
									<filter id="filter1_dii" x="0" y="0" width="${ widthVertical }" height="${ widthVertical }" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.575 0 0 0 0 0.365803 0 0 0 0 0 0 0 0 0.2 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.504028 0 0 0 0 0 0 0 0 0.9 0"/>
										<feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dx="-1" dy="1"/>
										<feGaussianBlur stdDeviation="0.5"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
										<feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
									</filter>
									<filter id="filter2_dii" x="0" y="0" width="${ widthVertical }" height="${ widthVertical }" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0.9 0"/>
										<feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dx="-1" dy="1"/>
										<feGaussianBlur stdDeviation="0.5"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
										<feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
									</filter>
									<filter id="filter3_dii" x="0" y="0" width="${ widthVertical }" height="${ widthVertical }" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.2 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0.9 0"/>
										<feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dx="-1" dy="1"/>
										<feGaussianBlur stdDeviation="0.5"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
										<feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
									</filter>
									<filter id="filter4_dii" x="0" y="0" width="${ widthVertical }" height="${ widthVertical }" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.9 0"/>
										<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dx="-1" dy="1"/>
										<feGaussianBlur stdDeviation="0.5"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
										<feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
									</filter>
									<filter id="filter5_dii" x="0" y="0" width="${ widthVertical }" height="${ widthVertical }" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.4 0"/>
										<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dx="-1" dy="1"/>
										<feGaussianBlur stdDeviation="0.5"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
										<feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
									</filter>
									<filter id="filter6_dii" x="0" y="0" width="${ widthVertical }" height="${ widthVertical }" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.4125 0 0 0 0 0.4125 0 0 0 0 0.4125 0 0 0 0.2 0"/>
										<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dx="-1" dy="1"/>
										<feGaussianBlur stdDeviation="0.5"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
										<feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
									</filter>
									<filter id="filter7_dii" x="0" y="0" width="${ widthVertical }" height="${ widthVertical }" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset/>
										<feGaussianBlur stdDeviation="10"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.5125 0 0 0 0 0.5125 0 0 0 0 0.5125 0 0 0 0.6 0"/>
										<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dx="-1" dy="1"/>
										<feGaussianBlur stdDeviation="0.5"/>
										<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
										<feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
									</filter>
									<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(89.4859 176.514) rotate(90) scale(163.486)">
										<stop offset="0.71875" stop-color="#FFA300"/>
										<stop offset="1" stop-color="#5B3A00"/>
									</radialGradient>
									<radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-47.5141 152.514) rotate(90) scale(163.486)">
										<stop offset="0.729167" stop-color="#633F00"/>
										<stop offset="1" stop-color="#0F0900"/>
									</radialGradient>
									<radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(85.4859 5.51411) rotate(90) scale(163.486)">
										<stop offset="0.71875" stop-color="#9B9B9B"/>
										<stop offset="1" stop-color="#382900"/>
									</radialGradient>
									<radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(175.486 152.514) rotate(90) scale(163.486)">
										<stop offset="0.71875" stop-color="#4D4D4D"/>
										<stop offset="1" stop-color="#382900"/>
									</radialGradient>
									<radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(77.4859 164.514) rotate(90) scale(163.486)">
										<stop offset="0.8125" stop-color="#FFB800" stop-opacity="0.7"/>
										<stop offset="1" stop-color="#FFEF99" stop-opacity="0.4"/>
									</radialGradient>
									<radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-59.5141 140.514) rotate(90) scale(163.486)">
										<stop offset="0.8125" stop-color="#FFB800" stop-opacity="0.4"/>
										<stop offset="1" stop-color="#FFEF99" stop-opacity="0.2"/>
									</radialGradient>
									<radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(73.4859 -6.48589) rotate(90) scale(163.486)">
										<stop offset="0.828125" stop-color="#A6A6A6" stop-opacity="0.69"/>
										<stop offset="0.921875" stop-color="#CBCBCB" stop-opacity="0.2"/>
									</radialGradient>
									<radialGradient id="paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.486 140.514) rotate(90) scale(163.486)">
										<stop offset="0.828125" stop-color="#BFBFBF" stop-opacity="0.69"/>
										<stop offset="0.921875" stop-color="#E4E4E4" stop-opacity="0.2"/>
									</radialGradient>
									</defs>
								</svg>
								<div class="diagram__content u-df-column-center">
									<div class="diagram__number">${ innerData.differenceText }</div>
									<div class="diagram__plus">${ innerData.totalText }</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<footer class="diagram-footer">
					<ul class="diagram-footer__list">
						<li class="diagram-footer__item u-df-center-between">
							<div class="diagram-footer__left u-df-center-start">
								<div class="diagram-footer__dot diagram-footer__dot--1"></div>
								<div class="diagram-footer__rows">${ innerData.categories[0].title }</div>
							</div>
							<div class="diagram-footer__right u-df-center-end">
								<div class="diagram-footer__prev">${ innerData.categories[0].differenceText }</div>
								<div class="diagram-footer__current">${ innerData.categories[0].valueText }</div>
							</div>
						</li>
						<li class="diagram-footer__item u-df-center-between">
							<div class="diagram-footer__left u-df-center-start">
								<div class="diagram-footer__dot diagram-footer__dot--2"></div>
								<div class="diagram-footer__rows">${ innerData.categories[1].title }</div>
							</div>
							<div class="diagram-footer__right u-df-center-end">
								<div class="diagram-footer__prev">${ innerData.categories[1].differenceText }</div>
								<div class="diagram-footer__current">${ innerData.categories[1].valueText }</div>
							</div>
						</li>
						<li class="diagram-footer__item u-df-center-between">
							<div class="diagram-footer__left u-df-center-start">
								<div class="diagram-footer__dot diagram-footer__dot--3"></div>
								<div class="diagram-footer__rows">${ innerData.categories[2].title }</div>
							</div>
							<div class="diagram-footer__right u-df-center-end">
								<div class="diagram-footer__prev">${ innerData.categories[2].differenceText }</div>
								<div class="diagram-footer__current">${ innerData.categories[2].valueText }</div>
							</div>
						</li>
						<li class="diagram-footer__item u-df-center-between">
							<div class="diagram-footer__left u-df-center-start">
								<div class="diagram-footer__dot diagram-footer__dot--4"></div>
								<div class="diagram-footer__rows">${ innerData.categories[3].title }</div>
							</div>
							<div class="diagram-footer__right u-df-center-end">
								<div class="diagram-footer__prev">${ innerData.categories[3].differenceText }</div>
								<div class="diagram-footer__current">${ innerData.categories[3].valueText }</div>
							</div>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	`
}


function returnActivity(data) {

	// Новый для меня опыт: никогда раньше так не собирал шаблоны.

	let innerData = JSON.parse(JSON.stringify(data))

	let str = `
		<div class="container u-df-column-between">
			<header class="header">
				<h1 class="header__title title">${ innerData.title }</h1>
				<p class="header__description description-text">${ innerData.subtitle }</p>
			</header>
	`

	let verticalStart = `
		<main class="main vertical">
			<div class="main__content main__content--activity u-df-center">
				<div class="activity-map u-df-center">
	`

	let verticalEnd = `
				</div>
			</div>
		</main>
	`

	let weekStartVertical = `
		<ul class="activity-map__list u-df-center"><!-- Неделя -->
	`

	let weekEndVertical = `</ul>`

	let dayStartVertical = `
		<li class="activity-map__list-item"><!-- День -->
			<ul class="activity-map__item-list u-df-column-center"><!-- Список часов дня -->
	`

	let dayEndVertical = `
			</ul>
		</li>
	`

	let monVertical = innerData.data.mon.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let tueVertical = innerData.data.tue.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let wedVertical = innerData.data.wed.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let thuVertical = innerData.data.thu.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let friVertical = innerData.data.fri.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let satVertical = innerData.data.sat.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let sunVertical = innerData.data.sun.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})


	let week = [ monVertical, tueVertical, wedVertical, thuVertical, friVertical, satVertical, sunVertical ]


	for (let i = 0; i < week.length; i++) {
		let tmp = week[i].join(' ')
		week[i] = dayStartVertical + tmp + dayEndVertical
	}

	let tmp1 = week.join(' ')
	
	let weekVertical = weekStartVertical + tmp1 + weekEndVertical

	let vertical = verticalStart + weekVertical + verticalEnd


	// Кол-во коммитов (по 2 часа)
	let tmpObj = {}

	for (let variable in innerData.data) {
		newTmpArray = []

		for (let i = 0; i < innerData.data[variable].length; i += 2) {
			newTmpArray.push( innerData.data[variable][i] + innerData.data[variable][i + 1] )
		}

		tmpObj[variable] = newTmpArray
	}

	
	let horizontalStart = `
		<main class="main horizontal">
			<div class="main__content main__content--activity u-df-center">
				<div class="activity-map u-df-center">
	`

	let horizontalEnd = `
				</div>
			</div>
		</main>
	`

	let weekStartHorizontal = `
		<ul class="activity-map__list u-df-column-center">
	`

	let weekEndHorizontal = `</ul>`

	let dayStartHorizontal = `
		<li class="activity-map__list-item">
			<ul class="activity-map__item-list u-df-center">
	`

	let dayEndHorizontal = `
			</ul>
		</li>
	`

	let monHorizontal = tmpObj.mon.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let tueHorizontal = tmpObj.tue.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let wedHorizontal = tmpObj.wed.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let thuHorizontal = tmpObj.thu.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let friHorizontal = tmpObj.fri.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let satHorizontal = tmpObj.sat.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let sunHorizontal = tmpObj.sun.map( h => {
		return `
			<li class="activity-map__bar activity-map__bar--${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }"><!-- Час -->
				<div class="activity-map__bar-container">
					<div class="activity-map__bar-content">
						<img class="activity-map__bar-img dark" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-dark.svg">
						<img class="activity-map__bar-img light" src="./img/${ h === 0 ? 'min' : ( ( h > 0 && h < 3 ) ? 'mid' : ( ( h > 2 && h < 5 ) ? 'max' : 'extra' ) ) }-light.svg">
					</div>
				</div>
			</li>
		`
	})

	let week2 = [ monHorizontal, tueHorizontal, wedHorizontal, thuHorizontal, friHorizontal, satHorizontal, sunHorizontal ]

	
	for (let i = 0; i < week2.length; i++) {
		let tmp = week2[i].join(' ')
		week2[i] = dayStartHorizontal + tmp + dayEndHorizontal
	}

	let tmp2 = week2.join(' ')

	let weekHorizontal = weekStartHorizontal + tmp2 + weekEndHorizontal

	let horizontal = horizontalStart + weekHorizontal + horizontalEnd


	let footer = `
		<footer class="activity-footer">
			<ul class="legend-list u-df-center-between">
				<li class="legend-list__item">
					<div class="legend-list__designation legend-list__designation--1">
						<div class="legend-list__designation-part-1"></div>
						<div class="legend-list__designation-part-2"></div>
						<div class="legend-list__designation-part-3"></div>
					</div>
					<p class="legend-list__description vertical">1 час</p>
					<p class="legend-list__description horizontal">2 часа</p>
				</li>
				<li class="legend-list__item">
					<div class="legend-list__designation legend-list__designation--2"></div>
					<p class="legend-list__description">0</p>
				</li>
				<li class="legend-list__item">
					<div class="legend-list__designation legend-list__designation--3"></div>
					<p class="legend-list__description">1 — 2</p>
				</li>
				<li class="legend-list__item">
					<div class="legend-list__designation legend-list__designation--4"></div>
					<p class="legend-list__description">3 — 4</p>
				</li>
				<li class="legend-list__item">
					<div class="legend-list__designation legend-list__designation--5"></div>
					<p class="legend-list__description">5 — 6</p>
				</li>
			</ul>
		</footer>
		</div>
	`

	str = str + vertical + horizontal + footer

	return str
}


function renderTemplate(alias, data) {
	if (alias === 'leaders') return returnLeaders(data)
	else if (alias === 'vote') return returnVote(data)
	else if (alias === 'chart') return returnChart(data)
	else if (alias === 'diagram') return returnDiagram(data)
	else if (alias === 'activity') return returnActivity(data)
	else return `<p>Извините, что-то пошло не так...</p>`
}


// Вычисление координат элиптической дуги:

function getMainArcData(value, valuesSum, r1, coef) {

	let degrees = value * ((360 - 4) / valuesSum) / 2 // -4deg -- т.к. 4 разделителя по 1deg между секторами
																										// деление на 2, т.к. будем искать по обе стороны от оси OY
	

	// Находим координаты для левой стороны:
	let alfa = 90 + degrees

	let x_1 = r1 * Math.cos(alfa * Math.PI / 180)
	let x_svg_1 = r1 + x_1

	let y_1 = r1 * Math.sin(alfa * Math.PI / 180)
	let y_svg_1 = r1 - y_1


	// Находим координаты для правой стороны:
	let omega = 90 - degrees

	let x_2 = r1 * Math.cos(omega * Math.PI / 180)
	let x_svg_2 = r1 + x_2

	// let y_2 = r1 * Math.sin(omega * Math.PI / 180)
	// let y_svg_2 = r1 - y_2
	let y_svg_2 = y_svg_1


	// Находим внутрений радиус:
	let r_2 = r1 * coef


	// Координаты внутренней кривой:
	let x_3 = r_2 * Math.cos(alfa * Math.PI / 180)
	let x_svg_3 = r1 + x_3

	let y_3 = r_2 * Math.sin(alfa * Math.PI / 180)
	let y_svg_3 = r1 - y_3
	
	let x_4 = r_2 * Math.cos(omega * Math.PI / 180)
	let x_svg_4 = r1 + x_4

	let y_svg_4 = y_svg_3


	return {
		coords: {
			x: {
				xSVG1: x_svg_1,
				xSVG2: x_svg_2,
				xSVG3: x_svg_3,
				xSVG4: x_svg_4
			},
			y: {
				ySVG1: y_svg_1,
				ySVG2: y_svg_2,
				ySVG3: y_svg_3,
				ySVG4: y_svg_4
			}
		},
		end: degrees,
		r2: r_2
	}
}


function getSecondaryArcData(value, valuesSum, r1, r2, end) {

	let degrees = value * ((360 - 4) / valuesSum)
	let alfa = 90 - (end + 1)
	let omega = alfa - degrees


	let x_1 = r1 * Math.cos(alfa * Math.PI / 180)
	let x_svg_1 = r1 + x_1

	let y_1 = r1 * Math.sin(alfa * Math.PI / 180)
	let y_svg_1 = r1 - y_1
	

	let x_2 = r1 * Math.cos(omega * Math.PI / 180)
	let x_svg_2 = r1 + x_2

	let y_2 = r1 * Math.sin(omega * Math.PI / 180)
	let y_svg_2 = r1 - y_2


	let x_3 = r2 * Math.cos(alfa * Math.PI / 180)
	let x_svg_3 = r1 + x_3

	let y_3 = r2 * Math.sin(alfa * Math.PI / 180)
	let y_svg_3 = r1 - y_3
	

	let x_4 = r2 * Math.cos(omega * Math.PI / 180)
	let x_svg_4 = r1 + x_4

	let y_4 = r2 * Math.sin(omega * Math.PI / 180)
	let y_svg_4 = r1 - y_4


	return {
		coords: {
			x: {
				xSVG1: x_svg_1,
				xSVG2: x_svg_2,
				xSVG3: x_svg_3,
				xSVG4: x_svg_4
			},
			y: {
				ySVG1: y_svg_1,
				ySVG2: y_svg_2,
				ySVG3: y_svg_3,
				ySVG4: y_svg_4
			}
		},
		end: end + 1 + degrees
	}
}
