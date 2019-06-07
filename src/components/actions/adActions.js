// Set login status
const ADS_URL = "http://localhost:9000/ad";

export const fetchAds = () => {
    // return {
    //     type: "FETCH_ADS",
    //     payload: null
    // };

    return function (dispatch) {
        return fetch(ADS_URL, {
            method: 'GET'
        })
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: "FETCH_ADS_COMPLETE",
                    payload: json
                });
            })
    }
}