import './App.css';
import youtubeData from './data/youtubeData.json';

function App() {
  for (var i = 0; i < youtubeData['data'].length; i++) {
    console.log(Object.keys(youtubeData['data'][i])[0] + ' : ' +Object.values(youtubeData['data'][i])[0] +' -> 영상 ID');
    console.log(Object.keys(youtubeData['data'][i])[1] + ' : ' +Object.values(youtubeData['data'][i])[1] +' -> 채널 ID');
    console.log(Object.keys(youtubeData['data'][i])[2] + ' : ' +Object.values(youtubeData['data'][i])[2] +' -> 업로드 날짜');
    console.log(Object.keys(youtubeData['data'][i])[3] + ' : ' +Object.values(youtubeData['data'][i])[3] +' -> 영상 제목');
    console.log(Object.keys(youtubeData['data'][i])[4] + ' : ' +Object.values(youtubeData['data'][i])[4] +' -> 썸네일');
    console.log(Object.keys(youtubeData['data'][i])[5] + ' : ' +Object.values(youtubeData['data'][i])[5] +' -> 영상 설명');
    console.log(Object.keys(youtubeData['data'][i])[6] + ' : ' +Object.values(youtubeData['data'][i])[6] +' -> 채널 이름');
    console.log(Object.keys(youtubeData['data'][i])[7] + ' : ' +Object.values(youtubeData['data'][i])[7] +' -> 카테고리');
    console.log(Object.keys(youtubeData['data'][i])[8] + ' : ' +Object.values(youtubeData['data'][i])[8] +' -> 조회수');
    console.log(Object.keys(youtubeData['data'][i])[9] + ' : ' +Object.values(youtubeData['data'][i])[9] +' -> 좋아요수');
    console.log(Object.keys(youtubeData['data'][i])[10] + ' : ' +Object.values(youtubeData['data'][i])[10] +' -> 채널  URL');
    console.log(Object.keys(youtubeData['data'][i])[11] + ' : ' +Object.values(youtubeData['data'][i])[11] +' -> 채널 썸네일');
  }
  
  return <div>리액트로 데이터 불러오기</div>;
}

export default App;