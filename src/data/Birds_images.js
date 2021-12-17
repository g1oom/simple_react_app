import { importAll } from './importAll.js';
import Format from './Format.js';

const imageDict = importAll(require.context('../images/birds_images', false, /\.(png|jpe?g|svg)$/));
let birds = [];
Object.keys(imageDict).forEach(function(key) {
    birds.push(
        <Format
            image_link={imageDict[key]}
            key={key}
        />
    );
});

export default birds;