import { getAverageColor } from 'fast-average-color-node';

getAverageColor('./sunflower.jpg').then((result) => {
    console.log('result', result);
});