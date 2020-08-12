import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 2VoIcRquyRanRQEX_fpT2ws5j2FwnAEMqakZfTB7geW4-Nfv6cUsGKPiZUcsja20WKPz4cWk__mzOp-jUlpc2AYSO8ZnP2RuMRT054xELqOqmHYVs_kshjfIGzYVX3Yx'
    }
});