
function returnLeaders(data) {
	return `
		<div class="container u-df-column-between">
			<header class="header">
				<h1 class="header__title title">${ data.title }</h1>
				<p class="header__description description-text">${ data.subtitle }</p>
			</header>
			<main class="main">
				<div class="main__content main__content--leaders">
					<ul class="list-leaders u-df-center-end">
						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--0 u-df-column-end-start">
							<div class="list-rectangle list-rectangle--0">
								<div class="list-person list-person--0">
									<div class="person"><img class="person__avatar" src="../img/${ data.users[4].avatar }" alt="${ data.users[4].name }">
										<p class="person__name">${ data.users[4].name }</p>
									</div>
									<p class="list-person__value">${ data.users[4].valueText }</p>
								</div>
								<p class="list-rectangle__rating list-rectangle__rating--0">5</p>
							</div>
						</li>
						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--1 u-df-column-end-start">
							<div class="list-rectangle list-rectangle--1">
								<div class="list-person list-person--1">
									<div class="person"><img class="person__avatar" src="../img/${ data.users[2].avatar }" alt="${ data.users[2].name }">
										<p class="person__name">${ data.users[2].name }</p>
									</div>
									<p class="list-person__value">${ data.users[2].valueText }</p>
								</div>
								<p class="list-rectangle__rating list-rectangle__rating--1">3</p>
							</div>
						</li>
						<li class="list-leaders__item list-leaders__item--primary list-leaders__item--2 u-df-column-end-center">
							<div class="list-person">
								<p class="list-person__emoji">${ data.emoji }</p>
								<div class="person"><img class="person__avatar" src="../img/${ data.users[0].avatar }" alt="${ data.users[0].name }">
									<p class="person__name">${ data.users[0].name }</p>
								</div>
								<p class="list-person__value">${ data.users[0].valueText }</p>
							</div>
							<div class="list-rectangle list-rectangle--2">
								<p class="list-rectangle__rating list-rectangle__rating--2">1</p>
							</div>
						</li>
						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--3 u-df-column-end-end">
							<div class="list-rectangle list-rectangle--3">
								<div class="list-person list-person--3">
									<div class="person"><img class="person__avatar" src="../img/${ data.users[1].avatar }" alt="${ data.users[1].name }">
										<p class="person__name">${ data.users[1].name }</p>
									</div>
									<p class="list-person__value">${ data.users[1].valueText }</p>
								</div>
								<p class="list-rectangle__rating list-rectangle__rating--3">2</p>
							</div>
						</li>
						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--4 u-df-column-end-start">
							<div class="list-rectangle list-rectangle--4">
								<div class="list-person list-person--4">
									<div class="person"><img class="person__avatar" src="../img/${ data.users[3].avatar }" alt="${ data.users[3].name }">
										<p class="person__name">${ data.users[3].name }</p>
									</div>
									<p class="list-person__value">${ data.users[3].valueText }</p>
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
								<div class="list-vote__person person"><img class="person__avatar" src="../img/${ data.users[0] ? data.users[0].avatar : '' }" alt="${ data.users[0] ? data.users[0].name : '' }">
									<p class="person__name">${ data.users[0] ? data.users[0].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__person-container ${ data.users[3] && data.users[3].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[3] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[3] && data.users[3].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="../img/${ data.users[3] ? data.users[3].avatar : '' }" alt="${ data.users[3] ? data.users[3].name : '' }">
									<p class="person__name">${ data.users[3] ? data.users[3].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__person-container ${ data.users[6] && data.users[6].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[6] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[6] && data.users[6].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="../img/${ data.users[6] ? data.users[6].avatar : '' }" alt="${ data.users[6] ? data.users[6].name : '' }">
									<p class="person__name">${ data.users[6] ? data.users[6].name : '' }</p>
								</div>
							</div>
						</li>
						<li class="list-vote__item u-df-center horizontal">
							<div class="list-vote__person-container ${ data.users[0] && data.users[0].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[0] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[0] && data.users[0].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="../img/${ data.users[0] ? data.users[0].avatar : '' }" alt="${ data.users[0] ? data.users[0].name : '' }">
									<p class="person__name">${ data.users[0] ? data.users[0].name : '' }</p>
								</div>
							</div>
						</li>
						<li class="list-vote__item u-df-column-between horizontal">
							<div class="list-vote__central-container ${ data.users[1] && data.users[1].id === data.selectedUserId ? 'voted' : '' } list-vote__central-container ${ data.users[1] && data.users[1].id === data.selectedUserId ? 'voted' : '' } u-df-center-between" style="${ data.users[1] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[1] && data.users[1].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="person"><img class="person__avatar" src="../img/${ data.users[1] ? data.users[1].avatar : '' }" alt="${ data.users[1] ? data.users[1].name : '' }">
									<p class="person__name">${ data.users[1] ? data.users[1].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__central-container ${ data.users[4] && data.users[4].id === data.selectedUserId ? 'voted' : '' } ${ data.users[4] && data.users[4].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[4] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[4] && data.users[4].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="person"><img class="person__avatar" src="../img/${ data.users[4] ? data.users[4].avatar : '' }" alt="${ data.users[4] ? data.users[4].name : '' }">
									<p class="person__name">${ data.users[4] ? data.users[4].name : '' }</p>
								</div>
							</div>
						</li>
						<li class="list-vote__item u-df-column-evenly">
							<button class="list-vote__btn list-vote__btn--up btn" disabled="${ data.offset ? false : true }"></button>
							<div class="list-vote__central-container list-vote__central-container ${ data.users[1] && data.users[1].id === data.selectedUserId ? 'voted' : '' } u-df-center vertical" style="${ data.users[1] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[1] && data.users[1].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="person"><img class="person__avatar" src="../img/${ data.users[1] ? data.users[1].avatar : '' }" alt="${ data.users[1] ? data.users[1].name : '' }">
									<p class="person__name">${ data.users[1] ? data.users[1].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__central-container ${ data.users[4] && data.users[4].id === data.selectedUserId ? 'voted' : '' } u-df-center vertical" style="${ data.users[4] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[4] && data.users[4].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="person"><img class="person__avatar" src="../img/${ data.users[4] ? data.users[4].avatar : '' }" alt="${ data.users[4] ? data.users[4].name : '' }">
									<p class="person__name">${ data.users[4] ? data.users[4].name : '' }</p>
								</div>
							</div>
							<button class="list-vote__btn list-vote__btn--down btn" disabled="${ data.offset ? true : false }"></button>
						</li>
						<li class="list-vote__item u-df-column-evenly vertical">
							<div class="list-vote__person-container ${ data.users[2] === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[2] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[2] && data.users[2].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="../img/${ data.users[2] ? data.users[2].avatar : '' }" alt="${ data.users[2] ? data.users[2].name : '' }">
									<p class="person__name">${ data.users[2] ? data.users[2].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__person-container ${ data.users[5] && data.users[5].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[5] ? '' : 'opacity: 0; visibility: hidden' }"
								<p class="list-vote__emoji">${ data.users[5] && data.users[5].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="../img/${ data.users[5] ? data.users[5].avatar : '' }" alt="${ data.users[5] ? data.users[5].name : '' }">
									<p class="person__name">${ data.users[5] ? data.users[5].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__person-container ${ data.users[7] && data.users[7].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[7] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[7] && data.users[7].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="../img/${ data.users[7] ? data.users[7].avatar : '' }" alt="${ data.users[7] ? data.users[7].name : '' }">
									<p class="person__name">${ data.users[7] ? data.users[7].name : '' }</p>
								</div>
							</div>
						</li>
						<li class="list-vote__item u-df-column-between horizontal">
							<div class="list-vote__person-container ${ data.users[2] && data.users[2].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[2] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[2] && data.users[2].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="../img/${ data.users[2] ? data.users[2].avatar : '' }" alt="${ data.users[2] ? data.users[2].name : '' }">
									<p class="person__name">${ data.users[2] ? data.users[2].name : '' }</p>
								</div>
							</div>
							<div class="list-vote__person-container ${ data.users[5] && data.users[5].id === data.selectedUserId ? 'voted' : '' } u-df-center" style="${ data.users[5] ? '' : 'opacity: 0; visibility: hidden' }">
								<p class="list-vote__emoji">${ data.users[5] && data.users[5].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="../img/${ data.users[5] ? data.users[5].avatar : '' }" alt="${ data.users[5] ? data.users[5].name : '' }">
									<p class="person__name">${ data.users[5] ? data.users[5].name : '' }</p>
								</div>
							</div>
						</li>
						<li class="list-vote__item u-df-center horizontal" style="${ data.users[3] ? '' : 'opacity: 0; visibility: hidden' }">
							<div class="list-vote__person-container ${ data.users[3] && data.users[3].id === data.selectedUserId ? 'voted' : '' } u-df-center">
								<p class="list-vote__emoji">${ data.users[3] && data.users[3].id === data.selectedUserId ? '👍' : '' }</p>
								<div class="list-vote__person person"><img class="person__avatar" src="../img/${ data.users[3] ? data.users[3].avatar : '' }" alt="${ data.users[3] ? data.users[3].name : '' }">
									<p class="person__name">${ data.users[3] ? data.users[3].name : '' }</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</main>
		</div>
	`
}


function returnVoteResults(data) {
	return `
		<div class="container u-df-column-between">
			<header class="header">
				<h1 class="header__title title">${ data.title }</h1>
				<p class="header__description description-text">${ data.subtitle }</p>
			</header>
			<main class="main">
				<div class="main__content main__content--vote-results">
					<ul class="list-leaders u-df-center-end">
						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--0 u-df-column-end-start">
							<div class="list-rectangle list-rectangle--0">
								<div class="list-person list-person--0">
									<p class="list-person__emoji">👍</p>
									<div class="person"><img class="person__avatar" src="../img/${ data.users[7].avatar }" alt="${ data.users[7].name }">
										<p class="person__name">${ data.users[7].name }</p>
									</div>
									<p class="list-person__value">${ data.users[7].valueText }</p>
								</div>
								<p class="list-rectangle__rating list-rectangle__rating--0">5</p>
							</div>
						</li>
						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--1 u-df-column-end-start">
							<div class="list-rectangle list-rectangle--1">
								<div class="list-person list-person--1">
									<div class="person"><img class="person__avatar" src="../img/${ data.users[8].avatar }" alt="${ data.users[8].name }">
										<p class="person__name">${ data.users[8].name }</p>
									</div>
									<p class="list-person__value">${ data.users[8].valueText }</p>
								</div>
								<p class="list-rectangle__rating list-rectangle__rating--1">3</p>
							</div>
						</li>
						<li class="list-leaders__item list-leaders__item--primary list-leaders__item--2 u-df-column-end-center">
							<div class="list-person">
								<p class="list-person__emoji">${ data.emoji }</p>
								<div class="person"><img class="person__avatar" src="../img/${ data.users[4].avatar }" alt="${ data.users[4].name }">
									<p class="person__name">${ data.users[4].name }</p>
								</div>
								<p class="list-person__value">${ data.users[4].valueText }</p>
							</div>
							<div class="list-rectangle list-rectangle--2">
								<p class="list-rectangle__rating list-rectangle__rating--2">1</p>
							</div>
							<div class="list-person list-person--float vertical">
								<p class="list-person__emoji">👍</p>
								<div class="person"><img class="person__avatar" src="../img/${ data.users[7].avatar }" alt="${ data.users[7].name }">
									<p class="person__name">${ data.users[7].name }</p>
								</div>
								<p class="list-person__value">${ data.users[7].valueText }</p>
								<div class="list-person__separator separator"></div>
								<p class="list-rectangle__rating list-rectangle__rating--float">5</p>
							</div>
						</li>
						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--3 u-df-column-end-end">
							<div class="list-rectangle list-rectangle--3">
								<div class="list-person list-person--3">
									<div class="person"><img class="person__avatar" src="../img/${ data.users[11].avatar }" alt="${ data.users[11].name }">
										<p class="person__name">${ data.users[11].name }</p>
									</div>
									<p class="list-person__value">${ data.users[11].valueText }</p>
								</div>
								<p class="list-rectangle__rating list-rectangle__rating--3">2</p>
							</div>
						</li>
						<li class="list-leaders__item list-leaders__item--secondary list-leaders__item--4 u-df-column-end-start">
							<div class="list-rectangle list-rectangle--4">
								<div class="list-person list-person--4">
									<div class="person"><img class="person__avatar" src="../img/${ data.users[9].avatar }" alt="${ data.users[9].name }">
										<p class="person__name">${ data.users[9].name }</p>
									</div>
									<p class="list-person__value">${ data.users[9].valueText }</p>
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




function renderTemplate(alias, data) {
	if (alias === 'leaders') return returnLeaders(data)
	else if (alias === 'vote') return returnVote(data)
	// else if (alias === 'vote' && data.selectedUserId) return returnVote(data)
	// else if (alias === 'vote' && data.offset) return returnVoteResults(data)
	else return `<p>Извините, что-то пошло не так...</p>`
}
