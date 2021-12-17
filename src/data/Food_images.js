import { importAll } from './importAll.js';
import Format from './Format.js';

const imageDict = importAll(require.context('../images/food_images', false, /\.(png|jpe?g|svg)$/));
let food = [];
Object.keys(imageDict).forEach(function(key) {
    food.push(
        <Format
            image_link={imageDict[key]}
            key={key}
        />
    );
});

export default food;