CanvasRenderingContext2D.prototype.drawTextOnArc = function(radius, center, angle, text) {
    this.save()

    const fullTextWidth = this.measureText(text).width
    const totalAngle = fullTextWidth / radius

    let startAngle =  angle * Math.PI /180- totalAngle / 2
    switch (this.textAlign) {
            case 'left':
            startAngle =  angle * Math.PI /180
            break;
            case 'right':
            startAngle =  angle * Math.PI /180- totalAngle
            break;
        default:
            break;
    }
    this.textAlign = 'center'
    
    this.translate(center.X, center.Y)
    this.rotate(startAngle)
    this.translate(-center.X, -center.Y)

    text.split('').forEach(c => {
        const rangle = this.measureText(c).width / fullTextWidth * totalAngle /2
       
        this.translate(center.X, center.Y)
        this.rotate(rangle)
        this.translate(-center.X, -center.Y)

        this.fillText(c, center.X, center.Y-radius)  

        this.translate(center.X, center.Y)
        this.rotate(rangle)
        this.translate(-center.X, -center.Y)
    })
    this.restore()
}
