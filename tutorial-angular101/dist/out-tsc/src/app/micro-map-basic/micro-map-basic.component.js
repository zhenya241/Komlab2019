var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
var MicroMapBasicComponent = /** @class */ (function () {
    function MicroMapBasicComponent() {
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 570;
        this.colors = d3.scaleOrdinal(d3.schemeCategory10);
        // store the nodes
        this.nodes = [
            { id: 0, text: 'computer science', x: 300, y: 70, reflexive: true },
            { id: 1, text: 'algorithm', x: 210, y: 140, reflexive: true },
            { id: 2, text: 'programming', x: 350, y: 160, reflexive: true },
            { id: 3, text: 'problem solving', x: 120, y: 210, reflexive: true },
            { id: 4, text: 'low-level language', x: 270, y: 230, reflexive: true },
            { id: 5, text: 'high-level language', x: 410, y: 230, reflexive: true },
            { id: 6, text: 'debugging', x: 480, y: 210, reflexive: true },
            { id: 7, text: 'machine code', x: 230, y: 300, reflexive: true },
            { id: 8, text: 'source code', x: 420, y: 300, reflexive: true },
            { id: 9, text: 'bug', x: 550, y: 260, reflexive: true },
            { id: 10, text: 'logic error', x: 510, y: 320, reflexive: true },
            { id: 11, text: 'compile-time error', x: 670, y: 320, reflexive: true },
            { id: 12, text: 'run-time error', x: 590, y: 320, reflexive: true },
            { id: 13, text: 'intepreter', x: 340, y: 360, reflexive: true },
            { id: 14, text: 'compiler', x: 480, y: 360, reflexive: true },
        ];
        // store the link words
        this.linkwords = [
            { id: 0, text: 'is science of', x: 255, y: 105, reflexive: false },
            { id: 1, text: 'for', x: 165, y: 175, reflexive: false },
            { id: 2, text: 'is about', x: 328, y: 120, reflexive: false },
            { id: 3, text: 'has', x: 350, y: 195, reflexive: false },
            { id: 4, text: 'uses', x: 415, y: 185, reflexive: false },
            { id: 5, text: 'is called', x: 250, y: 265, reflexive: false },
            { id: 6, text: 'is called', x: 415, y: 265, reflexive: false },
            { id: 7, text: 'to find', x: 515, y: 235, reflexive: false },
            { id: 8, text: 'in', x: 485, y: 280, reflexive: false },
            { id: 9, text: 'includes', x: 570, y: 290, reflexive: false },
            { id: 10, text: 'into', x: 285, y: 330, reflexive: false },
            { id: 11, text: 'is translated with', x: 410, y: 335, reflexive: false },
        ];
        // store the links
        this.links = [
            { source: this.nodes[0], target: this.linkwords[0], left: false, right: false },
            { source: this.linkwords[0], target: this.nodes[1], left: false, right: true },
            { source: this.nodes[1], target: this.linkwords[1], left: false, right: false },
            { source: this.linkwords[1], target: this.nodes[3], left: false, right: true },
            { source: this.nodes[0], target: this.linkwords[2], left: false, right: false },
            { source: this.linkwords[2], target: this.nodes[2], left: false, right: true },
            { source: this.nodes[2], target: this.linkwords[3], left: false, right: false },
            { source: this.linkwords[3], target: this.nodes[4], left: false, right: true },
            { source: this.linkwords[3], target: this.nodes[5], left: false, right: true },
            { source: this.nodes[2], target: this.linkwords[4], left: false, right: false },
            { source: this.linkwords[4], target: this.nodes[6], left: false, right: true },
            { source: this.nodes[4], target: this.linkwords[5], left: false, right: false },
            { source: this.linkwords[5], target: this.nodes[7], left: false, right: true },
            { source: this.nodes[5], target: this.linkwords[6], left: false, right: false },
            { source: this.linkwords[6], target: this.nodes[8], left: false, right: true },
            { source: this.nodes[6], target: this.linkwords[7], left: false, right: false },
            { source: this.linkwords[7], target: this.nodes[9], left: false, right: true },
            { source: this.nodes[9], target: this.linkwords[8], left: false, right: false },
            { source: this.linkwords[8], target: this.nodes[8], left: false, right: true },
            { source: this.nodes[9], target: this.linkwords[9], left: false, right: false },
            { source: this.linkwords[9], target: this.nodes[10], left: false, right: true },
            { source: this.linkwords[9], target: this.nodes[11], left: false, right: true },
            { source: this.linkwords[9], target: this.nodes[12], left: false, right: true },
            { source: this.nodes[13], target: this.linkwords[10], left: false, right: false },
            { source: this.linkwords[10], target: this.nodes[7], left: false, right: true },
            { source: this.nodes[8], target: this.linkwords[11], left: false, right: false },
            { source: this.linkwords[11], target: this.nodes[13], left: false, right: true },
            { source: this.linkwords[11], target: this.nodes[14], left: false, right: true },
        ];
    }
    MicroMapBasicComponent.prototype.ngOnInit = function () {
    };
    MicroMapBasicComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.svg = d3.select('#graphContainer')
            .attr('oncontextmenu', 'return false;')
            .attr('width', this.width)
            .attr('height', this.height);
        // arrow styles
        this.svg.append('svg:defs').append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 6)
            .attr('markerWidth', 3)
            .attr('markerHeight', 3)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#000');
        this.svg.append('svg:defs').append('svg:marker')
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
        this.path = this.svg.append('svg:g').selectAll('path');
        this.circle = this.svg.append('svg:g').selectAll('g');
        this.linkword = this.svg.append('svg:g').selectAll('text');
        ;
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    MicroMapBasicComponent.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        this.restart();
    };
    MicroMapBasicComponent.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
    };
    // refresh function
    MicroMapBasicComponent.prototype.restart = function () {
        var _this = this;
        // bind the paths with data
        this.path = this.path.data(this.links);
        // bind the white rectangulars with data
        this.path.exit().remove();
        // create paths
        this.path = this.path
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
            if (d.target.reflexive) {
                if (Math.abs(d.source.x - d.target.x) > 10 * Math.abs(d.source.y - d.target.y) || Math.abs(d.source.x - d.target.x) === 10 * Math.abs(d.source.y - d.target.y)) {
                    targetPadding = d.right ? 27 - 0.25 * (2 - xy) : 17 - 0.25 * (2 - xy);
                    // targetPadding = d.right ? 27-800000*(2-xy)*Math.pow((dist/2310),5) : 17-400000*(2-xy)*Math.pow((dist/2310),5);
                }
                else if (Math.abs(d.source.x - d.target.x) > 3 * Math.abs(d.source.y - d.target.y) || (Math.abs(d.source.x - d.target.x) === 3 * Math.abs(d.source.y - d.target.y))) {
                    targetPadding = d.right ? 27 - 0.8 * (2 - xy) : 17 - 0.8 * (2 - xy);
                }
                else if (Math.abs(d.source.x - d.target.x) < 3 * Math.abs(d.source.y - d.target.y)) {
                    targetPadding = d.right ? 27 - 4 * (2 - xy) : 17 - 2 * (2 - xy);
                }
            }
            else {
                targetPadding = 8;
            }
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
            .merge(this.path);
        // bind the circle with data
        this.circle = this.circle.data(this.nodes, function (d) { return d.id; });
        // create ellipses
        this.circle.selectAll('ellipse')
            .style('fill', function (d) { return _this.colors(d.id); })
            .style('stroke', function (d) { return ('white'); });
        this.circle.exit().remove();
        // for each ellipse create a g element
        var g = this.circle.enter().append('svg:g');
        // create ellipses
        g.append('svg:ellipse')
            .attr('class', 'node')
            .attr('rx', 25)
            .attr('ry', 15)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) { return _this.colors(d.id); })
            .style('stroke', function (d) { return 'white'; });
        // create texts
        g.append('svg:text')
            .attr('class', 'text')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'white')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
        this.circle = g.merge(this.circle);
        // create link words
        this.linkword = this.linkword.data(this.linkwords, function (d) { return d.id; });
        this.linkword.exit().remove();
        // const g1 = this.linkword.enter().append('svg:g');
        this.linkword = this.linkword.enter()
            .append('svg:text')
            .attr('class', 'text')
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('fill', 'red')
            .attr('font-size', '5')
            .attr('text-anchor', 'middle')
            .text(function (d) { return d.text; });
    };
    __decorate([
        ViewChild('graphContainer', { static: true }),
        __metadata("design:type", ElementRef)
    ], MicroMapBasicComponent.prototype, "graphContainer", void 0);
    MicroMapBasicComponent = __decorate([
        Component({
            selector: 'app-micro-map-basic',
            templateUrl: './micro-map-basic.component.html',
            styleUrls: ['./micro-map-basic.component.css']
        })
    ], MicroMapBasicComponent);
    return MicroMapBasicComponent;
}());
export { MicroMapBasicComponent };
//# sourceMappingURL=micro-map-basic.component.js.map