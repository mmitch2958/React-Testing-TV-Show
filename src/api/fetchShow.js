import axios from 'axios';



const fetchShow = (setShow, setSeasons, formatSeasons) => {
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
      .then(res => {
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));
        console.log(res)
      }).catch(err => {
          window.alert(err);
      })
    
  }

  export default fetchShow;