import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 
            'Bearer rTqRTPj_SxNNFjDerCLEXDVui0lisUEkfkKRx4GjIi5ZqwYCBecg-7EQFuqQQZgAKU_IVXli6K_bvGUg4mYrlm5c4DOvF_kCv9wcS6uPxW-nZkJuQROu8Gh7Q0BRX3Yx'
    }
});