
// const r = 164 // Внешний радиус
const r = 120


// Вычисление координат элиптической дуги:

const getMainArcData = (value, valuesSum, r1, coef) => {

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

const mainArcData = getMainArcData(30, 182, r, 0.7)

console.log(mainArcData)

// const getSizes = (data) => {

// 	xArray = Object.values(data.coords.x)

// 	let x_min = Math.min(...xArray)
// 	// let x_max = Math.max(...xArray)

// 	yArray = Object.values(data.coords.y)

// 	let y_min = Math.min(...yArray)
// 	// let y_max = Math.max(...yArray)

// 	// let width = x_max - x_min
// 	// let heigth = y_max - y_min

// 	return {
// 		xMin: x_min,
// 		yMin: y_min,
// 		// heigth: heigth,
// 		// width: width
// 	}
// }

// const mainArcDataSizes = getSizes(mainArcData)

// console.log(mainArcDataSizes)


const getSecondaryArcData = (value, valuesSum, r1, r2, end) => {

	let degrees = value * ((360 - 4) / valuesSum)

	let alfa = 90 - (end + 1)

	// if (90 - end > 0) alfa = 90 - (end + 1)
	// else alfa = 360 - (90 - end) - 1

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

const secondArcData = getSecondaryArcData(32, 182, r, mainArcData.r2, mainArcData.end)

console.log(secondArcData)

// const secondArcDataSizes = getSizes(secondArcData)

// console.log(secondArcDataSizes)

const thirdArcData = getSecondaryArcData(58, 182, r, mainArcData.r2, secondArcData.end)

console.log(thirdArcData)

// const thirdArcDataSizes = getSizes(thirdArcData)

// console.log(thirdArcDataSizes)

const fourthArcData = getSecondaryArcData(62, 182, r, mainArcData.r2, thirdArcData.end)

console.log(fourthArcData)
