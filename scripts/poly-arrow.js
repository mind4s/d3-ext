d3.polya =  function(){

    var polya = {};

    polya.layout = function( s, e, w ){

        var start, end, width;

        start = { x: s[0], y: s[1]};
        end = { x: e[0], y: e[1]};
        width = w;

        var len = Math.sqrt(Math.pow( end.x - start.x, 2 ) + Math.pow( end.y - start.y, 2 ));
        var sign =  end.x - start.x > 0 ? 1 : -1;
        var hend = { x: start.x + sign*len, y: start.y}; //horizontal end
        var ps= [];


        ps.push( { x: start.x, y: start.y - width/2 } );
        ps.push( { x: start.x, y: start.y + width/2 } );
        var aw = width; // arrow width

        ps.push( { x: start.x + sign*(len - aw), y: start.y + aw/2 } );
        ps.push( { x: start.x + sign*(len - aw), y: start.y + aw } );
        ps.push( hend );
        ps.push( { x: start.x + sign*(len - aw), y: start.y - aw } );
        ps.push( { x: start.x + sign*(len - aw), y: start.y - aw/2 } );

        ps.push( { x: start.x, y: start.y - width/2 } );


        var str = "";
        ps.forEach( function(p){
            str+= p.x +","+ p.y+" ";
        } );

        var v1 = { x: hend.x - start.x, y: hend.y - start.y };
        var v2 = {x: end.x - start.x, y: end.y - start.y};
        var angle = Math.acos( ( v1.x * v2.x + v1.y * v2.y )/(len*len) ) / Math.PI * 180;
        var trans = "rotate("+angle + " "+start.x +" "+start.y +")";

        polya.ps = str;
        polya.trans = trans;
        return polya;
    };

    polya.transform = function(){
        return polya.trans;
    };
    
    polya.points = function () {
        return polya.ps;
    };


    return polya;
};