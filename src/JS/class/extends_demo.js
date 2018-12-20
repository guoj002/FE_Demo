class Point {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	toString(){
		console.log('x: ', this.x, ' y: ', this.y)
	}
}

class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y)
		this.color = color
	}
	toString(){
		super.toString()
		console.log('color: ', this.color)
		console.log('color1: ', color1)
	}
}
console

const color1 = new ColorPoint(1, 2, 'red')

color1.toString() 