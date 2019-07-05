var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as d3 from 'd3';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
var TestMapService = /** @class */ (function () {
    function TestMapService(http) {
        this.http = http;
    }
    TestMapService.prototype.initSvg = function (svg, width, height, path, circle, linkword, circleNextMap, toNextMapRect, linkwords, toNextMapButton) {
        svg = d3.select('svg')
            .attr('oncontextmenu', 'return false;')
            .attr('width', width)
            .attr('height', height)
            .attr('ready', false);
        // arrow styles
        svg.append('svg:defs').append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 6)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#000');
        svg.append('svg:defs').append('svg:marker')
            .attr('id', 'start-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 4)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M10,-5L0,0L10,5')
            .attr('fill', '#000');
        // add the svg<g> element to group svg shapes together
        path = svg.append('svg:g').selectAll('path.link');
        circle = svg.append('svg:g').selectAll('g');
        circleNextMap = svg.append('svg:g').selectAll('gNextMap');
        // circleNextMap = svg.append('svg:g').selectAll('g');
        linkword = svg.append('svg:g').selectAll('text.linkword');
        // link word should only be created once, therefore moved into ngAfterInit
        // create link words
        linkword = linkword.data(linkwords, function (d) { return d.id; });
        linkword.exit().remove();
        // const g1 = linkword.enter().append('svg:g');
        linkword = linkword.enter()
            .append('svg:g')
            .attr('class', 'linkword')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('length', function (d) { return d.text.length; })
            .merge(linkword);
        svg.selectAll('g.linkword')
            .append('svg:ellipse')
            .attr('class', 'linkword')
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y - 1; })
            .attr('rx', '10')
            .attr('ry', '10')
            .attr('fill', 'lightgrey');
        svg.selectAll('g.linkword')
            .append('svg:text')
            .attr('class', 'linkword')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'red')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        console.log(linkwords.length);
        var _loop_1 = function (id) {
            var textLength = svg.selectAll('g.linkword').filter(function (a, i) {
                return i === id;
            }).attr('length');
            //  console.log(parseInt(textLength)+1);
            svg.selectAll('ellipse.linkword').filter(function (a, i) {
                return i === id;
            }).attr('rx', parseInt(textLength) * 2.5 + 8);
        };
        for (var id = 0; id < parseInt(linkwords.length); id++) {
            _loop_1(id);
        }
        // create rectangular for asking if switch to the next map
        toNextMapRect = svg.append('rect')
            .attr('class', 'toNext')
            .attr('x', '200')
            .attr('y', '100')
            .attr('width', '800')
            .attr('height', '120')
            .attr('rx', '30')
            .attr('ry', '30')
            .style('fill', 'yellow')
            .style('opacity', '0.9')
            .attr('visibility', 'hidden');
        toNextMapRect = svg.append('svg:text')
            .attr('class', 'toNext')
            .attr('x', '460')
            .attr('y', '140')
            .attr('font-size', '30px')
            .attr('text-anchor', 'left')
            .attr('fill', 'purple')
            .text('Go to next map?')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        });
        toNextMapButton = svg.append('svg:rect')
            .attr('class', 'button')
            .attr('x', '320')
            .attr('y', '170')
            .attr('width', '150')
            .attr('height', '30')
            .attr('rx', '5')
            .attr('ry', '5')
            .style('opacity', '0.9')
            .attr('fill', 'green')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        })
            .on('mousedown', function (d) {
            svg.select('text.toNext').attr('routerLink', '/variable');
        });
        toNextMapButton = svg.append('svg:rect')
            .attr('class', 'button')
            .attr('x', '690')
            .attr('y', '170')
            .attr('width', '150')
            .attr('height', '30')
            .attr('rx', '5')
            .attr('ry', '5')
            .style('opacity', '0.9')
            .attr('fill', 'red')
            .attr('visibility', function (d) {
            return svg.select('rect.toNext').attr('visibility');
        })
            .on('mousedown', function (d) {
            svg.select('rect.toNext').attr('visibility', 'hidden');
            svg.select('text.toNext').attr('visibility', 'hidden');
            svg.selectAll('rect.button').attr('visibility', 'hidden');
        });
        return [svg, path, circle, linkword, circleNextMap, toNextMapRect];
    };
    TestMapService.prototype.buildMicroMap = function (svg, path, links, circle, nodes, linkword, linkwords, nodesNextMap, circleNextMap, offset) {
        // svg.select('text.toNext').attr('font-size', '30px')
        // .attr('visibility', (d)=>{
        //   return svg.select('rect.toNext').attr('visibility');
        // });
        // bind the paths with data
        path = path.data(links);
        // bind the white rectangulars with data
        path.exit().remove();
        // create paths
        path = path
            .enter()
            .append('svg:path')
            .attr('class', 'link')
            .attr('d', function (d) {
            var deltaX = d.target.x - d.source.x;
            var deltaY = d.target.y - d.source.y;
            var dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            var normX = deltaX / dist;
            var normY = deltaY / dist;
            var xy = Math.abs(deltaX / deltaY);
            var sourcePadding = 8;
            var targetPadding = 0;
            targetPadding = 0;
            sourcePadding = 0;
            // const targetPadding = d.right ? 27-0.5*(2-xy) : 17-0.5*(2-xy);
            var sourceX = d.source.x + (sourcePadding * normX);
            var sourceY = d.source.y + (sourcePadding * normY);
            var targetX = d.target.x - (targetPadding * normX);
            var targetY = d.target.y - (targetPadding * normY);
            // calculate the d attribute for path
            return "M" + sourceX + "," + sourceY + "L" + targetX + "," + targetY;
        })
            // set arrow style
            .style('marker-start', function (d) { return d.left ? 'url(#start-arrow)' : ''; })
            .style('marker-end', function (d) { return d.right ? 'url(#end-arrow)' : ''; })
            .merge(path);
        // bind the circle with data
        circle = circle.data(nodes, function (d) { return d.id; });
        circle.exit().remove();
        circleNextMap = circleNextMap.data(nodesNextMap, function (d) { return d.id; });
        circleNextMap.exit().remove();
        // for each node create a g element
        var g = circle.enter().append('svg:g');
        var gNextMap = circleNextMap.enter().append('svg:g');
        gNextMap.append('svg:ellipse')
            .attr('class', 'nodeNextMap')
            .attr('rx', 55)
            .attr('ry', 20)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) { return 'grey'; })
            .style('opacity', '0.9')
            .style('stroke', 'white')
            .on('mousedown', function (d) {
            svg.select('rect.toNext').attr('visibility', 'visible');
            svg.select('text.toNext').attr('visibility', 'visible');
            svg.selectAll('rect.button').attr('visibility', 'visible');
        });
        // create ellipses
        g.append('svg:ellipse')
            .attr('class', 'node')
            .attr('rx', 55)
            .attr('ry', 20)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) {
            return 'green';
        })
            .style('stroke', function (d) { return (!d.reflexive) ? 'black' : 'white'; })
            .on('mousedown', function (d) {
            // this code is needed for initialize the mousedown function before dragging the slider bar
            if (parseInt(svg.select('circle.ball').attr('cx')) === 900) {
                window.alert('Node locked');
            }
            else {
            }
        });
        // create texts
        g.append('svg:text')
            .attr('class', 'eText')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        gNextMap.append('svg:text')
            .attr('class', 'eTextNextMap')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        circleNextMap = gNextMap.merge(circleNextMap);
        circleNextMap.exit().remove();
        circle = g.merge(circle);
        circle.exit().remove();
        var routerLink = svg.select('text.toNext').attr('routerLink');
        // console.log(routerLink);
        return [svg, circle, path, linkword, circleNextMap, routerLink];
    };
    TestMapService.prototype.random_item = function (length) {
        var randomitem = [];
        while (randomitem.length <= (length / 4)) {
            var i = Math.floor(Math.random() * Math.floor(length));
            if (!randomitem.includes(i)) {
                randomitem.push(i);
            }
        }
        console.log(randomitem);
        return randomitem;
    };
    TestMapService.prototype.callServer = function (mapName, resultAnswer, testMode) {
        var _this = this;
        var headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://127.0.0.1:3000/get').subscribe(function (data) {
            console.log('origin' + JSON.stringify(data));
            if (testMode === 'blocktest') {
                for (var key in resultAnswer) {
                    data[mapName][testMode][key][resultAnswer[key]] = parseInt(data[mapName].blocktest[key][resultAnswer[key]]) + 1;
                    data[mapName][testMode].total[resultAnswer[key]] = parseInt(data[mapName].blocktest.total[resultAnswer[key]]) + 1;
                }
            }
            else if (testMode === 'choicetest') {
                for (var key in resultAnswer) {
                    data[mapName][testMode][key] = parseInt(data[mapName][testMode][key]) + parseInt(resultAnswer[key]);
                }
            }
            else {
                _this.resultChoicetest = parseInt(data[mapName]['choicetest']['true']) / (parseInt(data[mapName]['choicetest']['true']) + parseInt(data[mapName]['choicetest']['false']));
                _this.resultBlocktest = parseInt(data[mapName]['blocktest']['total']['true']) / (parseInt(data[mapName]['blocktest']['total']['true']) + parseInt(data[mapName]['blocktest']['total']['false']));
            }
            console.log('get: ' + JSON.stringify(data[mapName]['choicetest']));
            console.log('success');
            _this.http.post('http://127.0.0.1:3000/post', JSON.stringify(data), {
                headers: headers
            })
                .subscribe(function (data) {
                // console.log('send: ' + JSON.stringify(data));
            });
        }, function (err) {
            console.log('Error occured.' + JSON.stringify(err));
        });
        if (testMode === 'getresult') {
            return 'Choice Test result: ' + this.resultChoicetest.toString() + '%          \nBlock Test result: ' + this.resultBlocktest + "%";
        }
    };
    TestMapService.prototype.callServerTest = function () {
        return this.http.get('http://127.0.0.1:3000/get').pipe(map(function (res) {
            return res;
        }));
    };
    TestMapService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], TestMapService);
    return TestMapService;
}());
export { TestMapService };
//# sourceMappingURL=testMap.service.js.map