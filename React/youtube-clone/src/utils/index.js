import moment from 'moment'
import 'moment/locale/ko';

function ProcessViewCount(viewCount) {
    if (viewCount < 1000) {
        return `조회수 ${viewCount}회`;
    }
    else if (viewCount < 10000) {
        return `조회수 ${(viewCount / 1000).toFixed(1)}천회`;
    }
    else if (viewCount < 100000) {
        return `조회수 ${(viewCount / 10000).toFixed(1)}만회`;
    }
    else if (viewCount < 100000000) {
        return `조회수 ${(viewCount / 10000).toFixed(0)}만회`;
    }
    else {
        return `조회수 ${(viewCount / 100000000).toFixed(0)}억회`;
    }
}

function ProcessUploadDate(date) {
    const standard = moment('2021-09-16T13:40:02');
    return moment(date).from(standard);
}

export {ProcessViewCount, ProcessUploadDate};