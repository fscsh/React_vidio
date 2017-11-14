import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import SearchBar from './components/searchbar';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyAm7AqeI5ARrqy4cdqDOUeAVS0fTzLVVBo';

class App extends Component{

        constructor(props){
        super(props);

        this.state = {
             videos: [],
             selectedVideo:null
         };
        YTSearch({ key: API_KEY, term: 'country music'}, (videos) =>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });

    }

    render(){
    return(
        <div>
            <SearchBar />
            <VideoDetail video = {this.state.selectedVideo} />
            <VideoList
            onVideoSelect = {selectedVideo =>this.setState({selectedVideo})}
            videos = {this.state.videos} />
        </div>
    );
}
}

ReactDOM.render(<App />, document.querySelector('.container'));
