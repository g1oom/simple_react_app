import { importAll } from './importAll.js';
import Format from './Format.js';

const imageDict = importAll(require.context('../images/mountain_images', false, /\.(png|jpe?g|svg)$/));
let mountain = [];
Object.keys(imageDict).forEach(function(key) {
    mountain.push(
        <Format
            image_link={imageDict[key]}
            key={key}
        />
    );
});

export default mountain;