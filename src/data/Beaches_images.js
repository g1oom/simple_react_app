import { importAll } from './importAll.js';
import Format from './Format.js';

const imageDict = importAll(require.context('../images/beaches_images', false, /\.(png|jpe?g|svg)$/));
let beaches = [];
Object.keys(imageDict).forEach(function(key) {
    beaches.push(
        <Format
            image_link={imageDict[key]}
            key={key}
        />
    );
});

export default beaches;