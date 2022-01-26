import axios from 'axios';

const URL = 'https://opentdb.com/api.php?amount=20&encode=url3986';
const options = {};

const getTriviaData = async (category, difficulty, type) => {
    try {
        const { data: { results }} = await axios.get(URL);
        //console.log(decodeURIComponent(results[0].question));
        
        return results;
    } catch (e) {
        console.log(e);
    }
}

export default getTriviaData;