(function (){
var shape = {
    lineWidth: function ( value ) {
        if ( value ) {
            return this.option.lineWidth;
        } else {
            this.option.lineWidth = value;
            this.clear();
            this.draw();
        }
    },
    stroke: function ( value ) {

    },
    lineJoin: function ( value ) {

    },
    // ....

    config: function () {
        // 初始化需要绘图的内容
        // 由 this.option 提供
        var ctx = this.option.context,
            option = this.option;

        ctx.lineWidth = option.lineWidth || 1;
        ctx.lineCap = option.lineCap || 'butt';
        ctx.lineJoin = option.lineJoin || 'miter';
        ctx.setLineDash( option.lineDash || [] );

        ctx.strokeStyle = option.stroke || 'black';
        ctx.fillStyle = option.fill || 'black';
    },

    init: function () {
        var ctx = this.option.context;
        ctx.beginPath();
        ctx.save();
    },

    finish: function () {
        var ctx = this.option.context;
        ctx.restore();
    },

    clear: function () {

    },
    draw: function () {
        var ctx = this.option.context,
            option = this.option;

        this.init();
        this.config(); // 配置 configuration


        // 这里执行具体的绘图工作
        this.drawing( ctx, option );


        ctx.stroke();
        if ( option.fill ) {
            ctx.fill();
        }

        this.finish();

    }
};


function Line( option ) {
    this.option = option;

    this.drawing = function ( context, option ) {
        context.moveTo( option.points[ 0 ], option.points[ 1 ] );
        context.lineTo( option.points[ 2 ], option.points[ 3 ] );
    }
} 
Line.prototype = shape;


function Circle ( option ) {
    this.option = option;

    this.drawing = function ( context, option ) {
        context.arc( option.x, option.y, option.r, 0, 2 * Math.PI );
    }
}
Circle.prototype = shape;


// id, width, height
function Stage ( option ) {
    // 创建 canvas 标签等
    var canvas = document.createElement( 'canvas' );
    canvas.width = option.width || 300;
    canvas.height = option.height || 150;
    document.getElementById( option.id ).appendChild( canvas );

    this.context = canvas.getContext( '2d' );

    this.shapes = [];
    this.add = function ( shape ) {
        shape.option.context = this.context;
        this.shapes.push( shape );
    },
    this.render = function () {
        // 遍历 shapes 依次执行里面的 draw
        this.shapes.forEach(function ( v ) {
            v.draw();
        });
    }
}


Stage.Line = Line;
Stage.Circle = Circle;

this.Stage = Stage;

})();