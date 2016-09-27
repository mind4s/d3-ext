# d3-ext
d3 extensions

## arrow between two points
given tow points and width, calculate a polygon ended with an arrow.

![arrow demo1](https://github.com/foojolt/d3-ext/blob/master/demo.png?raw=true)
![arrow demo2](https://github.com/foojolt/d3-ext/blob/master/arrow-demo.PNG?raw=true)

```
var p = d3.polya().layout( [ 100, 100 ],[ 40, 40 ],  10 );

svg.append( "g")
    .attr( "transform", p.transform() )
    .append( "polygon")
    .attr( "points", p.points())
    .style( "fill", "gray" );

```
