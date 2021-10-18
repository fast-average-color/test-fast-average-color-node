"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fast_average_color_node_1 = require("fast-average-color-node");
fast_average_color_node_1.getAverageColor('./sunflower.jpg').then((result) => {
    console.log('result', result);
});
