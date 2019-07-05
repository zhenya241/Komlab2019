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
import { Router } from '@angular/router';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.title = 'KomTest';
        this.width = 1240;
        this.height = 570;
        this.k = 1;
        this.colors = d3.scaleOrdinal(d3.schemeCategory10);
        this.clickOnNode = false;
        this.selectedNode = null;
        this.selectedLink = null;
        this.mousedownLink = null;
        this.mousedownNode = null;
        this.mouseupNode = null;
        // store the nodes
        this.nodes = [
            { id: 0, text: 'java', x: 300, y: 70, reflexive: false },
            { id: 1, text: 'computer science', x: 150, y: 100, reflexive: false },
            { id: 2, text: 'program', x: 250, y: 300, reflexive: false },
            { id: 3, text: 'variable', x: 350, y: 275, reflexive: false },
            { id: 4, text: 'primitive type', x: 430, y: 240, reflexive: false },
            { id: 5, text: 'object', x: 520, y: 180, reflexive: false },
            { id: 6, text: 'class', x: 500, y: 120, reflexive: false },
            { id: 7, text: 'method', x: 520, y: 50, reflexive: false },
        ];
        // store the links
        this.links = [
            { source: this.nodes[0], target: this.nodes[1], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[2], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[3], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[4], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[5], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[6], left: false, right: true },
            { source: this.nodes[0], target: this.nodes[7], left: false, right: true },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var rect = this.graphContainer.nativeElement.getBoundingClientRect();
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
        this.info = this.svg.append('svg:g').selectAll('rect');
        // refresh after each mousedown and mouseup
        this.svg.on('mousedown', function (dataItem, value, source) { return _this.mousedown(dataItem, value, source); });
        this.restart();
        this.svg.on('mouseup', function (dataItem) { return _this.mouseup(dataItem); });
        this.restart();
    };
    HomeComponent.prototype.mousedown = function (dataItem, value, source) {
        // when mouse down set this.svg as active
        this.svg.classed('active', true);
        if (this.clickOnNode === false) {
            // if (this.mousedownNode === this.selectedNode || this.mousedownNode === null) {
            // if click on the same node once again or click on the background, then not zooming
            this.centered = null;
            this.selectedNode = null;
            this.centerx = this.width / 2;
            this.centery = this.height / 2;
            this.k = 1;
            this.svg.transition()
                .duration(750)
                .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')scale(' + this.k + ')translate(' + -this.centerx + ',' + -this.centery + ')');
            console.log('this is my : ' + this.selectedNode);
            this.restart();
            // }
        }
        this.restart();
    };
    HomeComponent.prototype.mouseup = function (source) {
        // when mouseup, set the svg background as inactive
        this.svg.classed('active', false);
        // clear mouse event vars
        this.mousedownNode = null;
        this.mouseupNode = null;
        this.mousedownLink = null;
        this.clickOnNode = false;
        // remove all white rectangulars when the scale is 1
        if (this.k === 1) {
            this.svg.selectAll('rect').remove();
        }
    };
    HomeComponent.prototype.toMicro = function (id) {
        this.svg.selectAll('ellipse').remove();
        this.svg.selectAll('path').remove();
        this.svg.selectAll('text').remove();
        if (id === 1) {
            this.router.navigate(['/computerScience']);
        }
        else if (id === 2) {
            this.router.navigate(['/program']);
        }
        else if (id === 3) {
            this.router.navigate(['/variable']);
        }
        else if (id === 4) {
            this.router.navigate(['/primitiveType']);
        }
        else if (id === 5) {
            this.router.navigate(['/object']);
        }
        // this.router.navigate(['/page'+id]);
        //  this.router.navigate(['test/singleChoice']);
        // this.router.navigate(['/micro-basic']);
    };
    // refresh function
    HomeComponent.prototype.restart = function () {
        var _this = this;
        // bind the paths with data
        this.path = this.path.data(this.links);
        // bind the white rectangulars with data
        // this.info = this.info.data(this.infos);
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
            var sourcePadding = 0;
            var targetPadding = 0;
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
            // const targetPadding = d.right ? 27-0.5*(2-xy) : 17-0.5*(2-xy);
            var sourceX = d.source.x + (sourcePadding * normX);
            var sourceY = d.source.y + (sourcePadding * normY);
            var targetX = d.target.x - (targetPadding * normX);
            var targetY = d.target.y - (targetPadding * normY);
            // calculate the d attribute for path
            return "M" + d.source.x + "," + d.source.y + "L" + targetX + "," + targetY;
        })
            // set arrow style
            .style('marker-start', function (d) { return d.left ? 'url(#start-arrow)' : ''; })
            .style('marker-end', function (d) { return d.right ? 'url(#end-arrow)' : ''; })
            .merge(this.path);
        this.info.exit().remove();
        this.info = this.info
            .enter()
            .append('svg:rect')
            .attr('class', 'info')
            .attr('x', function (d) { return d.target.x; })
            .attr('y', function (d) { return d.target.y; })
            .attr('fill', 'white')
            .attr('width', '60')
            .attr('height', '80')
            .attr('visibility', function (d) { return d.hidden ? 'hidden' : 'visible'; });
        // bind the circle with data
        this.circle = this.circle.data(this.nodes, function (d) { return d.id; });
        // create ellipses
        this.circle.selectAll('ellipse')
            .style('fill', function (d) { return (d === _this.selectedNode) ? d3.rgb(_this.colors(d.id)).brighter().toString() : _this.colors(d.id); })
            .style('stroke', function (d) { return (d === _this.selectedNode) ? 'black' : 'white'; });
        this.circle.exit().remove();
        // for each ellipse create a g element
        var g = this.circle.enter().append('svg:g');
        // create ellipses
        g.append('svg:ellipse')
            .attr('class', 'node')
            .attr('rx', 55)
            .attr('ry', 20)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            // .attr('fill',(d) => d.id===0? 'red': 'black')
            .style('fill', function (d) { return (d === _this.selectedNode) ? d3.rgb(_this.colors(d.id)).brighter().toString() : _this.colors(d.id); })
            .style('stroke', function (d) { return (d === _this.selectedNode) ? 'black' : 'white'; })
            .on('mousedown', function (d) {
            // select node
            _this.mousedownNode = d;
            _this.selectedNode = (_this.mousedownNode === _this.selectedNode) ? null : _this.mousedownNode;
            // if click on the same node twice, focus and zoom will be reset
            _this.centerx = _this.centered !== d ? d.x : _this.width / 2;
            _this.centery = _this.centered !== d ? d.y : _this.height / 2;
            _this.k = _this.centered !== d ? 3 : 1;
            _this.centered = _this.centered !== d ? d : null;
            _this.clickOnNode = true;
            _this.svg.selectAll('rect').remove();
            _this.svg.transition()
                .duration(750)
                .attr('transform', 'translate(' + _this.width * _this.k / 2 + ',' + _this.height * _this.k / 2 + ')scale(' + _this.k + ')translate(' + -_this.centerx + ',' + -_this.centery + ')');
            if (d.id <= 5) {
                setTimeout(function () { _this.toMicro(d.id); }, 700);
                // this.toMicro(d.id);
            }
        })
            .on('mouseover', function (d) {
            d3.select('svg').selectAll('ellipse.node').filter(function (a, i) {
                return a['id'] === d.id;
            })
                .style('stroke', function (d) { return 'black'; })
                .style('stroke-width', '3px');
        })
            .on('mouseout', function (d) {
            d3.select('svg').selectAll('ellipse.node').filter(function (a, i) {
                return a['id'] === d.id;
            })
                .style('stroke', function (d) { return 'white'; })
                .style('stroke-width', '1.5px');
        });
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
    };
    __decorate([
        ViewChild('graphContainer', { static: true }),
        __metadata("design:type", ElementRef)
    ], HomeComponent.prototype, "graphContainer", void 0);
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [Router])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map